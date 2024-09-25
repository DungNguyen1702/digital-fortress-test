import {
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Images from "../../../constant/Images";
import ResultMessage from "../../../components/ResultMessage";

export default function GamePlayPage() {
    const cupPosition = [0, 1, 2];

    const [pressIndex, setPressIndex] = useState(null);
    const [ballPosition, setBallPosition] = useState(
        Math.floor(Math.random() * 3)
    );
    const [result, setResult] = useState(null);

    const onPressCup = (index) => {
        setPressIndex(index);
        if(ballPosition === index){
            setResult("WIN")
        }
        else {
            setResult("LOSE")
        }
    };

    const onPressRestart = () => {
        const newIndex = Math.floor(Math.random() * 3);
        setPressIndex(null);
        setBallPosition(newIndex);
        setResult(null);
        console.log("Ball is in the " + (newIndex + 1) + " cup")
    };

    useEffect(()=>{
        console.log("Ball is in the " + (ballPosition + 1) + " cup")
    },[])

    return (
        <View style={styles.container}>
            <ImageBackground
                source={Images.background}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.cupPositionContainer}>
                    {cupPosition.map((index) => (
                        <View style={styles.ballAndCupContainer} key={index}>
                            <TouchableOpacity
                                onPress={() => onPressCup(index)}
                            >
                                <Image
                                    source={Images.plasticCup}
                                    style={{
                                        ...styles.cup,
                                        transform: [
                                            {
                                                translateY:
                                                    pressIndex === index
                                                        ? -50
                                                        : 0,
                                            },
                                        ],
                                    }}
                                />
                            </TouchableOpacity>

                            {ballPosition === index && pressIndex === index && (
                                <Image
                                    source={Images.ball}
                                    style={styles.ball}
                                />
                            )}
                        </View>
                    ))}
                </View>
                {result && <ResultMessage result={result} onPressRestart={onPressRestart}/>}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    background: {
        width: "100%",
        height: "100%",
        position: "relative",
    },
    cupPositionContainer: {
        width: "100%",
        position: "absolute",
        bottom: 350,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    ballAndCupContainer: {
        display: "flex",
        alignItems: "center",
        position: "relative",
    },
    cup : {
        zIndex : 1000,
    },
    ball: {
        position: "absolute",
        bottom: 0,
    },
});
