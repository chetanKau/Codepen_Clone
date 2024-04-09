import React, { useState } from 'react'
import { logo_2 } from '../assets/index'
import { UserAuthInput } from '../components/index'
import { FaEnvelope } from 'react-icons/fa6'
import { MdPassword } from 'react-icons/md'

const SignUp = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  return (
    <div className='w-full'>
      <img src={logo_2} alt='logo' className='object-contain w-28 h-auto opacity-50 ' />


      <div className='w-full flex flex-col items-center justify-center py-8'>
        <p className='py-4 text-2xl text-primaryText'>
          Join with us! 😊
        </p>
        <div className='px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-8'>

          {/* email */}
          <UserAuthInput label="Email" palceholder="Email" isPass={false} key="Email" setStateFunction={setEmail} Icon={FaEnvelope}/>
          {/* password */}
          <UserAuthInput label="Password" palceholder="Password" isPass={true} key="Password" setStateFunction={setPassword} Icon={MdPassword}/>
          {/* alert */}

          {/* login button */}

          {/* account text section */}

          {/* or section */}

          {/* sign in with google */}

          {/* or section */}

          {/* Sign in with github */}

        </div>
      </div>
    </div>
  )
}

export default SignUp
