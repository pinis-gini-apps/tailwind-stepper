
export const stepConvert = (step:string)=>{
    let stepNumber= 0
    if(step === "stepA") return 0
    if (step=== "stepB") return 1
    if(step === "stepC") return 2
    if(step === "stepD") return 3
    if(step === "stepE") return 4
    return stepNumber
}

