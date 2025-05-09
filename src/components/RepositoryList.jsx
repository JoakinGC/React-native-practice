import React from "react";
import { FlatList,View,Text } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./ReposoitoryItem.jsx";


const RepositoryList = () =>{
    return(
        <FlatList 
        data={repositories}
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({item:repo}) =>(
            <RepositoryItem {...repo}/>
        )}
        >
           
        </FlatList>
    );
};



export default RepositoryList;