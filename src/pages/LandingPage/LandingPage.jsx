import { Link } from "react-router-dom";
import roomBackground from "../../assets/landingpage/room_background.png"
import { About, Footer, Navbar, Product } from "./component";

export function LandingPage() {
  return (
    <>
    <main className="h-[728px] bg-orange-400">
        <Navbar />
        <section id="home" className="relative max-w-screen-xl flex items-center mx-auto h-[calc(728px_-_12.5rem)]">
          <div className="w-2/5 flex flex-col justify-center text-white gap-4">
            <h1 className="text-9xl font-neurial-extrabold">Room</h1>
            <h2 className="text-4xl font-bold tracking-wide">Connect in Your Space</h2>
            <p className="text-xl font-rubik-light text-justify">Room brings conversations to life with a personal touch. Whether catching up with friends or brainstorming with colleagues, enjoy seamless messaging and intuitive features that make every chat feel just right.</p>
            <Link to="/login">
            <button className="w-48 py-4 mt-4 bg-blue-500 font-light tracking-widest rounded">LOG IN</button>
            </Link>
          </div>
          <div className="w-3/5">
            <img className="relative size-[40rem] top-16 left-32" src={roomBackground} alt="Room Background" />
          </div>
        </section>
    </main>
    <section id="product" className="max-w-screen-xl mx-auto py-28">
      <Product />
    </section>
    <section id="about" className="bg-orange-400">
      <About />
    </section>
    <Footer />
    </>
  )
}
