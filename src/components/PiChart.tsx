"use client"

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import UserStore from "@/store/userstore"
import { useEffect } from "react"
const chartData = [
  { student: "Mohammad Ashfaq", value: 14, fill: "var(--color-student)" },
]

const chartConfig = {
  value: {
    label: "Marks",
  },
  student: {
    label: "student",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig

export function MarksPieChart() {
  const user = UserStore((state)=> state.user)

  useEffect(() => {
    chartData[0].student = user.name
    chartData[0].value = user.marks
  }, [user])
  

  return (
    <Card className="flex flex-col w-full rounded-sm">
      <CardHeader className="items-center pb-0">
        <div className=" w-full flex items-center justify-between">
          <CardTitle className=" font-bold text-2xl">Totla Marks </CardTitle>
          <p className=" font-extrabold text-2xl text-blue-700 ">{user.marks}/15</p>
        </div>
        <CardDescription className="  text-black/80 text-lg "><span className=" font-bold">You scored {user.marks} out of 15. </span> However it still needs some improvement</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={360 * user.marks/15}
            innerRadius={75}
            outerRadius={130}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 64]}
            />
            <RadialBar dataKey="value" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {user.marks.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Marks
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        marks obtained
      </CardFooter>
    </Card>
  )
}
