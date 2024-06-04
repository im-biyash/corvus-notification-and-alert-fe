import React from "react";
import Useritem from "./Useritem";
import { CgProfile } from "react-icons/cg";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"


const Sidebar = () => {
  return (
    <div className="flex flex-col w-[300px] border-r min-h-screen">
      <p>Menubar</p>
      <Useritem /> {/* Use the corrected component name */}
     <div>
     <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions" className="ml-2 text-xl">
      <div className="flex items-center ">
    <CgProfile />
      <CommandItem>Profile</CommandItem>
      </div>
      <div className="flex items-center">
       <MdOutlineForwardToInbox />
      <CommandItem>Inbox</CommandItem>
      </div>
      <div className="flex items-center">
      <IoIosNotifications />
      <CommandItem>Notifications</CommandItem>
      </div>
      
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
  );
};

export default Sidebar;
