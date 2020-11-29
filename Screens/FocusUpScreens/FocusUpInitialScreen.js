import React from 'react';
import { StyleSheet, View, Text, TextInput, 
Image, TouchableOpacity } from 'react-native';

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


            <View style={styles.descriptionContainer}>
                <View style={styles.descriptionBox}>
                   
                    <Text style={styles.boxText}>Focus time</Text>

                    <View style= {styles.lineStyle}/>

                    <Text style={styles.blueText}>1h 30m</Text>

                </View>

                <View style={styles.descriptionBox}>
                    <Text style={styles.boxText}>Earnings</Text>

                    <View style={styles.lineStyle}/>

                    <View style={styles.coinContainer}>
                        <Image style={styles.focusCoins}
                        source={require('../../assets/img/focus-coins-3.png')}/>
                        <Text style={styles.blueText}>5</Text>
                    </View>
                </View>
            </View>

            <View style={{alignItems: "center"}}>

                <TouchableOpacity style={styles.buttonStyle}>
                    <Image style={styles.logoStyle} source={require('../../assets/img/focus-up-logo.png')}/>
                </TouchableOpacity>

            </View>
            
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
    },
    descriptionContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    descriptionBox: {
        backgroundColor: 'white',
        marginTop: 35,
        paddingTop: 25,
        paddingBottom: 15,
        width: 160,
        margin: 10,
        alignItems: "center",
        borderRadius: 5,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    boxText: {
        fontSize: 22,
        fontWeight: "600"
    },
    lineStyle:{
        borderWidth: 1,
        borderColor:'#EFEFEF',
        margin:15,
        width: '100%'
   },
   blueText: {
        padding: 10,
        fontSize: 28,
        color: Colors.primary,
   },
   coinContainer: {
       flexDirection: "row",
       alignItems: "center"
   },
   focusCoins: {
       height: 30,
       width: 60,
       shadowColor: "#000",
       shadowOffset: {
           width: 0,
           height: 1,
       },
       shadowOpacity: 0.2,
       shadowRadius: 2,
   },
   buttonStyle: {
       backgroundColor: Colors.primary,
       height: 50,
       width: '80%',
       alignItems: "center",
       justifyContent: "center",
       marginTop: 45,
       borderRadius: 30,
   },
   logoStyle: {
       height: 34,
       width: 105,
   }
}) 

export default FocusUpInitialScreen;