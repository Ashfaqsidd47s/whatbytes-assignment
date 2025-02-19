import React from 'react'
import SkillItem from './SkillItem'

export default function SylabusAnalysis() {
  return (
    <div className=' p-3 w-full border-collapse border bg-white rounded-sm'>
        <h3 className=' text-2xl font-semibold px-4'>Sylabus Analysis</h3>
        <SkillItem skill='HTML Tools, form history' percentage={80} color=' bg-orange-500' bgColor=' bg-orange-200' />
        <SkillItem skill='Tags & References in HTML' percentage={30} color=' bg-purple-500' bgColor=' bg-purple-200' />
        <SkillItem skill='Tables & References in HTML' percentage={90} color=' bg-yellow-500' bgColor=' bg-yellow-200' />
        <SkillItem  skill='Tables & css basics' percentage={25} color=' bg-blue-500' bgColor=' bg-blue-200' />
    </div>
  )
}
