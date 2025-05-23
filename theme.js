import { Platform } from "react-native";


const theme = {
    appBar:{
        primary:'#24292e',
        textPrimary:'#fff',
        secondary:'#ccc'
    },
    colors:{
        textPrimary:'#24292e',
        testSecondary:'#586069',
        primary:'#0366d6',
        white:'#fefefe'
    },
    fontSize:{
        body:14,
        subheading:16
    },
    fonts:{
        main:Platform.select({
            ios:'Arial',
            android:'Roboto',
            default:'System'
        })
    },
    fontWeights:{
        normal:'400',
        bold:'700'
    }
}

export default theme;