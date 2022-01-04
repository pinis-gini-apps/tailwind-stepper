import {FC,Fragment} from 'react'
import {stepConvert} from  '../../util/stepConvert'

interface  IStepperStepProps{
    icon:string
    name:string
    class?:string
    step:number
    handleStep: (num:number)=>void
}
const StepperStep:FC<IStepperStepProps>= (props)=>{
const {icon, name, step,handleStep} = props
    let stepNumber = stepConvert(name)
    return(
<Fragment>
    <div onClick={()=> handleStep(stepNumber)} className={`flex items-center relative ${stepNumber===step? "selected-step":""}`}>
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600 text-center">
            <i className={icon}></i>
        </div>
        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">{name}</div>
    </div>
    <div className={`flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600 ${stepNumber===4? "hidden":""}`}></div>
</Fragment>
    )
}

export default StepperStep;