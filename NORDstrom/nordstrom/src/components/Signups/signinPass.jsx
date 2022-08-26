import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box,Stack,Text,InputGroup, InputRightElement,Image, Container, border, Input, IconButton,Button } from '@chakra-ui/react'
import NavBar from '../Navbar/Navbar'
import {Myapi} from '../api'
function SignInPass(){


    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [data,setData] = useState([])
      const [pass, setPass] = useState("")
      const [sys, setSys] = useState("")
      const [name, setName] = useState("")
    const navigate = useNavigate()

   var email = localStorage.getItem('email')
//    console.log(email)
    useEffect(() => {
        Myapi().then((res)=> setData(res.data))
     }, [])


    const handdleNavigate =()=>{
       navigate("/signin")
    }

    const navigatePage=()=>{
        
        const allEmails = data.map((item)=>email===item.user_email&&pass===item.user_password )
        setSys(allEmails);
        let x = allEmails.filter((item)=>item===true)
        x=x.join(" ")
        console.log(x)
        if(x){
           navigate("/")
            
        }
        else{
           alert("gadbad hai!")
        }
        
    }
    
    
    console.log(name)
    console.log(sys)
    
    return(
        <>
        <NavBar />
        <Box w={"25%"}   height="auto" paddingTop={"30px"} paddingBottom={"30px"} margin={"auto"} marginTop="100px" >
            <Container>
            <Stack spacing={"5"}>
                <Box display={"flex"}><Text fontSize='3xl' fontWeight={"bold"}>
            Welcome back!</Text></Box>
          
            
             <Box display={"flex"}>
             <p>Sign in with the same info at:</p>
             </Box>

            
              <Box>
              <Box display={"flex"} >
             <p>Email</p>
             </Box>
                 
                <Box display={"flex"} justifyContent={"space-between"} >
                <Text>{localStorage.getItem('email')}</Text>
                <Button onClick={handdleNavigate}>Edit</Button>
                </Box>
              </Box>
             <Box display={"flex"}>
                <p>Password</p>
             </Box>
             <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder=''
                    height={"50px"}
                    
                    value={pass} onChange={(e)=>setPass(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
             </InputGroup>
            <Box display={"flex"}> <p> Forgot Password?</p></Box>
             <Button onClick={navigatePage} padding={"25px 5px 25px 5px"} bg={"black"} color="white">Next</Button>
          </Stack>
            </Container>
        
        </Box>
        </>
    )
}
export default SignInPass