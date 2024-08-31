import { Navlist } from "./Navlist"
export function Navbar() {
  return (
        <nav className="h-20">
            <div className="max-w-screen-xl h-full flex flex-wrap items-center justify-end mx-auto">
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                    <Navlist link="#" name="Home" />
                    <Navlist link="#" name="Product" />
                    <Navlist link="#" name="About" />
                    <Navlist link="#contact" name="Contact" />
                </ul>
                </div>
            </div>
        </nav>
  )
}
