import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

const Input = (props) => {

    const onChangeText = (text) => {
        props.onInputChanged(props.id, text)
    }
    return (
        <View style={styles.container}>
            <View style={[styles.inputContainer, { borderColor: "transparent" }]}>
                <TextInput
                    {...props}
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder={props.placeholder}
                    placeholderTextColor={props.placeholderTextColor}
                    underlineColorAndroid="black"
                />
            </View>
            {
                props.errorText && (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{props.errorText[0]}</Text>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        
    },
    inputContainer: {
        width: "100%",
        backgroundColor: COLORS.transparent,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding2,
        borderRadius: 12,
        borderWidth: .7,
        marginVertical: 5,
        flexDirection: "row",
        

    },
    input: {
        color: COLORS.black,
        height: 40,
        flex: 1,
        fontFamily: 'regular',
        paddingTop: 0,
        marginBottom: 0,
        paddingHorizontal: 10,
        
    },
    errorContainer: {
        marginVertical: 0,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: -50,
    },
})
export default Input