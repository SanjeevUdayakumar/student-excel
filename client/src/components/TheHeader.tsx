import React from "react";

const TheHeader: React.FC = () => {
    return ( 
        <header className="flex items-center justify-between p-5">
        <h1 className="font-semibold text-3xl text-white">Student Excel</h1>
        <div className="w-12 h-12 text-lg font-semibold cursor-pointer rounded-full flex items-center justify-center bg-green-400">
          S
        </div>
      </header>
     );
}
 
export default TheHeader;