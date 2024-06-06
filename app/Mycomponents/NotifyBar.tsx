"use client";

interface NotifyBarProps {
  show: boolean;
}

const NotifyBar: React.FC<NotifyBarProps> = ({ show }) => {
  if (!show) {
    return null;
  }
  
  const notifyitems = [
    {
      avatar: "https://github.com/shadcn.png",
      name: "Biyash Shrestha",
      message: "started following you",
      time: "1 hour ago"
    },
    {
      avatar: "https://github.com/shadcn.png",
      name: "Anuj Karn",
      message: "invites you to join the group",
      time: "1 hour ago"
    },
    {
      avatar: "https://github.com/shadcn.png",
      name: "Anish Karn",
      message: "started following you",
      time: "1 hour ago"
    },
    {
      avatar: "https://github.com/shadcn.png",
      name: "Dipesh sanjel",
      message: "has invited to join the huddle metting at 9",
      time: "5 minutes ago"
    },
    {
      avatar: "https://github.com/shadcn.png",
      name: "Sameer Aryal",
      message: "started following you",
      time: "1 hour ago"
    },
    {
      avatar: "https://github.com/shadcn.png",
      name: "Shristi Bajracharya",
      message: "started following you",
      time: "1 hour ago"
    }
  ];
  
  return (
    <div className="w-[300px] border-l min-h-screen border-r-2">
      <h2 className="p-4">Notifications</h2>
      <div>
        {notifyitems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center  space-x-4 py-2 hover:bg-gray-900 ${index !== 0 ? 'border-t border-gray-200' : ''}`}
          >
            <img src={item.avatar} alt={`${item.name} avatar`} className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-400">{item.message}</p>
              <p className="text-xs text-gray-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotifyBar;
