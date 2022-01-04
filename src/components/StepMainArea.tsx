import React, {FC,useContext, useState} from "react";
import {StepperContext} from '../store/stepper-api'

interface IStepProps{
    stepNumber:number
    step:number
    heading:string
    subHeading:string
    inputInstances:any
}
const StepMainArea:FC<IStepProps> = (props)=>{
    const [state, setState] = useState("")
    const {stepNumber, step, heading,subHeading,inputInstances} = props
    const steeper = useContext(StepperContext)
    const handleChange = (e:any)=>{
     setState(e.target.value)
     steeper.handleChange(e.target)
    }
    return (
        <div className={`mt-16 shadow-lg p-4 md:max-w-lg mx-auto ${stepNumber===step? 'block':'hidden'}`}>
            <div>
                <h2 className="font-bold text-center subpixel-antialiasing">{heading}</h2>
                <h4 className=" text-center subpixel-antialiasing">{subHeading}</h4>
                <div className="flex align-middle md:flex-row">
                    <div className="w-full flex-1 mx-2 svelte-1l8159u">
                        <div className="bg-white my-4 p-1 rounded svelte-1l8159u">
                            <label className="block w-full text-left mb-2 ml-1">{inputInstances[0].label}</label>
                            <input
                                className={`border-2 w-full inline-block ${inputInstances[0].className}`}
                                onChange={handleChange}
                                placeholder={inputInstances[0].placeholder}
                                name={inputInstances[0].name}
                                type={inputInstances[0].type}
                                value={state}
                            /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepMainArea