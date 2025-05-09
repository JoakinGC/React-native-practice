import React from "react";
import { View } from "react-native";
import StyleText from "./StyleText";

//Parsea los numeros:

const parseThousans = value =>{
    return value >= 1000
     ? `${Math.round(value/100)/10}k`
     :String(value);
}


const RepositoryStats = (props) => {
    return(
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View>
                <StyleText align='center' fontWeight='bold'>Starts:</StyleText>
                <StyleText align='center'>{parseThousans(props.stargazersCount)}</StyleText>
            </View>
            <View>
                <StyleText align='center' fontWeight='bold'>Forks: </StyleText>    
                <StyleText align='center'> {parseThousans(props.forksCount)}</StyleText>    
            </View>
            <View>
                <StyleText align='center' fontWeight='bold'>Review: </StyleText>    
                <StyleText align='center'>{props.reviewCount}</StyleText>
            </View>
            <View>
                <StyleText align='center' fontWeight='bold'>Rating: </StyleText>    
                <StyleText align='center'> {props.ratingAverage}</StyleText>
            </View>
        </View>
    );
};

export default RepositoryStats;