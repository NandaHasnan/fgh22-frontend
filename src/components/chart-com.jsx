import { useState } from "react";
import Graph from '../assets/gambar/Graph lines.png'

function GraphChart() {
    useState(0); 

    return (
        <div className='overflow-x-auto flex gap-5'>
            <div className='flex flex-col gap-16'>
                <div className='text-xs text-[#999999]'>$800</div>
                <div className='text-xs text-[#999999]'>$600</div>
                <div className='text-xs text-[#999999]'>$400</div>
                <div className='text-xs text-[#999999]'>$200</div>
                <div className='text-xs text-[#999999]'>$0</div>
            </div>
            <div className='pt-16'>
                <img className="overflow-visible" src={Graph} alt="" />
                <div>
                    <div className='flex gap-36 justify-center'>
                        <div className='text-xs text-[#999999]'>Jan</div>
                        <div className='text-xs text-[#999999]'>Feb</div>
                        <div className='text-xs text-[#999999]'>Mar</div>
                        <div className='text-xs text-[#999999]'>Apr</div>
                        <div className='text-xs text-[#999999]'>May</div>
                        <div className='text-xs text-[#999999]'>Jun</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GraphChart;
