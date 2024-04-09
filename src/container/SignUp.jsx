import React, { useState } from "react";
import { logo_2 } from "../assets/index";
import { UserAuthInput } from "../components/index";
import { FaEnvelope, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdPassword } from "react-icons/md";
import { motion } from "framer-motion";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getEmailValidationState, setGetEmailValidationState] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="w-full">
      <img
        src={logo_2}
        alt="logo"
        className="object-contain w-28 h-auto opacity-50 "
      />

      <div className="w-full flex flex-col items-center justify-center py-8">
        <p className="py-4 text-2xl text-primaryText">Join with us! 😊</p>
        <div className="px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-8">
          {/* email */}
          <UserAuthInput
            label="Email"
            placeholder="Email"
            isPass={false}
            key="Email"
            setStateFunction={setEmail}
            Icon={FaEnvelope}
            setGetEmailValidationState={setGetEmailValidationState}
          />
          {/* password */}
          <UserAuthInput
            label="Password"
            placeholder="Password"
            isPass={true}
            key="Password"
            setStateFunction={setPassword}
            Icon={MdPassword}
          />

          {/* alert */}

          {/* login button */}

          {!isLogin ? (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500"
            >
              <p className="text-white text-xl">Sign Up</p>
            </motion.div>
          ) : (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500"
            >
              <p className="text-white text-xl">Login</p>
            </motion.div>
          )}

          {/* account text section */}
          {!isLogin ? (
            <p className="text-sm text-primaryText flex items-center justify-center gap-3">
              If already have an account ! {""}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-emerald-500 cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-primaryText flex items-center justify-center gap-3">
              Dosen't have an account ! {""}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-emerald-500 cursor-pointer"
              >
                Create here
              </span>
            </p>
          )}

          {/* or section */}

          <div className="flex justify-center items-center gap-12">
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24">

            </div>
            <p className="text-sm text-[rgba(256,256,256,0.2)] ">OR</p>
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24">

            </div>
          </div>

          {/* sign in with google */}
          <motion.div className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl cursor-pointer" whileTap={{ scale: 0.9 }}>
            <FcGoogle className="text-3xl" />
            <p className="text-sm text-white">Sign In With Google</p>
          </motion.div>

          {/* or section */}
          <div className="flex justify-center items-center gap-12">
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24">

            </div>
            <p className="text-sm text-[rgba(256,256,256,0.2)] ">OR</p>
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24">

            </div>
          </div>

          {/* Sign in with github */}

          <motion.div className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl cursor-pointer" whileTap={{ scale: 0.9 }}>
            <FaGithub className="text-3xl" />
            <p className="text-sm text-white">Sign In With GitHub</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
