import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function RoomFooter({ handleLogout }) {

  const loginData = JSON.parse(localStorage.getItem('loginData')) || [];

  return (
    <section className="flex items-center justify-between bg-slate-100 px-6 py-4 border-t">
        <div className="flex items-center gap-4">
            <div className="flex items-center justify-center size-10 text-xl text-white font-bold bg-orange-400 rounded-full">{loginData.data.email[0].toUpperCase()}</div>
            <div className="tracking-wide">
                <h1 className="text-lg font-medium">{loginData.data.email}</h1>
                <h3 className="text-sm text-slate-600 font-rubik-light">User ID: Room-{loginData.data.id}</h3>
            </div>
        </div>
        <FontAwesomeIcon onClick={handleLogout} className="size-5 text-orange-400 cursor-pointer hover:text-orange-500 hover:scale-105 transition ease-out" icon={faArrowRightFromBracket} />
    </section>
  )
}
