import { Navlist } from "./Navlist"
import PropTypes from 'prop-types';
export function Navbar({ homeRef, productRef, aboutRef, contactRef }) {

    const handleScroll = (ref) => {
        if (ref.current) {
            console.log(ref.current);
            ref.current.scrollIntoView({ behavior: "smooth" });
        } else {
            console.warn("Ref is not assigned to a DOM element");
        }
    };

    return (
        <nav ref={homeRef} className="h-20 z-10">
            <div className="max-w-screen-xl h-full flex flex-wrap items-center justify-end mx-auto">
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                    <Navlist name="Home" onClick={() => handleScroll(homeRef)} />
                    <Navlist name="Product" onClick={() => handleScroll(productRef)} />
                    <Navlist name="About" onClick={() => handleScroll(aboutRef)} />
                    <Navlist name="Contact" onClick={() => handleScroll(contactRef)} />
                </ul>
                </div>
            </div>
        </nav>
  )
}

Navbar.propTypes = {
    homeRef: PropTypes.func.isRequired,
    productRef: PropTypes.func.isRequired,
    aboutRef: PropTypes.func.isRequired,
    contactRef: PropTypes.func.isRequired
}