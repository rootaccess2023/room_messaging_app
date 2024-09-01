import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export function RoomRooms({ allChannels }) {
    return (
      <div className='h-[calc(100%_-_243.6px)] overflow-scroll'>
        {allChannels.map((room) => (
          <div className='flex items-center font-medium border-b px-6 py-4 gap-4' key={room.id}>
            <FontAwesomeIcon className='size-8 bg-blue-500 text-white p-2 rounded-full' icon={faUsers} />
            <h3>{room.name}</h3>
          </div>
        ))}
      </div>
    );
  }

  RoomRooms.propTypes = {
    allChannels: PropTypes.array
  }