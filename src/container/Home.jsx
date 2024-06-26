import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HiChevronDoubleLeft } from 'react-icons/hi2'
import { MdHome } from 'react-icons/md'
import { motion } from 'framer-motion'
import { FaSearchengin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { logo_2 } from '../assets/index'
import { Projects, SignUp } from '../container/Index'
import { useSelector, useDispatch } from 'react-redux'
import { UserProfileDetails } from '../components/index';
import { SET_SEARCH_TERM } from './../context/actions/searchActions';



const Home = () => {

    const [isSideMenu, setIsSideMenu] = useState(false);
    const user = useSelector((state) => state.user?.user)
    const searchTerm = useSelector(state => state.searchTerm?.searchTerm ? state.searchTerm?.searchTerm : "")
    const dispatch = useDispatch()
    return (
        <>
            <div className={`w-2 ${isSideMenu ? " w-2" : "flex-[.2] xl:flex[.2] "} 
            min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200  ease-in-out`}>

                {/* acnhor */}
                <motion.div
                    whileTap={{ scale: .9 }}
                    onClick={() => setIsSideMenu(!isSideMenu)} className='w-8 h-8 bg-secondary rounded-tr-lg rounde-br-lg absolute -right-6 flex justify-center items-center cursor-pointer '>

                    <HiChevronDoubleLeft className=' text-white text-xl' />

                </motion.div>

                <div className='overflow-hidden w-full flex flex-col gap-4'>

                    {/* Logo */}
                    <Link to={"/home"}>
                        <img src={logo_2} alt='logo' className='object-contain w-32 h-auto ' />
                    </Link>

                    {/* start coding */}
                    <Link to={"/newProject"}>
                        <div className='px-6 py-3 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group hover:border-gray-200'>
                            <p className='text-gray-400 group-hover:text-gray-200'>START CODING</p>

                        </div>
                    </Link>


                    {/* home nav */}


                    {user && (
                        <Link
                            to={'/home'}
                            className='flex items-center justify-center gap-6'>
                            <MdHome className='text-primaryText text-xl' />
                            <p className='text-lg text-primaryText'>Home</p>
                        </Link>
                    )}
                </div>
            </div >


            <div className='min-h-screen max-h-screen flex-1 overflow-y-scroll h-full flex flex-col items-start justify-start px-4 md:px-12 py-4 md:py-12'>
                {/* Top section */}

                <div className='w-full flex items-center justify-between gap-3'>

                    {/* search */}

                    <div className='bg-secondary w-full px-4 py-3 flex items-center justify-center gap-3'>
                        <FaSearchengin className='text-2xl text-primaryText' />
                        <input type='text'
                            value={searchTerm}
                            className='flex-1 px-4 text-xl bg-transparent outline-none border-none text-primaryText placeholder:text-gray-600'
                            placeholder='Search Here'
                            onChange={(e) => {
                                dispatch(SET_SEARCH_TERM(e.target.value))
                            }}
                        />
                    </div>

                    {/* Profile section */}

                    {!user && (
                        <motion.div whileTap={{ scale: 0.9 }} className='flex items-center justify-start gap-3'>
                            <Link to={'/home/auth'} className='bg-emerald-500 px-6 py-2 rounded-md text-white text-lg cursor-pointer hover:bg-emerald-700'>
                                SignUp
                            </Link>
                        </motion.div>
                    )}

                    {user && <UserProfileDetails />}

                </div>

                {/* bottom section */}

                <div className='w-full'>
                    <Routes>
                        <Route path='/*' element={<Projects />} />
                        <Route path='/auth' element={<SignUp />} />
                    </Routes>

                </div>


            </div>
        </>

    )
}

export default Home
