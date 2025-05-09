import React from "react";
import { View,Image,StyleSheet, Platform} from "react-native";
import StyleText from "./StyleText.jsx";
import theme from "../../theme.js";

const RepositoryItemHeader = (props)=>{
    return(
        <View style={{flexDirection:'row',paddingBottom:2}}>
            <View style={{paddingRight:10}}>
                <Image style={styles.image} source={{uri:props.ownerAvatarUrl}} />
            </View>
            <View style={{flex:1}}>
                <StyleText  fontWeight={'bold'} >{props.fullName}</StyleText>
                <StyleText color='secondary'> {props.description}</StyleText>
                <StyleText style={styles.language}>Languaje: {props.language}</StyleText>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    language:{
        padding:4,
        color:theme.colors.white,
        backgroundColor:Platform.select({
            android:theme.colors.primary,
            ios:'orange',
            default:'purple'
        }),
        alignSelf:'flex-start',
        overflow:'hidden',
        marginVertical:4,//Propiedad exclusiva de React Nativa
        borderRadius:4
    },
    image:{
        width:48,
        height:48,
        borderRadius:4
    }
})

export default RepositoryItemHeader;