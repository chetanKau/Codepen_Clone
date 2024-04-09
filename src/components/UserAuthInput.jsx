import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa6";
import { motion } from 'framer-motion'

const UserAuthInput = ({ label, placeholder, isPass, key, setStateFunction, Icon, setGetEmailValidationState }) => {
    const [value, setValue] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false)

    const handleTextChange = (e) => {
        setValue(e.target.value);
        setStateFunction(e.target.value)

        if (placeholder === "Email") {
            const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
            const status = emailRegex.test(value)
            setIsEmailValid(status)
            setGetEmailValidationState(status)
        }
    }
    return (
        <div className="flex items-start justify-start flex-col gap-1">
            <label className="text-sm text-gray-300"> {label} </label>
            <div
                className={`flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200 ${!isEmailValid && placeholder === "Email" && value.length > 0 && "border-2 border-red-500"
                    }`}
            >
                <Icon className="text-text555 text-2xl" />
                <input
                    type={isPass && showPass ? "password" : "text"}
                    placeholder={placeholder}
                    className="flex-1 w-full h-full py-2 outline-none border-none bg-transparent text-text555 text-lg"
                    value={value}
                    onChange={
                        handleTextChange
                    }
                />
                {isPass && (
                    <motion.div whileTap={{ scale: 0.9 }} onClick={() => setShowPass(!showPass)} className="cursor-pointer">
                        {showPass ? (<FaEye className="text-text555 text-2xl" />) :
                            <FaEyeSlash className="text-text555 text-2xl" />}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default UserAuthInput;
