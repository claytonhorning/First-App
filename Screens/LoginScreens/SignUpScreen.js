import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import Colors from '../../constants/colors';

const SignUpScreen = () => {
    return (
        <View style={styles.container}>

            <View style={styles.topContainer}>
                <Text style={styles.header}>Create Account,</Text>
                <Text style={styles.subheader}>Sign up to get started!</Text>
            </View>
            
            <View style={styles.middleContainer}>
                <Text style={styles.description}>Full Name</Text>
                <TextInput placeholder={'Full Name'} style={styles.inputBox}></TextInput>

                <Text style={styles.description}>Email</Text>
                <TextInput placeholder={'Email'} style={styles.inputBox}></TextInput>

                <Text style={styles.description}>Password</Text>
                <TextInput placeholder={'Password'} style={styles.inputBox}></TextInput>

                <Text style={styles.description}>Confirm Password</Text>
                <TextInput placeholder={'Confirm Password'} style={styles.inputBox}></TextInput>

                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomText}>Already have an account?</Text>
                <Text style={styles.signUpText}>Login</Text>
            </View>
            
        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    topContainer: {
        paddingTop: "8%",
        flex: 1,
        paddingBottom: "12%",
    },
    middleContainer: {
        paddingTop: "2%",
        flex: 10,
    },
    bottomContainer: {
        position: "absolute",
        bottom: 10,
        flexDirection: "row",
        flex: 2,  
        alignSelf: "center",
    },
    header: {
        paddingLeft: 40,
        fontSize: 28,
        fontWeight: "bold",
    },
    subheader: {
        paddingTop: "2%",
        paddingLeft: 40,
        fontSize: 28,
        fontWeight: "bold",
        color: "#7C7C7C"
    },

    description: {
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
        marginBottom: "5%"
    },
    buttonStyle: {
        backgroundColor: Colors.primary,
        height: 50,
        width: '80%',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 20,
    },
    bottomText: {
      marginRight: 8,
    },
    signUpText: {
        color: Colors.primary,
    }
})