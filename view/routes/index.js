import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/homepage";
import GamePlayPage from "../pages/gamePlayPage";

const Stack = createNativeStackNavigator();

export default function AllRoutes() {
    return (
        <View style={{ width: "100%", height: "100%"}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='homepage' component={HomePage} options={{headerShown : false}}></Stack.Screen>
                    <Stack.Screen name='gamePlay' component={GamePlayPage} options={{headerShown : false}}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({});
