import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';

import Colors from '../../constants/colors';

const LoginScreen = () => {
    return (

    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.topContainer}>  
                    <Text style={styles.header}>Welcome,</Text>
                    <Text style={styles.subheader}>Sign in to continue!</Text>
                </View>
                
                <View style={styles.middleContainer}>
                    <Text style={styles.description}>Email</Text>
                    <TextInput placeholder={'Email'} style={styles.inputBox}></TextInput>

                    <Text style={styles.description}>Password</Text>
                    <TextInput placeholder={'Password'} style={styles.inputBox}></TextInput>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>Don't have an account?</Text>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </View>  
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    topContainer: {
        paddingTop: "8%",
        flex: 2,
    },
    middleContainer: {
        flex: 10,
    },
    bottomContainer: {
        bottom: 10,
        flexDirection: "row",
        flex: 2,  
        alignSelf: "center",
    },
    bottomContainer: {
        position: "absolute",
        bottom: 10,
        flexDirection: "row",
        flex: 1,  
        alignSelf: "center"
    },
    header: {
        paddingLeft: 40,
        fontSize: 26,
        fontWeight: "bold",
    },
    subheader: {
        paddingTop: "2%",
        paddingLeft: 40,
        fontSize: 26,
        fontWeight: "bold",
        color: "#7C7C7C"
    },

    description: {
        paddingTop: "5%",
        paddingLeft: 42,
        paddingBottom: 10,
        fontSize: 15,
        fontWeight: "bold",
    },
    inputBox: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: "80%",
        height: 50,
        fontSize: 20,
        alignSelf: "center",
        paddingLeft: "5%",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    forgotPassword: {
        paddingTop: 8,
        paddingRight: "10%",
        alignSelf: "flex-end",
    },
    buttonStyle: {
        backgroundColor: Colors.primary,
        height: 50,
        width: '80%',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%",
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 20,
    },
    bottomText: {
      marginRight: 10,
    },
    signUpText: {
        color: Colors.primary,
    }
})