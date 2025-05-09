import React from "react";
import { Text,View,StyleSheet } from "react-native";
import theme from "../../theme.js";

const styles = StyleSheet.create({
    text:{
        color:theme.colors.textPrimary,
        fontSize:theme.fontSize.body,
        fontFamily:theme.fonts.main ,
        fontWeight:theme.fontWeights.normal
    },
    colorPrimary:{
        color:theme.colors.primary
    },
    colorSecondary:{
        color:theme.colors.testSecondary
    },
    bold:{
        fontWeight:theme.fontWeights.bold
    },
    subheading:{
        fontSize:theme.fontSize.subheading
    },
    textAlighCenter:{
        textAlign:'center'
    }
});


export default function StyleText({children,color,fontSize,fontWeight,align,style,...restOfProps}){
    const testStyle = [
        styles.text,
        align==='center' && styles.textAlighCenter,
        color==='primary' && styles.colorPrimary,
        color==='secondary'&& styles.colorSecondary,
        fontSize==='subheading'&&styles.subheading,
        fontWeight==='bold'&&styles.bold,
        style
    ];

    return(
        <Text style={testStyle}>
            {children}
        </Text>
    );
};