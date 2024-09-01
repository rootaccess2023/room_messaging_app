import { useState } from 'react';
import { toastError, toastSuccess } from '../../../utils/toaster';
import { createChannel } from '../../../utils/api';
import { ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';

export function RoomCreate({ allUsers }) {
  const [name, setName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [roomMember, setRoomMember] = useState([]);

  // Handle room name input change
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle adding a user to the room
  const handleAddMember = (user) => {
    if (!roomMember.some((member) => member.id === user.id)) {
      setRoomMember([...roomMember, user]); // Add user to roomMember state
    }
  };

  // Handle removing a user from the room
  const handleRemoveMember = (userId) => {
    setRoomMember(roomMember.filter((member) => member.id !== userId)); // Remove user by id
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toastError('Title cannot be empty.');
      return;
    }

    try {
      const requestBody = {
        name: name,
        user_ids: roomMember.map(member => member.id)
      };
      const { apiURL, options } = createChannel(requestBody);
      const response = await fetch(apiURL, options);

      if (response.ok) {
        toastSuccess('Channel created successfully!');
        setName('');
        setRoomMember([]);
      } else {
        toastError('Failed to create channel.');
      }
    } catch (error) {
      toastError('An error occurred while creating the channel.');
    }
  };

  // Filtered users based on the search input
  const filteredUsers = allUsers.filter(user =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='h-[calc(100%_-_243.6px)] overflow-scroll p-4'>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Room Name"
          value={name}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
            type="text"
            placeholder="Search User"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full border p-2 rounded"
        />
        <div className='h-44 border-t border-b overflow-scroll'>
          {filteredUsers.map(user => (
            <ul key={user.id}>
              <li
                className='border-b py-2 cursor-pointer hover:bg-gray-100' 
                onClick={() => handleAddMember(user)}
              >
                <FontAwesomeIcon className='pr-2 text-blue-500' icon={faEnvelope} />
                {user.email}
              </li>
            </ul>
          ))}
        </div>
        <div className='h-32 border p-2 rounded overflow-scroll'>
          {roomMember.map(member => (
            <div key={member.id} className="flex items-center justify-between bg-gray-200 p-2 rounded mb-1">
              <span>{member.email}</span>
              <FontAwesomeIcon 
                className='text-red-500 cursor-pointer' 
                icon={faTimes} 
                onClick={() => handleRemoveMember(member.id)} 
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Create Room
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
