import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserItem = () => {
  return (
    <div className="flex items-center border rounded-[8px] p-4 dark:hover:bg-slate-800 hover:bg-slate-400">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <div className="flex flex-col p-2 grow ">
      <p className="font-bold text-red-600">Biyash  Shrestha </p>
      <span>bsstha21@gmail.com  </span>
      </div>
    </div>
  );
};

export default UserItem;
