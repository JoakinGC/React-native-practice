import React from "react";
import { Platform, Text, View } from "react-native";
import RepositoryList from "./RepositoryList"; 
import AppBar from "./AppBar";
import { Routes, Route, Navigate } from "react-router-native";
import LogIn from "../pages/LogIn";


/*const AppBar = Platform.select({
  android: () => require('./ANDROIDAppBar.jsx').default,
  default:() => require('./AppBar.jsx').default
})();*/

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
        <Routes>
            <Route path="/" element={<RepositoryList />}/>
            <Route path="/signin" element={<LogIn/>}/>
            <Route path="*" element={<Navigate to={'/'}/>}/>
        </Routes>
    </View>
  );
}

export default Main; // Cambia a export default Main;
