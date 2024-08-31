import { faCogs, faLock, faPalette, faPlug, faUser, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const product = [
    {
        "title": "Bring Your Own Style",
        "description": "Customize your conversations in Room. Whether you're texting, sending voice notes, or sharing multimedia, Room adapts to your communication style effortlessly.",
        "icon": faPalette
    },
    {
        "title": "100% Focused, No Clutter",
        "description": "Room offers a clean, distraction-free chatting environment, keeping your focus on what matters most—your messages.",
        "icon": faWindowMaximize
    },
    {
        "title": "On-Demand Features",
        "description": "Need more functionality? Room dynamically activates additional features like file sharing, group video calls, or screen sharing only when you need them.",
        "icon": faCogs
    },
    {
        "title": "Broad Integration",
        "description": "Room integrates seamlessly with your favorite tools and services, supporting custom emojis, themes, and more.",
        "icon": faPlug
    },
    {
        "title": "Privacy-First",
        "description": "Privacy is a top priority with Room, offering end-to-end encryption and customizable privacy settings to keep your data safe.",
        "icon": faLock
    },
    {
        "title": "Community-Driven",
        "description": "Room is powered by a passionate community of users and developers, constantly evolving based on feedback and contributions.",
        "icon": faUser
    }
];

export const Product = () => {
  return (
    <div className="mt-16 md:mt-0">
      <h2 className="text-4xl text-orange-400 lg:text-5xl font-bold lg:tracking-tight">
        Everything You Need to Start a Conversation
      </h2>
      <p className="text-lg mt-4 text-slate-600">
        Room comes fully equipped with all the features you need to create the perfect communication space. We take the best of modern messaging tools and add our own unique touches to elevate your experience.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
        {product.map((item, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="flex items-center justify-center mt-1 bg-orange-400 rounded-full p-2 w-8 h-8 shrink-0">
                <FontAwesomeIcon className='text-white' icon={item.icon} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
