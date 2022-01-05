import * as yup from "yup";

export function createYupSchema(schema:any,config:any) {
    const { id, validationType, validations = [] } = config;
    // @ts-ignore
    if (!yup[validationType]) {
        return schema;
    }
    // @ts-ignore
    let validator = yup[validationType]();
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
