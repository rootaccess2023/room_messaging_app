import { faCommentDots, faHouseChimney, faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function RoomWelcome() {
    return (
      <div className="w-full bg-gray-100  p-8 rounded-lg shadow-lg">
        <h2 className="text-xl  text-orange-500 font-semibold mb-6">
          We&apos;re thrilled to have you join our community!
        </h2>
        <h2 className="text-lg text-gray-800 mb-6">
          Room is designed to make your conversations and collaborations seamless and enjoyable. To help you get started, we offer a few simple options:
        </h2>

        <ul className="list-disc list-inside space-y-4 pl-6 list-none">
          <li className="text-gray-700">
            <FontAwesomeIcon className="pr-2 text-orange-400" icon={faPeopleRoof} /><strong>Create a Room:</strong> If you’re ready to set up a new space for conversation or collaboration, simply select this option to begin the creation process. You&apos;ll be guided through the steps to customize and name your new room.
          </li>
          <li className="text-gray-700">
          <FontAwesomeIcon className="pr-2 text-orange-400" icon={faHouseChimney} /><strong>Select an Existing Room:</strong> If you prefer to join an existing room, take a moment to browse through the available options. Once you find a room that interests you, click to join and start engaging with others.
          </li>
          <li className="text-gray-700">
          <FontAwesomeIcon className="pr-2 text-orange-400" icon={faCommentDots} /><strong>Click on a Message:</strong> If you’ve received a message or notification, clicking on it will help you navigate to the relevant room or conversation, making it easy to continue your interactions.
          </li>
        </ul>
        <h2 className="text-lg font-medium text-gray-800 mt-6">
          We hope you have a great experience using Room. If you have any questions or need assistance at any point, please don’t hesitate to reach out. Thank you for choosing Room!
        </h2>
      </div>
    )
}