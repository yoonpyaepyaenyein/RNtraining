import React ,{useState,  useEffect } from 'react'
import { View, Text } from 'react-native'

//STYLE
import styles from './style'
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store'

const Dashboard = () => {
    const [email, setEmail] = useState('');
    // console.log('email>>>',email)

    useEffect(()=>{
        getUserData();
    },[])


    const getUserData = async () =>{
        await RNSecureKeyStore.get('@user.data')
            .then((res) => {
                setEmail(JSON.parse(res).email)
                // console.log('res>>>>',JSON.parse(res).email)
        },(err) => {
             console.log(err)
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello, {email}</Text>
        </View>
    )
}

export default Dashboard;