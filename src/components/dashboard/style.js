import { StyleSheet } from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        // justifyContent:'center'
    },
    infoContainer:{
        width:wp(70),
        height:wp(50),
        borderRadius:hp(0.5),
        alignItems:'center',
        borderColor:'#ddd',
        borderWidth:hp(0.1),
        justifyContent:'center',
        shadowOffset:{width:0, height:5},
        shadowColor:'#6B778A',
        shadowOpacity:hp(0.5),
        elevation:3,
        // marginBottom:hp(2)
        marginHorizontal:wp(10),
        marginVertical:hp(10)
    },
    userTitle:{
        fontSize:wp(5),
        color:'#000',
        margin:wp(6),
       
    },
    emailTitle:{
        marginTop:wp(4)
    },
    logoutContainer:{
        // backgroundColor:'red',
        marginTop:hp(30),
        alignItems:'center',
        justifyContent:'center',
    },
    logout:{
        width:wp(25),
        height:wp(10),

        borderColor:'#ddd',
        borderWidth:hp(0.2),
        borderRadius:hp(0.3),
        alignItems:'center',
        justifyContent:'center',
    }


})

export default styles;