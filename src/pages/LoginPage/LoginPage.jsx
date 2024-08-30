import { useState } from "react";
import { Button, IconEye, Input, LoginSignup, Question } from "../../components";
import { ToastContainer } from 'react-toastify'
import { toastError, toastSuccess } from "../../utils/toaster";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/api";
import Banner from "./component/Banner";

export function LoginPage() {

    const [passwordType, setPasswordType] = useState('password');
    const [input, setInput] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    const handlePasswordType = () => {
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    };

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInput(previousInput => ({
            ...previousInput,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(input);
            if (response) {
                console.log('Login Successful:', response);
                toastSuccess('Login Successful!')
                navigate("/")
            } else {
                throw new Error('Login failed.');
            };
        } catch (error) {
            console.error('Login error:', error.message);
            toastError('Login failed. Try again.')
        };
    };

    return (
    <main className="h-screen flex justify-center items-center bg-orange-500">
        <div className="size-[30rem] bg-white rounded p-8">
            <LoginSignup />
            <Banner />
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
                <Button />
                <IconEye
                    style='relative bottom-[9rem] left-44 text-gray-500 cursor-pointer'
                    onClick={handlePasswordType}
                    passwordType={passwordType}
                />
                <Question
                    style="absolute right-28 bottom-8"
                    question="Not yet a member?"
                    answer="Signup"
                    link="/signup"
                />
            </form>
        </div>
        <ToastContainer />
    </main>
  )
}
