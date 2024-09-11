import React, { Children } from 'react';

const TabButton = ({active,selectTab,children}) => {
    const buttonClasses = active ? "text-white border-b border-purple-500" :"text-[#ADB7BE]"
    return (
       <button onClick={selectTab} className= {`mr-3 hover:text-whitefont-semibold ${buttonClasses}`}>
          {children}
       </button>
    );
}

export default TabButton;
