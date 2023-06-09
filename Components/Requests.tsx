import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Requests = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingtext}>Requests</Text>
            <ScrollView horizontal={true}>
                <View style={styles.requestcard}>
                    <View style={styles.subcont1}>
                        <Image
                            style={styles.userimg}
                            source={{
                                uri: "https://userstock.io/data/wp-content/uploads/2020/06/women-s-white-and-black-button-up-collared-shirt-774909-2-300x300.jpg"
                            }}></Image>
                        <Text style={styles.username}>Hanna Caroll</Text>
                        <Text style={styles.friendtext}> wants to add you to friends</Text>
                    </View>
                    <View style={styles.subcont2}>
                        <TouchableOpacity style={[styles.buttons,styles.accept]}>
                            <Text >Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttons,styles.decline]}>
                            <Text style={{ color: "#6f7072" }}>Decline</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.requestcard}>
                    <View style={styles.subcont1}>
                        <Image
                            style={styles.userimg}
                            source={{
                                uri: "https://userstock.io/data/wp-content/uploads/2017/07/pexels-photo-175977-300x300.jpg"
                            }}></Image>
                        <Text style={styles.username}>Mark Smiths</Text>
                        <Text style={styles.friendtext}> wants to add you to friends</Text>
                    </View>
                    <View style={styles.subcont2}>
                        <TouchableOpacity style={[styles.buttons,styles.accept]}>
                            <Text >Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttons,styles.decline]}>
                            <Text style={{ color: "#6f7072" }}>Decline</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default Requests

const styles = StyleSheet.create({
    container: {
        padding: 20,

    },
    headingtext: {
        fontWeight: "300",
        fontSize: 16
    },
    requestcard: {
        marginTop: 20,
        marginBottom:10,
        height: 160,
        width: 350,
        borderRadius: 20,
        marginHorizontal:2,
        elevation: 5,
        backgroundColor: "#1c1f20",
        shadowColor:"#6f7072",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    userimg: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 10
    },
    subcont1: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    subcont2: {
        // backgroundColor:"red",
        // width:340,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent:"space-between"
    },
    username: {
        fontWeight: "bold"
    },
    friendtext: {
        fontWeight: "100"
    },
    buttons: {
        width: 160,
        height: 40,
        borderRadius: 20,
        backgroundColor: "red",
        margin: 8,
        paddingVertical:9,
        paddingHorizontal:55
    },
    accept: {
        backgroundColor: "#9e96fb",

    },
    decline: {
        backgroundColor: "#313234",
    }

})