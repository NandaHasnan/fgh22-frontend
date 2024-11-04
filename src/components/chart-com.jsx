import { useState } from "react";
import Graph from '../assets/gambar/Graph lines.png'

function GraphChart() {
    useState(0); 

    return (
        <div className='flex gap-5'>
            <div className='flex flex-col gap-16'>
                <div className='text-xs text-[#999999]'>$800</div>
                <div className='text-xs text-[#999999]'>$600</div>
                <div className='text-xs text-[#999999]'>$400</div>
                <div className='text-xs text-[#999999]'>$200</div>
                <div className='text-xs text-[#999999]'>$0</div>
            </div>
            <div className='pt-16'>
                <img src={Graph} alt="" />
                <div className='flex gap-44 justify-center'>
                <div className='text-xs text-[#999999]'>$800</div>
                <div className='text-xs text-[#999999]'>$600</div>
                <div className='text-xs text-[#999999]'>$400</div>
                <div className='text-xs text-[#999999]'>$200</div>
                <div className='text-xs text-[#999999]'>$0</div>
            </div>
            </div>
        </div>
    );
}

export default GraphChart;
