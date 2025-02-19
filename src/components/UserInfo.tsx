"use client"

import UserStore from '@/store/userstore'
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function UserInfo() {
  const user = UserStore((state) => state.user);
  const initializeUser = UserStore((state) => state.initializeUser);

  useEffect(() => {
    initializeUser()
  }, [])
  
  return (
    <div className=' p-1 pr-4 flex items-center gap-2 rounded-md shadow-lg border border-gray-200'>
        <div className=' w-[30px] h-[30px] rounded-full bg-slate-300 overflow-hidden'>
            <Image width={40} height={40} src='/avatar.png' alt='loading' ></Image>
        </div>
        <p>{user.name}</p>
    </div>
  )
}
