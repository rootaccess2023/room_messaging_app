import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import {  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer() {

    const icons = [
        {
            icon: faLinkedinIn,
            link: "#"
        },
        {
            icon: faGithub,
            link: "#"
        },
        {
            icon: faInstagram,
            link: "#"
        },
        {
            icon: faFacebookF,
            link: "#"
        }
    ]

    return (
        <footer id="contact" className="bg-orange-400">
            <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-zinc-50 sm:text-center ">© 2024 <a href="https://flowbite.com/" className="hover:underline">Rootaccess2023</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        {icons.map((icon, index) => (
                            <a key={index} href={icon.link} className="mr-2">
                                <span className="inline-flex items-center justify-center w-6 h-6 text-white hover:text-neutral-200">
                                    <FontAwesomeIcon icon={icon.icon} />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
  )
}
