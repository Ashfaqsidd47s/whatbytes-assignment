import UserMarksInfoSS from "@/components/cswrappers/UserMarksInfo";
import UpdateData from "@/components/DialougBox";
import { MyLineChart } from "@/components/LineChart";
import { MarksPieChart } from "@/components/PiChart";
import SylabusAnalysis from "@/components/SylabusAnalysis";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-fit flex flex-col gap-2 md:flex-row">
      <div className="p-3 flex flex-col gap-3 items-center w-full md:w-3/5 ">
        <div className=" p-4 w-full bg-white flex gap-2 border  rounded-md">
          <div className=" flex-none h-[70px] w-[70px] ">
            <Image width={70} height={70} src="/html.svg" alt="html" />
          </div>
          <div className=" flex-grow">
            <h3 className=" text-xl font-semibold line-clamp-1">Hyper text transfer protocall</h3>
            <p className=" line-clamp-1"> Questions: db | Duration: 15 min | Submited on 5 jane 2021</p>
          </div>
          <UpdateData />
        </div>
        <UserMarksInfoSS />
        <MyLineChart />
      </div>
      <div className=" p-4  flex flex-col gap-4 w-full md:w-2/5 ">
        <SylabusAnalysis />
        <MarksPieChart  />
      </div>
    </div>
  );
}
