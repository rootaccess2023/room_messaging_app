import { useState } from "react";
import { Button, IconEye, Input, Question, SignupLogin } from "../../components";
import { createUser } from "../../utils/api";
import { ToastContainer } from 'react-toastify'
import { toastError, toastSuccess } from "../../utils/toaster";
import { useNavigate } from "react-router-dom";

export function SignupPage() {

    const [passwordType, setPasswordType] = useState('password');
    const [passwordConfirmationType, setPasswordConfirmationType] = useState('password');
    const [input, setInput] = useState({
        email: "",
        password: "",
        password_confirmation: ""
    })

    const handlePasswordType = () => {
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    };
    const handlePasswordConfirmationType = () => {
        setPasswordConfirmationType(passwordConfirmationType === 'password' ? 'text' : 'password');
    };

    const navigate = useNavigate()

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInput(previousInput => ({
            ...previousInput,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await createUser(input);
            if (response) {
                console.log('Registration Successful:', response);
                toastSuccess('Registration successful!')
                setInput({
                    email: "",
                    password: "",
                    password_confirmation: ""
                })
                navigate("/room")
            } else {
                throw new Error('Registration failed.');
            }
        } catch (error) {
            console.error('Registration error:', error.message);
            toastError('Registration failed. Try again.')
        }
    }

    return (
    <main className="h-screen flex justify-center items-center bg-orange-400">
        <div className="size-[30rem] bg-white rounded p-8">
            <SignupLogin />
            <form onSubmit={handleSubmit}  className="relative flex flex-col items-center gap-8">
                <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={input.email}
                    onChange={handleInput}
                />
                <Input
                    name="password"
                    type={passwordType}
                    placeholder="Password"
                    value={input.password}
                    onChange={handleInput}
                />
                <Input
                    name="password_confirmation"
                    type={passwordConfirmationType}
                    placeholder="Confirm Password"
                    value={input.password_confirmation}
                    onChange={handleInput}
                />
                <Button />
                <IconEye
                    style='relative bottom-[14.2rem] left-44 text-gray-500 cursor-pointer'
                    onClick={handlePasswordType}
                    passwordType={passwordType}
                />
                <IconEye
                    style='relative bottom-[12rem] left-44 text-gray-500 cursor-pointer'
                    onClick={handlePasswordConfirmationType}
                    passwordType={passwordConfirmationType}
                />
                <Question
                    style="absolute right-[7.5rem] bottom-20"
                    question="Already a member?"
                    answer="Login"
                    link="/login"
                />
            </form>
        </div>
        <ToastContainer />
    </main>
  )
}
