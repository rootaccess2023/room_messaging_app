import { Link } from "react-router-dom";

export function LoginSignup() {
  return (
    <div className="h-12 w-full flex justify-center mb-8">
        <Link
          className="w-32 flex justify-center items-center bg-orange-400 text-white font-semibold rounded-l cursor-pointer"
          to="/login"
        >
          Login
        </Link >
        <Link
          className="w-32 flex justify-center items-center bg-neutral-200 text-black font-semibold rounded-r cursor-pointer"
          to="/signup"
        >
          Signup
        </Link>
    </div>
  )
}
