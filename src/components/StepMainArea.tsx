import React, {FC, useContext, useEffect, useRef} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import {StepperContext} from '../store/stepper-api'
import { createYupSchema } from "../util/yupValidatior";
import {IStepProps} from '../interfaces/interfaces'

const StepMainArea:FC<IStepProps> = (props)=>{
    const {stepNumber, step,preStep,nexStep,submitForm, heading,subHeading,inputInstances} = props
    const steeper = useContext(StepperContext)
    const refInput = useRef<any>(null)

    const yepSchema = createYupSchema({},inputInstances[0])
    const validateSchema = yup.object().shape(yepSchema);

    const data = {
        [inputInstances[0].name]: ""
    }
    const handleSubmit = (values:any) => {
        steeper.handleChange(values)
        if(stepNumber===4){
            submitForm()
            return
        }
        nexStep()
    };

    useEffect(()=>{
        refInput.current?.focus()
    },[])

    return (
        <Formik
            validationSchema={validateSchema}
            initialValues={data}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form className="mt-16">
                    <div className={`w-11/12 md:w-9/12   mx-auto ${stepNumber=== step? 'block':'hidden'}`}>
                        <div className="mb-6 text-center">
                            <h2 className="font-bold text-yellow-600 subpixel-antialiasing">{heading}</h2>
                            <h4 className="italic subpixel-antialiasing mt-3 text-gray-500">{subHeading}</h4>
                        </div>
                                <div className="mx-auto">
                                    <label className="mx-auto block text-center my-auto w-2/5 ">
                                        {/*{inputInstances[0].label}*/}
                                    </label>
                                    <div className=" mx-auto h-12  flex-1 w-10/12">
                                        <Field
                                            className="border-2 rounded-xl w-full block w-3/5 py-2 pl-3 outline-none"
                                            placeholder={inputInstances[0].name}
                                            name={inputInstances[0].name}
                                            type={inputInstances[0].type}
                                            innerRef={refInput}
                                        />
                                        <div className="text-red-700 text-xs sm:text-base text-left	">
                                            <ErrorMessage name={inputInstances[0].name} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`my-8 flex ${stepNumber===0? 'justify-end':'justify-between'}`}>
                                    { stepNumber===0 ?
                                        null :
                                        <button
                                        onClick={()=>preStep()}
                                        className="btn"
                                    >
                                        Previous
                                    </button> }
                                    {  stepNumber===4 ?
                                        <button
                                       className="btn btn-submit"
                                       type="submit"
                                        >
                                            Submit
                                        </button>:
                                    <button
                                        className="btn"
                                        type="submit"
                                    >Next
                                    </button>
                                    }
                                </div>
                        </div>
                </Form>
            )}
        </Formik>
    )
}

export default StepMainArea