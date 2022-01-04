import {useState, useEffect, useContext} from 'react'
import {StepperContext} from '../store/stepper-api'
import axios from "axios";
import StepMainArea from './StepMainArea';
import StepperProgress from './StepperProgress/StepperProgress'
import {signUpConfig} from '../structure_demo'



const url = "https://webhook.site/a87e683e-29b8-4ce0-97ac-2e6fcd3e81fe"
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
        console.log(data)
        alert("Thank you!\n" +
            "Your message has been successfully sent. We will contact you very soon!")
        setStepNumber(0)

        //  let response = await axios({
       //      url:url,
       //      method:'post',
       //      headers:{
       //          "Content-Type": "application/json",
       //  },
       //      data
       // })
    }
    useEffect(()=>{
        let section = signUpConfig.sections
        let arr = Object.values(section)
        setSections(arr)
    },[])
    return (
        <div className="h-screen w-screen flex justify-center items-center	">
        <div className="p-5 shadow-2xl text-center md:w-6/12 md:h-auto">
            <h2>Sign Up Stepper</h2>
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
                />)}
            <div className="flex p-2 mt-4">
                { stepNumber===0 ? null :    <button
                    onClick={preStep}
                    className="btn"
                >
                    Previous
                </button> }

                <div className="flex-auto flex flex-row-reverse">
                    {  stepNumber===4 ?
                        <button
                            onClick={handleSubmit}
                        className="btn btn-submit"
                    >
                        Submit
                    </button>:
                        <button
                        onClick={nexStep}
                        className="btn"
                        >
                        Next
                        </button>
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Stepper