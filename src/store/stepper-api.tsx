import React, { createContext, useState, FC } from "react";

export type StepperContextState = {
    handleChange: (name: any) => void;
    stepperData:{}
};
const contextDefaultValues: StepperContextState = {
    handleChange: () => {},
    stepperData:{}
};
export const StepperContext = createContext<StepperContextState>(
    contextDefaultValues
);
const StepperProvider: FC = ({ children }) => {
    const [stepperData, setStepperData] = useState<{}>({});
     const handleChange = (value: any) => {
        setStepperData({...stepperData, ...value})
    }
    console.log(stepperData)
     return (
        <StepperContext.Provider
            value={{
                handleChange,
                stepperData
            }}
        >
            {children}
        </StepperContext.Provider>
    );
};

export default StepperProvider;