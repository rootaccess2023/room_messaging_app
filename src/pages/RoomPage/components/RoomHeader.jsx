import { faEllipsis, faShareNodes, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function RoomHeader({selectedUser}) {

    const icon = [
        {
            icon: faShareNodes,
        },
        {
            icon: faUserPlus,
        },
        {
            icon: faEllipsis,
        }
    ]

    return (
    <section className="flex items-center justify-between px-7 py-4 bg-slate-100 border-b">
        <div className="flex items-center gap-2">
            <div className="flex justify-center items-center font-semibold  text-white text-xl size-12 bg-blue-500 rounded-full"></div>
            <h1 className="text-lg font-medium">{selectedUser}</h1>
        </div>
        <div className="flex gap-4">
            {icon.map((item, index) => (
                <div className="flex justify-center items-center text-slate-600 border border-slate-300 p-2 rounded-full" key={index}>
                    <FontAwesomeIcon className="size-6" icon={item.icon} />
                </div>
            ))}
        </div>
    </section>
  )
}
