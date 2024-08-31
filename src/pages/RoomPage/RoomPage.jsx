import { useEffect, useState } from "react";
import { RoomConversation, RoomFooter, RoomFriends, RoomHeader, RoomMessages, RoomNav, RoomText } from "./components";
import { RoomRooms } from "./components/RoomRooms";
import { useFetch } from "../../utils/useFetch";
import { getAllChannels, sendMessage } from "../../utils/api";
import { toastError, toastSuccess } from "../../utils/toaster";
import { ToastContainer } from "react-toastify";

export function RoomPage() {
    // Variables
    const renderContent = () => {
      switch (activeTab) {
          case "Messages":
              return <RoomMessages handleSelectedUser={handleSelectedUser} />;
          case "Rooms":
              return <RoomRooms allChannels={allChannels} />;
          case "Friends":
              return <RoomFriends />;
          default:
              return <RoomMessages handleSelectedUser={handleSelectedUser} />
      }
    };

    // useStates
    const [activeTab, setActiveTab] = useState("Message");
    const [allChannels, setAllChannel] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [receiverId, setReceiverId] = useState("");
    const [receiverClass, setReceiverClass] = useState("");
    const [sendInput, setSendInput] = useState("");

    // useFetch (Custom Hook)
    const { data: allChannelData, error: allChannelError, getData: getAllRoom } = useFetch();
    const { getData: sendData} = useFetch();

    // useEffect
    useEffect(() => {
      async function fetchAllChannels() {
        try {
          const { apiURL: allChannelUrl, options: allChannelOptions } = getAllChannels();
          await getAllRoom(allChannelUrl, allChannelOptions);
        } catch (error) {
          console.error("Error fetching all channel data:", error);
          console.error(allChannelError);
        }
      }
      fetchAllChannels();
    }, []);

    useEffect(() => {
      if (allChannelData) {
        setAllChannel(allChannelData.data);
      }
    }, [allChannelData]);

    // Handle events
    const handleSelectedUser = (user) => {
      setSelectedUser(user.email)
      setReceiverId(user.id);
      setReceiverClass("User");
    }

    const handleSenderInput = (e) => {
      setSendInput(e.target.value)
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      const requestBody = {
        receiver_id: receiverId,
        receiver_class: receiverClass,
        body: sendInput
      };

      try {
        const {apiURL: sendUrl, options: sendOptions} = sendMessage(requestBody);
        await sendData(sendUrl, sendOptions);
        toastSuccess("Message sent");
        setSendInput("");
        console.log(requestBody) // Delete Out Later

      } catch (error) {
        console.error('Error sending:', error);
        toastError('Error sending message.');
      }
    }



    return (
    <main className="h-screen w-full flex">
        <section className="min-w-[24rem] flex flex-col justify-between bg-white">
            <RoomNav activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderContent()}
            <RoomFooter />
        </section>
        {!receiverId ? (
          <p>Create a room or Select an existing message to get started</p>
        ) : (
        <section className="w-full bg-slate-50">
            <RoomHeader
              selectedUser={selectedUser}
            />
            <RoomConversation />
            <RoomText
              sendInput={sendInput}
              handleSenderInput={handleSenderInput}
              handleSubmit={handleSubmit}
            />
          </section>
          )}
      <ToastContainer />
    </main>
  )
}
