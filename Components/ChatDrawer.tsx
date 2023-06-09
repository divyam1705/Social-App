
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const chatDrawer = () => {
  const styles = StyleSheet.create({
    container: {
      padding: 20,

    },
    drawertext: {
      fontWeight: "400",
      marginBottom:20
    },
    profileimg: {
      height: 55,
      width: 55,
      borderRadius: 30,
    },
    contactcontainer: {
      marginVertical: 9,
      flex: 1,
      backgroundColor: "#1c1f20",
      borderRadius: 20,
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      elevation: 4,
      shadowOffset: {
        width: 3,
        height: 3
      },
      shadowColor: "white",
      shadowOpacity: 0.3,
    },
    namecontainer: {
      marginHorizontal: 12,
      marginVertical: 10
    },
    idtext: {
      color: "#57585a",
      fontSize: 12,
      paddingTop: 2
    },
    nametext: {
      fontWeight: "800",
      fontSize: 14
    },
    followbutton: {
      // backgroundColor:"#9e96fb",
      backgroundColor: "#313234",
      paddingHorizontal: 13,
      maxHeight: 40,
      paddingVertical: 10,
      borderRadius: 20,
      // marginLeft:80
      // alignSelf:"flex-end"
      // justifyContent:"flex-end"
    },
    followtext: {
      color: "#6f7072"
    },
    detailscontainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }

  })
  const data = [{
    name: "Welsey Stones",
    imgurl: "https://userstock.io/data/wp-content/uploads/2017/09/lesly-b-juarez-276953-300x300.jpg",
    userid: "@stoneswesley"
  },
  {
    name: "Anya Holmes",
    imgurl: "https://userstock.io/data/wp-content/uploads/2017/09/mohammad-metri-257271-300x300.jpg",
    userid: "@holmezz"
  },{
    name: "Justin Robins",
    imgurl: "https://userstock.io/data/wp-content/uploads/2017/07/william-stitt-151773-300x300.jpg",
    userid: "@iamroby"
  },{
    name: "Sarthak Choudhary",
    imgurl: "https://userstock.io/data/wp-content/uploads/2020/05/warren-wong-VVEwJJRRHgk-300x300.jpg",
    userid: "@sarthank03"
  }];
  return (
    <View style={styles.container}>
      <Text style={styles.drawertext}>Suggestions For You</Text>

      {data.map(({name,imgurl,userid})=>(<View style={styles.contactcontainer}>
        <Image
          style={styles.profileimg}
          source={{
            uri: imgurl
          }}></Image>
        <View style={styles.detailscontainer}>
          <View style={styles.namecontainer}>
            <Text style={styles.nametext}>{name}</Text>
            <Text style={styles.idtext}>{userid}</Text>
          </View>
          <TouchableOpacity style={styles.followbutton}>
            <Text style={styles.followtext}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>))}
    </View>
  )
}

export default chatDrawer