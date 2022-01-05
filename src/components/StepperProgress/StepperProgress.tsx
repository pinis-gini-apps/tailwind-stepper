import {FC,Fragment} from 'react'
import {stepConvert} from  '../../util/stepConvert'
import {IStepperStepProps} from '../../interfaces/interfaces'

const StepperProgress:FC<IStepperStepProps>= (props)=>{
const {icon, name, step,handleStep} = props
    let stepNumber = stepConvert(name)
    return(
<Fragment>
    <div onClick={()=> handleStep(stepNumber)} className={`flex items-center relative ${stepNumber===step? "text-green-500":""}`}>
        <div className="stepper-icon">
            <i className={icon}></i>
        </div>
        <div className="stepper-title">{name}</div>
    </div>
    <div className={`flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600 ${stepNumber===4? "hidden":""}`}></div>
</Fragment>
    )
}

export default  StepperProgress;