import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container:{
        // flex:1,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'red'
    },
    title:{
        fontSize:hp(4),
        fontWeight:'bold',
        marginTop:hp(13),
        color:'#6B778A'
    },
    inputContainer:{
        marginVertical:hp(5),
    },
    passwordInput:{
        borderWidth:hp(0.2),
        borderColor:'#ddd',
        width:wp(80),
        fontSize:hp(2),
        marginTop:hp(4),
        borderRadius:hp(1),
        paddingLeft:hp(2),
        
    },
    checkboxContainer:{
        alignItems:'center',
        // backgroundColor:'red',
        flexDirection:'row',
        marginRight:hp(15),
        // paddingHorizontal:wp(4)
        
    },
    checkbox:{
        color:'#6B778A',
    },
    checkboxTitle:{
        color:'#6B778A',
        paddingLeft:hp(1.4)
    },
    btnContainer:{
        // backgroundColor:'red',
        borderWidth:hp(0.2),
        borderColor:'#ddd',
        width:wp(25),
        height:hp(5),
        borderRadius:hp(0.3),
        alignItems:'center',
        justifyContent:'center',
        marginTop:hp(6)
    },
    btnTitle:{
      fontSize:wp(4.5)
    }
})

export default styles;
