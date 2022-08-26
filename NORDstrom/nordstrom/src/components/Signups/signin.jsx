import { Box,Stack,Text, Image, Container, border, Input, IconButton,Button, Divider } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Navbar/Navbar'

import axios from "axios"
import { useState,useEffect } from 'react'
import {Myapi} from '../api'
import SignInPass from './signinPass'

function SignIn(){
    const navigate = useNavigate()
      const [data,setData] = useState([])
      const [email, setEmail] = useState("")
      const [sys, setsys] = useState("")
   
      

     useEffect(() => {
        
        Myapi().then((res)=>setData(res.data))
        
     }, [])
     
     
      const navigatePage=()=>{
       
        const allEmails = data.map((item)=>email===item.user_email);
        let x = allEmails.filter((item)=>item==true)
        x=x.join(" ")
        console.log(x)
        if(x){
             navigate("/signin2")
        }
        else{
            navigate("/signup")
        }
        localStorage.setItem('email', email);
        localStorage.setItem('Mydata', JSON.stringify(data));
        
              
        
    setsys(allEmails);
       
        
        
    }
    // console.log(data)
   
    // console.log(sys)
    
  
    return(
         <>
         <NavBar val={email}/>
         
        <Box w={"25%"}   height="auto" paddingTop={"30px"} paddingBottom={"30px"} margin={"auto"} marginTop="100px" >
            <Container>
            <Stack spacing={"5"}>
          <Text fontSize='3xl' fontWeight={"bold"} display={"flex"} >Sign In | Create Account</Text>
             <Box display={"flex"} ><p>Enter your email to get started.</p></Box>
             <Box display={"flex"}><p>Email</p></Box>
             
             <Input  value={email} onChange={(e)=>setEmail(e.target.value)}  height={"60px"}  focusBorderColor='black' placeholder='' />
             <p>By tapping Next, you agree to our <a href="">Privacy Policy</a> and Terms & Conditions.</p>
             <Button onClick={navigatePage} padding={"25px 5px 25px 5px"} bg={"black"} color="white">Next</Button>
          </Stack>
            </Container>
            
        </Box>
         
        
        </>
    )
    
}
export default SignIn
