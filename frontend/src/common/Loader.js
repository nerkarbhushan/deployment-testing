import React from "react";

export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-200 opacity-75 flex items-center justify-center z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}
