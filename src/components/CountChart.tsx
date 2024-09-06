"use client"
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

import Image from "next/image";
const data = [
  {
    name: 'Total',
    count: 117,
    fill: 'white',
  },
    {
      name: 'Girls',
      count: 57,
      fill: '#FAE27C',
    },
    {
      name: 'Boys',
      count: 60,
      fill: '#C3EBFA',
    },
    
  ];



const CountChart = () => {
  return (
    <div className='bg-white-500 rounded-xl w-full h-full p-4'>
        {/* TITLE */}
    <div className="flex justify-between items-center">
        <h1 className=" text-lg font-semi-bold ">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
    </div>
        {/* CHART */}
    <div className="relative w-full h-[75%]">
    <ResponsiveContainer  >
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt="" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>


    </div>
    {/* BOTTOM */}
    <div className="flex justify-center gap-16">

      <div className="flex flex-col gap-1">
        <div className="w-5 h-5 bg-sallySky rounded-full">
          <h1 className="font-bold">1234</h1>
          <h2 className="text-xs text-black-300">Boys  (50%) </h2>
        </div>
      </div>

      <div className="flex justify-center gap-16">
        <div className="w-5 h-5 bg-sallyYellow rounded-full">
          <h1 className="font-bold">1234</h1>
          <h2 className="text-xs text-black-300">Girls  (50%) </h2>
        </div>
      </div>
    </div>

    </div>
  )
}

export default CountChart