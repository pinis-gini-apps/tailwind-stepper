import * as yup from "yup";

interface IYupSchema{
    id:number
    validationType: string
    validations:[]
}

export function createYupSchema<Y extends IYupSchema>(schema:any,config:Y) {
    const Yup = yup as any
    const { id, validationType, validations = [] } = config;
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
