export function RoomMessages({ handleSelectedUser }) {

  const dmUsers = JSON.parse(localStorage.getItem('dmUsers')) || [];

  return (
    <div className='h-[calc(100%_-_243.6px)] overflow-scroll'>
      {dmUsers.map((user) => (
        <div
          onClick={() => handleSelectedUser(user)}
          className='flex items-center font-medium border-b px-6 py-4 gap-4 cursor-pointer'
          key={user.id}
        >
          <p className="flex items-center justify-center text-xl text-white size-12 p-2 bg-blue-500 rounded-full">
            {user.uid[0].toUpperCase()}
          </p>
          <h3>{user.uid}</h3>
        </div>
      ))}
    </div>
  );
}
