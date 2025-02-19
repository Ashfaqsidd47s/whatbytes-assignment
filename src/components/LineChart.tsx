"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ReferenceLine,
  ReferenceDot,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import UserStore from "@/store/userstore";
import Image from "next/image";

// Initial student data with percentiles
const chartData = [
  { student: "s1", percentile: 50 },
  { student: "s2", percentile: 50 },
  { student: "s3", percentile: 40 },
  { student: "s4", percentile: 30 },
  { student: "s5", percentile: 30 },
  { student: "s6", percentile: 90 },
  { student: "s7", percentile: 10 },
  { student: "s8", percentile: 90 },
];

// Chart colors
const chartConfig = {
  students: {
    label: "Students",
    color: "hsl(var(--chart-3))",
  },
  selected: {
    label: "Selected",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function MyLineChart() {
  const user = UserStore((state) => state.user);
  const [processedData, setProcessedData] = useState<{ percentile: number; count: number }[]>([]);
  const [avarage, setAvarage] = useState<number>(0)

  useEffect(() => {
    const updatedData = [...chartData, { student: user.name, percentile: user.percentile }];

    let sum:number = 0;
    const percentileCountMap: Record<number, number> = {};
    updatedData.forEach(({ percentile }) => {
      percentileCountMap[percentile] = (percentileCountMap[percentile] || 0) + 1;
      sum += percentile
    });
  
    setAvarage(Math.floor((sum/updatedData.length)))

    const groupedData = Object.entries(percentileCountMap)
      .map(([percentile, count]) => ({
        percentile: Number(percentile),
        count,
      }))
      .sort((a, b) => a.percentile - b.percentile); 

    setProcessedData(groupedData);
  }, [user]);

  return (
    <Card className="w-full rounded-sm">
      <CardHeader>
        <CardTitle className=" text-xl font-bold">Comparison Graph</CardTitle>
        <CardDescription className=" flex items-center justify-between gap-6">
          <p className=" flex-grow text-black/70 text-lg font-semibold">You scored {user.percentile}% percentile <span className="font-normal">{ user.percentile < avarage ? `you are below average ${avarage}% you still need a lot of improvement `: ` You are above average ${avarage}% but keep in mind you can always do better. ` }</span></p> 
          <div className=" flex-none w-[50px] h-[50px] shadow-md bg-gray-50 rounded-xl flex items-center justify-center">
            <Image width={50} height={50} src="/bar.png" alt='badge' />
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={processedData}
            margin={{ top: 20, left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="percentile"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 100]}
              label={{ value: "Percentile", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              label={{ value: "Number of Students", angle: -90, position: "insideLeft" }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Line
              dataKey="count"
              type="monotone"
              stroke={chartConfig.students.color}
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            {/* Highlight user's percentile with a reference line and dot */}
            <ReferenceLine x={user.percentile} stroke={chartConfig.selected.color} strokeWidth={1} />
            <ReferenceDot
              x={user.percentile}
              y={processedData.find((d) => d.percentile === user.percentile)?.count || 0}
              fill={chartConfig.selected.color}
              r={7}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div>User Marks Analysis</div>
      </CardFooter>
    </Card>
  );
}
