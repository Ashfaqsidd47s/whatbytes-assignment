import { Award, ChartNoAxesCombined, StickyNote } from 'lucide-react'
import React from 'react'
import UserInfo from './UserInfo'

export default function Sidebar() {
  return (
    <div className='hidden flex-none w-[200px] pt-[100px] pr-2 md:flex flex-col gap-1 border-r'>
        <div className=' md:hidden'>
            <UserInfo />
        </div>
        <div className=' w-full flex items-center gap-3 p-3 rounded-r-full cursor-pointer font-semibold'>
            <ChartNoAxesCombined />
            Dashbord
        </div>
        <div className=' w-full flex items-center gap-3 bg-blue-50 text-blue-600 p-3 rounded-r-full cursor-pointer font-semibold'>
            <Award />
            Skill Test
        </div>
        <div className=' w-full flex items-center gap-3 p-3 rounded-r-full cursor-pointer  font-semibold'>
            <StickyNote />
            Internship
        </div>
    </div>
  )
}
