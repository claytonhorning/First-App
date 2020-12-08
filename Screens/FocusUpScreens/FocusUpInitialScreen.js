import React from 'react';
import { StyleSheet, View, Text, TextInput, 
Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import TopBar from '../../components/TopBar/TopBar';
import Colors from '../../constants/colors';

function FocusUpInitialScreen(props) {
    return (
        <View style={styles.container}>

            <TopBar/>

            <SafeAreaView>
                <View style={styles.infoContainer}>
                    <Text style={styles.headerTextStyle}>Hello, Matthew!</Text>

                    <Text style={styles.descriptionText}>Get started by choosing a focus session (tap to select).
                    </Text>
                </View>

                <ScrollView style={styles.focusSessionsContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.focusSession}>
                        <Text style={styles.focusTimeText}>30 minutes</Text>
                        <View style={styles.focusSessionBox}>
                            <View style={styles.focusSessionInfo}>
                                <Text style={styles.focusDescriptionText}>You'll Risk:</Text>
                                <Image style={styles.focusCoins}
                                source={require('../../assets/img/focus-coins-3.png')}/>
                                <Text style={styles.focusCoinsDescription}>100</Text>
                            </View>

                            <View style={styles.lineStyle}/>

                            <View style={styles.focusSessionInfo}>
                                <Text style={styles.focusDescriptionText}>You'll Win:</Text>
                                <Image style={styles.focusCoins}
                                source={require('../../assets/img/focus-coins-3.png')}/>
                                <Text style={styles.focusCoinsDescription}>150</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.focusSession}>
                        <Text style={styles.focusTimeText}>1 hour</Text>
                        <View style={styles.focusSessionBox}>
                            <View style={styles.focusSessionInfo}>
                                <Text style={styles.focusDescriptionText}>You'll Risk:</Text>
                                <Image style={styles.focusCoins}
                                source={require('../../assets/img/focus-coins-3.png')}/>
                                <Text style={styles.focusCoinsDescription}>100</Text>
                            </View>

                            <View style={styles.lineStyle}/>

                            <View style={styles.focusSessionInfo}>
                                <Text style={styles.focusDescriptionText}>You'll Win:</Text>
                                <Image style={styles.focusCoins}
                                source={require('../../assets/img/focus-coins-3.png')}/>
                                <Text style={styles.focusCoinsDescription}>150</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.focusSession}>
                        <Text style={styles.focusTimeText}>1h 30 minutes</Text>
                        <View style={styles.focusSessionBox}>
                            <View style={styles.focusSessionInfo}>
                                <Text style={styles.focusDescriptionText}>You'll Risk:</Text>
                                <Image style={styles.focusCoins}
                                source={require('../../assets/img/focus-coins-3.png')}/>
                                <Text style={styles.focusCoinsDescription}>100</Text>
                            </View>

                            <View style={styles.lineStyle}/>

                            <View style={styles.focusSessionInfo}>
                                <Text style={styles.focusDescriptionText}>You'll Win:</Text>
                                <Image style={styles.focusCoins}
                                source={require('../../assets/img/focus-coins-3.png')}/>
                                <Text style={styles.focusCoinsDescription}>150</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            
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
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
    },
    infoContainer: {
        paddingTop: "20%"
    },
    focusSessionsContainer: {
        paddingTop: "8%",
        
    },
    headerTextStyle: {
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
    descriptionContainer: {
        flexDirection: "row",
        justifyContent: "center",    
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
        margin:20,
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
       borderRadius: 5,
   },
   logoStyle: {
       height: 34,
       width: 105,
   },
    focusSession: {
        flex: 1,
    },
    focusSessionBox: {
        backgroundColor: 'white',
        paddingTop: 25,
        paddingBottom: 25,
        width: 240,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 35,
        marginRight: 35,
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
   focusTimeText: {
        marginLeft: 22,
        fontSize: 17,
        paddingLeft: 10,
        fontWeight: "bold"
   },
   focusSessionInfo: {
    flexDirection: "row",
    alignItems: "center",

   },
   focusDescriptionText: {
        marginRight: "2%",
        fontSize: 17,
        fontWeight: "500"
   },
   focusCoinsDescription:{
       marginLeft: "2%",
       fontSize: 17,
       color: Colors.primary,
       fontWeight: "500"
   }
}) 

export default FocusUpInitialScreen;