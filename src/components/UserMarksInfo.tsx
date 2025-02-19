"use state"

import UserStore from '@/store/userstore'
import React from 'react'
import Image from 'next/image'

export default function UserMarksInfo() {
    const user = UserStore((state) => state.user)

  return (
    <div className=" w-full py-4 shadow-sm border bg-white rounded-sm">
        <h3 className=" px-4 font-semibold">Quick Statistics</h3>
        <div className=" flex items-center justify-center flex-wrap">
            <div className=" flex-grow flex gap-3 p-3 border-x">
                <div className=" flex-none w-[50px] h-[50px] rounded-full bg-gray-100 flex items-center justify-center">
                    <Image width={40} height={40} src="/badge.png" alt='badge' />
                </div>
                <div>
                <p className=" font-semibold" >{user.rank}</p>
                <p className=" text-gray-600 font-thin line-clamp-1">YOUR RANK</p>
                </div>
            </div>
            <div className=" flex-grow flex gap-3 p-3 border-x">
                <div className=" flex-none w-[50px] h-[50px] rounded-full bg-gray-100 flex items-center justify-center">
                    <Image width={40} height={40} src="/note.png" alt='badge' />
                </div>
                <div className=''>
                    <p className=" font-semibold  " >{user.percentile}%</p>
                    <p className=" text-gray-600 font-thin ">PERCENTILE</p>
                </div>
            </div>
            <div className=" flex-grow flex gap-3 p-3 border-x ">
                <div className=" flex-none w-[50px] h-[50px] rounded-full bg-gray-100 flex items-center justify-center">
                    <Image width={40} height={40} src="/tick.png" alt='badge' />
                </div>
                <div className=' w-full'>
                <p className=" font-semibold" >{user.marks}</p>
                <p className=" w-full text-gray-600 font-thin truncate">MARKS</p>
                </div>
            </div>
        </div>
    </div>
  )
}
