import React, { useState } from 'react'
import { HiChevronDoubleLeft } from 'react-icons/hi2'

const Home = () => {

    const [isSideMenu, setIsSideMenu] = useState(false)
    return (
        <>
            <div className={`w-2 ${isSideMenu ? " w-2" : "flex-[.2] xl:flex[.2] "} 
            min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200  ease-in-out`}>

                {/* acnhor */}
                <div onClick={()=>setIsSideMenu(!isSideMenu)} className='w-8 h-8 bg-secondary rounded-tr-lg rounde-br-lg absolute -right-6 flex justify-center items-center cursor-pointer '>
                    <HiChevronDoubleLeft className=' text-white text-xl'/>
                </div>

                {/* Logo */}


                {/* start coding */}


                {/* home nav */}
            </div >

            <div>

            </div>
        </>

    )
}

export default Home
