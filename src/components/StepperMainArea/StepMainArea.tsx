import React, {FC, Fragment, useContext, useEffect, useRef} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import {StepperContext} from '../../store/stepper-api'
import { createYupSchema } from "../../util/yupValidatior";
import {IStepProps} from '../../interfaces/interfaces'

const StepMainArea:FC<IStepProps> = (props)=>{
    const {stepNumber, step,preStep,nexStep,submitForm, heading,subHeading,inputInstances} = props
    const steeper = useContext(StepperContext)
    const refInput = useRef<any>(null)

    const temp = inputInstances.reduce(createYupSchema, {});
    const validateSchema = yup.object().shape(temp);

    const initialValues:any = {};
    inputInstances.forEach((item:any) => {
        initialValues[item.id] = item.value || "";
    });

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
    },[step])

    return (
        <Formik
            validationSchema={validateSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form className="mt-16 h-auto">
                    <div className={`w-11/12 md:w-9/12  h-auto mx-auto ${stepNumber=== step? 'block':'hidden'}`}>
                        <div className="mb-6 text-center">
                            <h2 className="font-bold text-yellow-600 subpixel-antialiasing">{heading}</h2>
                            <h4 className="italic subpixel-antialiasing mt-3 text-gray-500">{subHeading}</h4>
                        </div>
                                <div className="mx-auto h-auto min-h-0 h-auto">
                                    <div className=" mx-auto h-auto flex-1 w-10/12">
                                        {inputInstances.map((item:any,index:number)=>(
                                            <Fragment key={index}>
                                                <Field
                                                    className="border-2 rounded-xl w-full block w-3/5 py-2 pl-3 outline-none"
                                                    placeholder={item.name}
                                                    name={item.name}
                                                    type={item.type}
                                                    innerRef={index===0? refInput:null}
                                                />
                                                <div className="text-red-700 h-8 min text-xs sm:text-base text-left ml-1 mt-2">
                                                    <ErrorMessage name={item.name} />
                                                </div>
                                            </Fragment>
                                        ))}
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