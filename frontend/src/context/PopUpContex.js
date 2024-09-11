import React, { createContext, useState } from "react";

export const PopUpContext = createContext();

const PopUpContextProvider = ({ children }) => {
    const [state, setState] = useState({ trigger: false });

    const ToggleForm = () => {
        setState(prevState => ({ trigger: !prevState.trigger }));
        console.log("ToggleForm called, current trigger state:", state.trigger);
    };

    return (
        <PopUpContext.Provider value={{ ...state, ToggleForm }}>
            {children}
        </PopUpContext.Provider>
    );
};

export default PopUpContextProvider;
