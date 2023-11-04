import React from "react";

const TabButton = ({ active, selectTab, children }) => {
    const buttonClass = active
        ? "text-black bg-slate-300 p-3 w-[500px] rounded-xl"
        : "text-[#fff] ";

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-primary flex items-center justify-center ${buttonClass}`}>
                {children}
            </p>
        </button>
    );
}

export default TabButton;