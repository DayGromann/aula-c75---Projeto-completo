import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Transaction from "../screens/Transaction";
import SearchScreen from "../screens/Search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
  render(){
    return(
        <NavigationContainer>
            <Tab.Navigator
              screenOptions= {
                ({route}) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Transação") {
                      iconName = "book";
                    } else if (route.name === "Pesquisa") {
                      iconName = "search"
                    }
                    return(
                      <Ionicons
                        name ={iconName}
                        size = {size}
                        color={color}
                      />
                    )
                  },
                  tabBarActiveTintColor: 'black',
                  tabBarInactiveTintColor: 'magenta',
                  tabBarActiveBackgroundColor: 'magenta',
                  tabBarInactiveBackgroundColor: 'black',
                  tabBarLabelStyle : {fontFamily: "Rajdhani_600SemiBold", fontSize: 20},
                  tabBarLabelPosition: 'beside-icon',
                  tabBarStyle: {height: 130, borderTopWidth: 0, backgroundColor: '#5653d4'},
                  tabBarItemStyle: {
                    borderRadius: 30,
                    justifyContent: "center",
                    borderWidth: 2,
                    marginRight: 10,
                    marginTop: 25,
                    marginLeft: 10,
                    marginBottom: 25,
                    
                  }
                

                })
                
              }
              
            >
                <Tab.Screen name = "Transação" component = {Transaction}/>
                <Tab.Screen name = "Pesquisa" component = {SearchScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
  }
}