import { useState } from 'react';
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";


function Seat() {
    useState(0)
    // const [message, setMessage] = useState('');

    // const handleClick = () => {
    //     setMessage('A1')
    // }

  return (
    <div className='flex flex-col gap-9'>
                        <div className='text-2xl font-semibold'>Choose Your Seat</div>
                        <div className='text-sm text-text1 font-semibold text-center'>Screen</div>
                        <div className='flex flex-col gap-3 justify-center items-center'>
                            <div className='md:hidden w-[295px] h-1.5 rounded-full bg-biru'></div>
                            <div className='flex justify-center'>

                                <div className='flex flex-col gap-2'>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>A</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>B</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>C</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>D</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>E</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>F</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>G</button>
                                </div>
                                <div className='md:hidden h-340 w-[1px] rounded-full bg-purple'></div>
                                <div className='grid grid-cols-7 gap-2'>
                                    {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>A</button> */}
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md  bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#6E7191]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>B</button> */}
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#6E7191]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#6E7191]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>C</button> */}
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#1D4ED8]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#1D4ED8]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#1D4ED8]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>D</button> */}
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#6E7191]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>E</button> */}
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#6E7191]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>F</button> */}
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>G</button> */}
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#6E7191]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'></button> */}
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>1</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>2</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>3</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>4</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>5</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>6</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>7</button>
                                    
                                </div>
                                <div className='grid grid-cols-8 gap-2'>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md '></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#6E7191]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md '></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md '></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#6E7191]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#6E7191]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md '></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#6E7191]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#6E7191]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md '></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md '></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#F589D7]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#F589D7]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#6E7191]'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md '></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'></button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>8</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>9</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>10</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>11</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>12</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>13</button>
                                    <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>14</button>
                                </div>
                            </div>
                            <div className='flex pt-[-12px]'>
                                <div className='md:hidden w-32 h-[1px] rounded-full bg-red'></div>
                                <div className='md:hidden w-[80px] h-[1px] rounded-full bg-white'></div>
                                <div className='md:hidden w-32 h-[1px] rounded-full bg-red'></div>
                            </div>
                        </div>
                        <div className='text-lg font-medium px-4 md:px-11'>Seating key</div>
                        <div className='flex flex-col gap-3'>
                            <div className='md:hidden flex px-4 gap-28'>
                                <div className='flex gap-2 items-center text-lg font-semibold'><FaArrowDown />A-G</div>
                                <div className='flex gap-2 items-center text-lg font-semibold'><FaArrowRight />1-14</div>
                            </div>
                            <div className='grid grid-cols-2 md:flex gap-4 md:gap-10 px-4 md:px-11'>
                                <div className='flex gap-4 items-center'>
                                    <div className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></div>
                                    <div>Available</div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#1D4ED8]'></div>
                                    <div>Selected</div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#F589D7]'></div>
                                    <div>Love nest</div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#6E7191]'></div>
                                    <div className='text-sm text-text1 font-semibold'>Sold</div>
                                </div>
                            </div>
                        </div>
                        <div className='md:hidden flex flex-col gap-7'>
                            <div className='flex justify-between'>
                                <label htmlFor="choosed">Choosed</label>
                                <div>C4</div>
                            </div>
                            <div className='flex justify-between px-6'>
                                <div className='flex flex-col gap-2'>
                                    <select className='py-3.5 px-6  w-28 rounded-md bg-abuMuda2 focus:outline-none' id='event' name='event'>
                                        <option value=''>C</option>
                                        <option value=''>A</option>
                                        <option value=''>B</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2'>
                                   <select className='py-3.5 px-6  w-28 rounded-md bg-abuMuda2 focus:outline-none' id='event' name='event'>
                                       <option value=''>4</option>
                                       <option value=''>3</option>
                                       <option value=''>2</option>
                                    </select>
                                </div>
                            </div>
                            <div className='justify-center items-center flex'>
                                <button className='w-72 h-14 border border-orenMuda rounded-xl text-oren'>Add new seat</button>
                            </div>
                        </div>
                    </div>
  );
}

export default Seat;

