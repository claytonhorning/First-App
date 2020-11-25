import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import TopBar from '../../components/TopBar/TopBar';
import Colors from '../../constants/colors';

function FocusUpInitialScreen(props) {
    return (
        
        <View style={styles.container}>
            <TopBar/>
           <Text style={styles.headerTextStyle}>Hello, Matthew!</Text>
           <Text style={styles.descriptionText}>Get started by entering the amount of focus coins 
           you would like to use.</Text>
           <TextInput placeholder={'Enter amount...'} style={styles.inputStyle}/>
           <Text style={styles.descriptionText}>Now specify the amount of time you 
           would like to stay focused for.</Text>
           <TextInput placeholder={'Hours...'} style={styles.inputStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    headerTextStyle: {
        paddingTop: 130,
        paddingLeft: 35,
        fontSize: 25,
        fontWeight: "bold"
    },
    descriptionText: {
        paddingTop: 30,
        fontSize: 18,
        paddingLeft: 35,
        paddingRight: 35,
        fontWeight: "300"
    },
    inputStyle: {
        marginTop: 30,
        height: 55,
        textAlign: "center",
        backgroundColor: 'white',
        borderRadius: 30,
        width: 300,
        fontSize: 18,
        alignSelf: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
})

export default FocusUpInitialScreen;