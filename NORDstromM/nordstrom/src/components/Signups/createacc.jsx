

import { Box,InputGroup,useToast ,InputRightElement,Stack,Text, Image, Container, border, Input, IconButton,Button, color, Toast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Navbar/Navbar'
import {CheckCircleIcon} from "@chakra-ui/icons"
import { useState } from 'react'

import PostData from '../api'
import axios from 'axios'
import { useEffect } from 'react'

let email = localStorage.getItem('email')

function CreateAcc(){
    const navigate = useNavigate()
    const prevData =  JSON.parse(localStorage.getItem('Mydata'));
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [data,setData] = useState({ 
        
        user_email:email || "",
        user_password:"",
        first_name:"",
        last_name:""
      
})
const toast = useToast()
const [user,setUser]=useState("")
const[islogin,setIslogin]=useState(false)


      

    // console.log(prevData)

   

    const handdleValue =(e)=>{
      
        const {name,type,value}= e.target
        const val = type ==="number" ? Number(value) : value;
        
        setData({
            ...data,
            [name]:val
        })
        
       
    }
  
      useEffect(()=>{
        setUser(data.first_name)
       
      })
    
    const handdleAddData=()=>{
        
        // console.log(data);
        
        localStorage.setItem("userName",user)
        if(data.first_name==""||data.last_name===""||data.user_password===""){
            return toast({
                title: 'Error.',
                description: "Please fill all the Details.",
                status: 'error',
                duration: 9000,
                isClosable: false,
              })
           
        }
        
        // localStorage.setItem('userName', user)
        axios.post("http://localhost:3000/email",{
            first_name:data.first_name,
            last_name:data.last_name,
            user_password:data.user_password,
            user_email:email
        }).then(res=>{
           
            navigate("/")
            window.location.reload()
        })
        
       
    }

      console.log(user)
    //   console.log(islogin)
    return(
         <>
         <NavBar  user={user} />
         
        <Box w={"25%"}    height="auto" paddingTop={"30px"} paddingBottom={"30px"} margin={"auto"} marginTop="100px" >
            <Container>
            <Stack spacing={"5"}>
          <Text fontSize='3xl' fontWeight={"bold"} display="flex">Create Account</Text>
          <Box  display="flex"><p>Check out faster</p></Box>
          <Box display="flex"> <p>Track orders easily</p> </Box>
          <Box display="flex"> <p>Use one sign-in across our brands</p></Box>
           <Box display="flex"><p>*Required</p></Box>
           <Box display="flex" justifyContent={"space-between"}>{localStorage.getItem('email')}<button onClick={()=>navigate("/signin")}>Edit</button></Box>
             <Box display="flex">
                <p >First Name</p>
             </Box>
             <Input 
              name='first_name'
              onChange={handdleValue}
              value={data.first_name}
             height={"60px"}  focusBorderColor='black' placeholder='' />
             <Box display="flex">
                <p>Last Name</p>
             </Box>
             <Input
             name='last_name'
             onChange={handdleValue}
             value={data.last_name}
             height={"60px"}  focusBorderColor='black' placeholder='' />
             <Box  display="flex" >
               <p>Create Password</p>
             </Box>
            
             <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder=''
                    height={"50px"}
                    name="user_password"
                    onChange={handdleValue}
                    value={data.user_password}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
             </InputGroup>
             <Box>
                <Stack>
                <Box display={"flex"} justifyContent="space-between" width={"260px"}> <CheckCircleIcon/><p id='pp3'>Both upper and lowercase letters</p></Box>
                <Box display={"flex"} justifyContent="space-between" width={"170px"}> <CheckCircleIcon/><p id='pp2'>A number or symbol</p></Box>
                <Box  display={"flex"} justifyContent="space-between" width={"135px"}> <CheckCircleIcon/><p id='pp' >8-20 characters</p></Box>
                </Stack>
               
             </Box>
             <p>By tapping Next, you agree to our <a href="">Privacy Policy</a> and Terms & Conditions.</p>
             <Button onClick={handdleAddData}  padding={"25px 5px 25px 5px"} bg={"black"} color="white"> Create Account</Button>
              
          </Stack>
            </Container>
        
        </Box>
        </>
    )
}


export default CreateAcc