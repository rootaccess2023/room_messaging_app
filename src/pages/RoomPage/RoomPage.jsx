import { useEffect, useRef, useState } from "react";
import { RoomConversation, RoomFooter, RoomFriends, RoomHeader, RoomMessages, RoomNav, RoomText } from "./components";
import { RoomRooms } from "./components/RoomRooms";
import { useFetch } from "../../utils/useFetch";
import { getAllChannels, getReceiverMessage, sendMessage } from "../../utils/api";
import { toastError, toastSuccess } from "../../utils/toaster";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // useStates
    const [activeTab, setActiveTab] = useState("Message");
    const [allChannels, setAllChannel] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [receiverId, setReceiverId] = useState("");
    const [senderId, setSenderId] = useState("");
    const [receiverClass, setReceiverClass] = useState("User");
    const [sendInput, setSendInput] = useState("");

    // useRef
    const messagesEndRef = useRef(null);

    // useNavigate
    const navigate = useNavigate();

    // Destructuring from API.js
    const {apiURL: receiverUrl, options: receiverOptions} = getReceiverMessage(receiverId, receiverClass);

    // useFetch (Custom Hook)
    const { data: allChannelData, error: allChannelError, getData: getAllRoom } = useFetch();
    const { getData: sendData} = useFetch();
    const {data: receiverMessageData, error: receiverMessageError, getData: getReceiverMessageData} = useFetch();

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

    useEffect(() => {
      if(receiverId) {
        getReceiverMessageData(receiverUrl, receiverOptions);
      }
    }, [receiverId])

    useEffect(() => {
      const loginData = JSON.parse(localStorage.getItem("loginData"));
      if (loginData && loginData.data) {
        setSenderId(loginData.data.id);
      }
    }, []);

    useEffect(() => {
      if (receiverMessageData) {
          console.log("Fetched receiverMessageData:", receiverMessageData);
      }
  }, [receiverMessageData]);

  useEffect(() => {
    if (receiverMessageError) {
      toastError('Error fetching received messages.');
    }
    if (receiverMessageData !== null) {
      console.log('Received messages:', receiverMessageData.data);
      scrollToBottom();
    }
  }, [receiverMessageData, receiverMessageError]);

    // Handle events
    const handleLogout = () => {
      localStorage.removeItem("loginData");
      navigate("/login");
      toastSuccess("You have been logged out.");
    }

    const handleSelectedUser = (user) => {
      setSelectedUser(user.email)
      setReceiverId(user.id);
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

      try {
        await getReceiverMessageData(receiverUrl, receiverOptions);
      } catch (error) {
        console.error('Error fetching messages:', error);
        toastError('Error fetching messages.');
      }
    }



    return (
    <main className="h-screen w-full flex">
        <section className="min-w-[24rem] flex flex-col justify-between bg-white border-r">
            <RoomNav activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderContent()}
            <RoomFooter handleLogout={handleLogout}/>
        </section>
        {!receiverId ? (
          <p>Create a room or Select an existing message to get started</p>
        ) : (
        <section className="w-full bg-slate-50">
            <RoomHeader
              selectedUser={selectedUser}
            />
            <RoomConversation
              receiverMessageData={receiverMessageData}
              receiverId={receiverId}
              senderId={senderId}
              messagesEndRef={messagesEndRef}
            />
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
