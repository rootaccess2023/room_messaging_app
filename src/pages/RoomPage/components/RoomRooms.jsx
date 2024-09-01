import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export function RoomRooms({ allChannels, handleSelectedUser }) {

    useEffect(() => {
      console.log(allChannels)
    })

    return (
      <div className='h-[calc(100%_-_243.6px)] overflow-scroll'>
        {allChannels.map((user) => (
          <div
            onClick={() => handleSelectedUser(user)}
            className='flex items-center font-medium border-b px-6 py-4 gap-4 cursor-pointer hover:bg-slate-100'
            key={user.id}
          >
            <FontAwesomeIcon className='size-8 bg-blue-500 text-white p-2 rounded-full' icon={faUsers} />
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    );
  }

  RoomRooms.propTypes = {
    allChannels: PropTypes.array,
    handleSelectedUser: PropTypes.func.isRequired
  }