import * as yup from "yup";

interface IYupSchema{
    id:number
    validationType:any
    validations:[]
}

export function createYupSchema(schema:any,config:any) {
    const Yup:any = yup

    const { id, validationType, validations = [] }:IYupSchema = config;
    if (!Yup[validationType]) {
        return schema;
    }
    let validator = Yup[validationType]();
    validations.forEach((validation: { params: any; type: any; }) => {
        const { params, type } = validation;
        if (!validator[type]) {
            return;
        }
        validator = validator[type](...params);
    });
    schema[id] = validator;
    return schema;
}
