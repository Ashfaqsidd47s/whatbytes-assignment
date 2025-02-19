import Image from 'next/image'
import React from 'react'
import UserInfo from './UserInfo'

export default function Navbar() {
  return (
    <div className=' h-[70px] p-3 px-6 w-full bg-white  flex items-center justify-between fixed top-0 left-0 z-50 border-b border-b-gray-200 shadow-sm'>
        <div className=' text-2xl font-bold'> WhatBytes</div>
        <UserInfo />
    </div>
  )
}
