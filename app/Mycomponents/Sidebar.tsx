import React from "react";
import userItem from "./userItem"; // Ensure the import uses the correct casing

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[300px] border-r min-h-screen">
      <userItem /> {/* Use the corrected component name */}
      <p>Menubar</p>
    </div>
  );
};

export default Sidebar;
