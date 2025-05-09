import { View,Text,StyleSheet,Image } from "react-native";
import React from "react";
import StyleText from "./StyleText";
import RepositoryStats from "./RepositoryStats.jsx";
import theme from "../../theme.js";
import RepositoryItemHeader from "./RepositoryItemHeader.jsx";



const RepositoryItem =  (props) =>{
    return(
        <View 
            style={styles.container}
            key={props.id}>
                    <RepositoryItemHeader {...props}/>
                    <RepositoryStats {...props}/>
                </View>
    );
};

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingVertical:5
    },
});

export default RepositoryItem;