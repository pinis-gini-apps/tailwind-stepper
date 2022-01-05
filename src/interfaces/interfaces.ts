export interface ISection{
    mainArea: {
        heading: any
        subHeading:any
        inputInstances:any
    }
}

export interface IStepProps{
    stepNumber:number
    step:number
    preStep:()=>void
    nexStep:()=>void
    submitForm:()=>void
    heading:string
    subHeading:string
    inputInstances:any
}

export interface IStepperStepProps{
    icon:string
    name:string
    class?:string
    step:number
    handleStep: (num:number)=>void
}