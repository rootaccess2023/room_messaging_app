import { faPaperPlane } from "@fortawesome/free-regular-svg-icons/faPaperPlane";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

export function RoomText({sendInput, handleSenderInput, handleSubmit}) {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleSubmit(e);
        }
      };

    return (
    <section className="relative pb-6 px-6">
        <FontAwesomeIcon className="absolute top-[1.15rem] left-11 size-5"  icon={faPlus} />
        <input
            className="w-full border py-4 px-14 rounded-full"
            type="text"
            value={sendInput}
            onChange={handleSenderInput}
            onKeyDown={handleKeyDown}
            placeholder="Write your message..."
        />
        <FontAwesomeIcon
            className="absolute top-[1.15rem] right-12 size-5"
            icon={faPaperPlane}
            onClick={handleSubmit}
        />
    </section>
  )
}

RoomText.propTypes = {
    sendInput: PropTypes.func,
    handleSenderInput: PropTypes.func,
    handleSubmit: PropTypes.func
}