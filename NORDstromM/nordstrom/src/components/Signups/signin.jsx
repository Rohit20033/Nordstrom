import { Box,Stack,Text,useToast, Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, useToastImage, Container, border, Input, IconButton,Button, Divider } from '@chakra-ui/react'
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
      const toast = useToast()
      

     useEffect(() => {
        
        Myapi().then((res)=>setData(res.data))
        
     }, [])
     
     
      const navigatePage=()=>{
         if(email===""){
            return toast({
                title: 'Wrong Credentials.',
                description: "Enter Vaild E-Mail Address.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })

              
              
         }
        const allEmails = data.map((item)=>email===item.user_email);
        let x = allEmails.filter((item)=>item==true)
        x=x.join(" ")
        console.log(allEmails)
        if(x){
    
             navigate("/signin2")
        }
        else{
            navigate("/signup")
        }
        localStorage.setItem('email', email);
       
        
              
        
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
