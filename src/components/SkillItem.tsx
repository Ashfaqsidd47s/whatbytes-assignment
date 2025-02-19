export default function SkillItem({ skill, percentage, color ="", bgColor=""}: { skill: string; percentage: number , color?: string, bgColor?: string}) {
    return (
      <div className="p-4 w-full flex flex-col gap-2">
        <p className="text-lg  text-black/70">{skill}</p>
        <div  className=" w-full flex gap-12">
          <div className={`w-full h-3 bg-blue-300 rounded-full overflow-hidden ${bgColor}`}>
            <div className={`h-full rounded-full shadow-sm bg-blue-500 transition-all duration-300 ${color}`} style={{width: `${percentage}%`}} />
          </div>
          <p className="text-sm font-medium">{percentage}%</p>
        </div>
      </div>
    );
  }