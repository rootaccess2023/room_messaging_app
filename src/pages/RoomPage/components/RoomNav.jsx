import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function RoomNav({ activeTab, setActiveTab }) {
    const navlist = [
        {
            title: "Messages"
        },
        {
            title: "Rooms"
        },
        {
            title: "Friends"
        },
    ];

    return (
        <section className="flex flex-col gap-4 bg-slate-100 pt-6 px-6 border-b">
            <div className="flex items-center gap-2">
                <h1 className="font-black text-2xl">Room</h1>
            </div>
            <div className="relative">
                <FontAwesomeIcon className="absolute top-[0.6rem] left-3 text-zinc-500" icon={faSearch} />
                <input
                    className="w-full rounded-full px-9 py-[0.3em] border"
                    placeholder="Search..."
                />
            </div>
            <div>
                <div className="text-sm font-medium text-center text-gray-500">
                    <ul className="flex justify-between">
                        {navlist.map((list, index) => (
                            <li
                                key={index}
                                onClick={() => setActiveTab(list.title)}
                                className={`inline-block px-4 p-2 border-b-2 cursor-pointer rounded-t-lg ${
                                    activeTab === list.title
                                        ? "text-gray-700 border-orange-400"
                                        : "border-transparent hover:text-gray-600 hover:border-gray-300"
                                }`}
                            >
                                {list.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
