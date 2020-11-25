import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image} from 'react-native';

import Colors from '../../constants/colors';
import Icon from "react-native-vector-icons/EvilIcons";


function TopBar(props) {
    return (
        <View style={styles.TopBar}>
            <SafeAreaView>
                <View style={styles.TopBarItems}>
                    
                    <View style={styles.CoinContainer}>
                        <Image
                        style={styles.FocusCoin}
                        source={require('../../assets/img/focus-coin.png')}>
                        </Image>
                        <Text style={styles.TextStyle}>10</Text>
                    </View>
                    

                    <View style={styles.UserInfo}>
                        <Icon
                        name="user"
                        color="#fff"
                        size={42}/>
                        <Text style={styles.TextStyle}>Matthew</Text>
                    </View>
                   
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    TopBar: {
        position: 'absolute',
        width: '100%',
        top: 0, 
        backgroundColor: Colors.primary,
    },
    TopBarItems: {
        flexDirection: "row",
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 30,
        marginRight: 30,
        alignItems: "center",
    }, 
    CoinContainer: {
        flexDirection: "row",
        alignItems: "center",  
    },
    FocusCoin: {
        height: 32,
        width: 32,
        marginRight: 8,      
    },
    TextStyle: {
        color: 'white',
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontWeight: "bold", 
    },
    UserInfo : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        flex: 1
    }
})

export default TopBar;