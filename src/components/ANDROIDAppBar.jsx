import React from "react";
import {View,StyleSheet, ScrollView} from 'react-native';
import StyleText from "./StyleText";
import Constants from "expo-constants";
import theme from "../../theme";
import { Link, useLocation } from "react-router-native";


const AppBarTab = ({children,to}) =>{
    const {pathname} = useLocation();
    const active = pathname === to;

    const textStyles = [
        styles.text,
        active && styles.active
    ];

    return(
        <Link to={to}>
            <StyleText fontWeight='bold' style={textStyles}>
                {children}
            </StyleText>
        </Link>
    );
};




const AppBar = () =>{
    const {pathname} = useLocation();

    return(
        <View  style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab  to={'/'}>Repositories</AppBarTab>
                <AppBarTab  to={'/signin'}>Sign In</AppBarTab>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'red',
        paddingTop:Constants.statusBarHeight + 10,
        paddingBottom:10,
        
    },
    text:{
        color:theme.appBar.secondary,
        paddingHorizontal:10        
    },
    scroll:{
        paddingBottom:15,
    },
    active:{
        color:theme.appBar.textPrimary
    },
});

export default AppBar;

