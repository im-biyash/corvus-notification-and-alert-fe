"use client";
import React, { useState } from "react";
import UserItem from "./UserItem";
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineForwardToInbox } from "react-icons/md";
import NotifyBar from "./NotifyBar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const Sidebar = () => {
  const [shownotifyBar, setShownotifyBar] = useState(false);

  const toggleNotifyBar = () => {
    setShownotifyBar(!shownotifyBar);
    console.log(shownotifyBar);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col w-[250px] border-r">
        <p className="p-2 my-2 text-center">Menubar</p>
        <UserItem />
        <div>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions" className="ml-2 text-xl">
                <CommandItem className="flex items-center gap-2" onClick={() => console.log("Profile clicked")}>
                  <CgProfile />
                  <span>Profile</span>
                </CommandItem>
                <CommandItem className="flex items-center gap-2" onClick={() => console.log("Inbox clicked")}>
                  <MdOutlineForwardToInbox />
                  <span>Inbox</span>
                </CommandItem>
                <CommandItem className="flex items-center gap-2" >
                <IoNotifications />
                  <span onClick={toggleNotifyBar}>Notifications</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>Settings</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>
      <NotifyBar show={shownotifyBar} />
    </div>
  );
};

export default Sidebar;
