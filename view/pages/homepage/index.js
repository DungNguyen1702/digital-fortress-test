import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Images from "../../../constant/Images";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
    const navigation = useNavigation();

    const onPressTapToPlay = ()=>{
        navigation.navigate("gamePlay")
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={Images.backgroundHomePage}
                style={styles.background}
                resizeMode="cover"
            >
                <Image source={Images.logo}></Image>
                <TouchableOpacity onPress={onPressTapToPlay}>
                    <Image source={Images.tapToPlay} style={styles.tapToPlayIcon}></Image>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    background: {
        width: "100%",
        height: "100%",
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center"
    },
    tapToPlayIcon : {
        marginTop : 50
    }
});
