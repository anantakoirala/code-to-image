import React from "react";

type Props = {
  windowControl: string;
};

const WindowControls = ({ windowControl }: Props) => {
  if (windowControl === "colored") {
    return (
      <div className="flex items-center space-x-2 px-3 py-2">
        <div className="w-4 h-4 bg-red-500 rounded-full cursor-pointer"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full cursor-pointer"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full cursor-pointer"></div>
      </div>
    );
  } else if (windowControl === "gray") {
    return (
      <div className="flex items-center space-x-2 px-3 py-2">
        <div className="w-4 h-4 border bg-gray-500 rounded-full cursor-pointer"></div>
        <div className="w-4 h-4 border bg-gray-500 rounded-full cursor-pointer"></div>
        <div className="w-4 h-4 border bg-gray-500 rounded-full cursor-pointer"></div>
      </div>
    );
  } else if (windowControl === "outline") {
    return (
      <div className="flex items-center space-x-2 px-3 py-2">
        <div className="w-4 h-4 border border-gray-500 rounded-full cursor-pointer"></div>
        <div className="w-4 h-4 border border-gray-500 rounded-full cursor-pointer"></div>
        <div className="w-4 h-4 border border-gray-500 rounded-full cursor-pointer"></div>
      </div>
    );
  } else if (windowControl === "none") {
    return (
      <div className="flex items-center space-x-2 px-3 py-2">
        <div className="w-4 h-4 "></div>
        <div className="w-4 h-4 "></div>
        <div className="w-4 h-4 "></div>
      </div>
    );
  } else {
    return null;
  }
};

export default WindowControls;
