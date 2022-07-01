import React ,{useState , useContext} from 'react'
import { View, Text } from 'react-native'


//COMPONENT
import LoginHeader from '../../components/login/loginHeader';
import { AuthContext } from '../../context/context';

const Login = ({navigation}) => {
  const [email,setEmail] =useState('');
  const [title,setTitle] = useState('Login');
  const [question,setQuestion] = useState('You do not have an account please');
  const [toggle,setToggle] = useState(' Register');


  const {next,getNext} = useContext(AuthContext);
  console.log('next>>>',next);
  console.log('getNext',getNext)
  

  const toggleHandler= (value) =>{
    if(title ==='Login'){
      setTitle('Register');
      setQuestion('You already have an account please');
      setToggle(' Login')
    }else{
      setTitle('Login');
      setToggle(' Register')
      setQuestion('You do not have an account please')
    }
}

  const nextHandler=() =>{
      if(title === 'Login'){
        getNext(title)
        navigation.navigate('Password');
        // console.log('next>>>',next)
      }else{
        getNext('Register')
        navigation.navigate('Password');
      }
    }

  return (
    <View>
     <LoginHeader 
      titleHeader={title}
      emailValue={email}
      onChangeEmail={value => setEmail(value)}
      goSecurity={nextHandler}
      handleToggle={toggleHandler}
      question={question}
      questionHeader={toggle}
      
      />
    </View>
  )
}

export default Login;