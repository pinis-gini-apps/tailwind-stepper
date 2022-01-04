import {useState, useEffect, useContext} from 'react'
import {StepperContext} from '../store/stepper-api'
import axios from "axios";
import StepMainArea from './StepMainArea';
import StepperProgress from './StepperProgress/StepperProgress'
import {signUpConfig} from '../structure_demo'
import {url} from '../config/config'

const Stepper = ()=>{
    const [stepNumber, setStepNumber] = useState(0)
    const [sections, setSections] = useState<object[]>([])
    const steeper = useContext(StepperContext)

    const nexStep = ()=>{
        if(stepNumber===4) return
        setStepNumber((pre)=> pre+1)
    }
    const preStep = ()=>{
        if(stepNumber ===0) return
        setStepNumber((pre)=> pre-1)
    }
    const  handleStep= (step:number)=>{
    setStepNumber(step)
    }

    const handleSubmit = async ()=>{
        const data = steeper.stepperData
        const config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin' : '*',
            },
        };
        axios.post(url, {data}, config).then(res=>console.log(res))
        alert("Thank you! Your message has been successfully sent. We will contact you very soon!")
    }
    useEffect(()=>{
        let section = signUpConfig.sections
        let arr = Object.values(section)
        setSections(arr)
    },[])
    return (
        <div className="h-screen w-screen flex justify-center items-center	">
        <div className="p-2 shadow-2xl text-center md:w-9/12 mx-6">
            <h2 className="mt-3 mb-5 font-bold text-yellow-600">Sign Up Stepper</h2>
            <div className="mx-4 p-4">
                <div className="flex items-center">
                    {signUpConfig.steps.map((item,index)=>
                        <StepperProgress
                            key={index}
                            step={stepNumber}
                            icon={item.icon}
                            name={item.stepName}
                            class={item.className}
                            handleStep = {handleStep}
                        />)}
                </div>
            </div>
            {sections.map((item,index)=>
                <StepMainArea
                    key={index}
                    stepNumber={index}
                    step={stepNumber}
                    // @ts-ignore
                    heading={item.mainArea.heading.title}
                    // @ts-ignore
                    subHeading={item.mainArea.subHeading.title}
                    // @ts-ignore
                    inputInstances={item.mainArea.inputInstances}
                    preStep={preStep}
                    nexStep={nexStep}
                    submitForm={handleSubmit}
                />)}
        </div>
    </div>
    )
}

export default Stepper