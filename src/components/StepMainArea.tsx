import React, {FC, Fragment,useContext, useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {StepperContext} from '../store/stepper-api'

interface IStepProps{
    stepNumber:number
    step:number
    heading:string
    subHeading:string
    inputInstances:any
}
// const StepMainArea:FC<IStepProps> = (props)=>{
const StepMainArea = (props:any)=>{
    const {stepNumber, step,preStep,nexStep,submitForm, heading,subHeading,inputInstances} = props
    const steeper = useContext(StepperContext)
     const stepOneValidationSchema = Yup.object({
        [inputInstances[0].name]: Yup.string().required().label(`${inputInstances[0].name}`),
    });

    const data = {
        [inputInstances[0].name]: ""
    }
    const handleSubmit = (values:any) => {
        steeper.handleChange(values)
        nexStep()
    };
    return (
        <Formik
            validationSchema={stepOneValidationSchema}
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <div className={`w-11/12 md:w-9/12  mt-10 mx-auto ${stepNumber=== step? 'block':'hidden'}`}>
                        <div className="mb-6  text-center ">
                            <h2 className="font-bold text-yellow-600 subpixel-antialiasing">{heading}</h2>
                            <h4 className="italic subpixel-antialiasing mt-3 text-gray-500">{subHeading}</h4>
                        </div>
                                    <div className="mx-auto">
                                        <label className="mx-auto block text-center my-auto w-2/5 ">{inputInstances[0].label}</label>
                                        <div className=" mx-auto h-12  flex-1 w-10/12">
                                            <Field
                                                className="border-2 w-full block w-3/5 py-2"
                                                placeholder={inputInstances[0].name}
                                                name={inputInstances[0].name}
                                                type={inputInstances[0].type}
                                            />
                                            <div className="text-red-700 text-xs sm:text-base text-left	">
                                                <ErrorMessage
                                                    name={inputInstances[0].name}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`my-8 flex ${stepNumber===0? 'justify-end':'justify-between'}`}>
                                        { stepNumber===0 ? null :    <button
                                            onClick={()=>preStep()}
                                            className="btn"
                                        >
                                            Previous
                                        </button> }
                                        {  stepNumber===4 ?
                                            <button  onClick={()=>submitForm()} className="btn btn-submit">
                                                Submit
                                            </button>:
                                        <button className="btn" type="submit">Next</button>
                                        }
                                    </div>
                    </div>
                </Form>
            )}

        </Formik>
    )
}

export default StepMainArea