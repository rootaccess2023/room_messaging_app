import PropTypes from 'prop-types';
import { formatTime } from '../../../utils/helper';

export function RoomConversation({ senderId, receiverId, receiverMessageData, messagesEndRef }) {
    if (!receiverMessageData || !receiverMessageData.data) {
      return <p>No messages to display</p>;
    }

    return (
      <section className='h-[calc(100%_-_163px)] overflow-scroll pt-6 pb-3 px-6'>
          {receiverMessageData.data.map((roomMessageData) => (
              <div key={roomMessageData.id}>
                    {receiverId === roomMessageData.receiver.id ? (
                    <div className='w-full flex justify-end'>
                        <p className='max-w-[40rem] w-fit bg-orange-400 drop-shadow text-white px-3 py-2 mb-3 rounded-xl'>
                            {roomMessageData.body} <span className='text-xs'>{formatTime(roomMessageData.created_at)}</span>
                        </p>
                    </div>
                ) : senderId === roomMessageData.sender.id ? (
                    <div className='w-full flex justify-start'>
                        <p className='max-w-[40rem] w-fit bg-white drop-shadow text-zinc-800 px-3 py-2 mb-3 rounded-xl'>
                            {roomMessageData.body} <span className='text-xs'>{formatTime(roomMessageData.created_at)}</span>
                        </p>
                    </div>
                ) : null }
              </div>
          ))}
          <div ref={messagesEndRef} />
      </section>
    );
  }

  RoomConversation.propTypes = {
    senderId: PropTypes.string.isRequired,
    receiverId: PropTypes.string.isRequired,
    messagesEndRef: PropTypes.func.isRequired,
    receiverMessageData: PropTypes.shape({
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                body: PropTypes.string.isRequired,
                created_at: PropTypes.string.isRequired,
                receiver: PropTypes.shape({
                    id: PropTypes.string.isRequired,
                }).isRequired,
            })
        ).isRequired,
    }),
};