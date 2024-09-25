import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Images from "../constant/Images";

export default function ResultMessage({ result, onPressRestart }) {
    return (
        <View style={styles.container}>
            <Image
                source={result === "LOSE" ? Images.youLose : Images.youWin}
            ></Image>
            <TouchableOpacity onPress={onPressRestart}>
                <Image source={Images.tapToRestart}></Image>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent : "center",
        alignItems : 'center'
    },
});
