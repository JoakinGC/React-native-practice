import React from "react";
import {Formik} from 'formik';
import {  Button, View,StyleSheet } from "react-native";
import StyleTextInput from "../components/StyleTextInput";
import FormikInputValue from "./FormikInoutValue";

const initialValues = {
    email:'',
    password:''
};


const validate = values =>{
    const errors = {};

    if(!values.email){
        errors.email = 'Email is required';
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9·-]+\.[A-Z]{2,4}$/i
    .test(errors.email)){
        console.log(errors);

        return errors;
    }
}

 
export default function LogIn(){
    return(
        <Formik 
        validate={validate}
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>

            {(  {handleSubmit} ) => {
                return (
                    <View style={styles.form}>
                        <FormikInputValue
                            name="email"
                            placeholder="E-mail"                            
                        />
                        <FormikInputValue
                            name="password"
                            placeholder="Password"
                            secureTextEntry
                        />
                        <Button onPress={handleSubmit}title="Log In"></Button>
                    </View>
                );
            }}

        </Formik>
    );
};



const styles = StyleSheet.create({
    form:{
        margin:12
    }
});