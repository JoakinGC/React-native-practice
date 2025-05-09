import React from "react";
import { Formik, useField } from "formik";
import StyleTextInput from "../components/StyleTextInput";


const FormikInputValue = ({name,...props}) =>{
    const [field,meta,helpers] = useField(name);
    return(
        <StyleTextInput
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
        />
    );
};

export default FormikInputValue;