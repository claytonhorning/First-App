import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import TopBar from '../../components/TopBar/TopBar';
import Colors from '../../constants/colors';

const PurchaseCoinsScreen = (props) => {
    return (
        <ScrollView style={styles.container}>
            <TopBar/>
            <Text style={styles.headerTextStyle}>Purchase focus coins</Text>

            <View style={styles.purchaseContainer}>
                <Image style={{height: 70, width: 70}} source={require('../../assets/img/focus-coin.png')}/>
                <Text style={styles.coinAmount}>50</Text>
                <View style={styles.verticleLine}/>
                <Text style={styles.price}>$2.99</Text>
            </View>

            <View style={styles.purchaseContainer}>
                <Image style={{height: 70, width: 99}} source={require('../../assets/img/focus-coins-2.png')}/>
                <Text style={styles.coinAmount}>150</Text>
                <View style={styles.verticleLine}/>
                <Text style={styles.price}>$4.99</Text>
            </View>

            <View style={styles.purchaseContainer}>
                <Image style={{height: 70, width: 131}} source={require('../../assets/img/focus-coins-3.png')}/>
                <Text style={styles.coinAmount}>300</Text>
                <View style={styles.verticleLine}/>
                <Text style={styles.price}>$9.99</Text>
            </View>
            <Text style={{fontSize: 25, fontWeight: "bold", paddingLeft: 35, paddingTop: 30}}>Cash out</Text>

            <View style={styles.descriptionContainer}>
                <View style={styles.descriptionBox}>
                    <Text style={styles.boxText}>Payout</Text>
                    <View style= {styles.lineStyle}/>
                    <Text style={styles.blueText}>$5.32</Text>
                </View>

                <View style={styles.descriptionBox}>
                    <Text style={styles.boxText}>Your coins</Text>

                    <View style={styles.lineStyle}/>

                    <View style={styles.coinContainer}>
                        <Image style={styles.focusCoins}
                        source={require('../../assets/img/focus-coins-3.png')}/>
                        <Text style={styles.blueText}>204</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
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
    purchaseContainer: {
        backgroundColor: 'white',
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        padding: 25,
        flexDirection: "row",
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderRadius: 5,
    },
    coinAmount: {
        paddingLeft: 10,
        fontSize: 25,
        fontWeight: "500",
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    verticleLine: {
        height: '100%',
        borderWidth: 1,
        borderColor:'#EFEFEF',
        position: 'absolute',
        right: 110
    },
    price: {
        color: Colors.primary,
        fontSize: 20,
        position: 'absolute',
        right: 30
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
})

export default PurchaseCoinsScreen;