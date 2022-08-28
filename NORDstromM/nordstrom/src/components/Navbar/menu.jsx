
import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    MenuDivider,
    MenuGroup,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Box, Image, Container, border, Input, IconButton,Button,Text 
    
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { ChevronDownIcon, ChevronUpIcon,AddIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { MdSettings } from 'react-icons'
import {useEffect,useState} from "react"



let name =  localStorage.getItem('userName')



 
export default function MenuCom() {
    const { isOpen, onOpen, onClose } = useDisclosure()
     const navigate = useNavigate()
     const [state,isState]= useState(false)
     const [blank,setBlank] = useState(name)
    const navigatePage=()=>{
         navigate("/signin")
    }
     
    
     
    
        

 
 useEffect(()=>{
    if(blank===null){
        isState(false)
        
    }
    else{
        isState(true)
        
        
    }
 },[])

    const convertToFalse=()=>{
        
          isState(false)
          setBlank(null)
          localStorage.removeItem("userName")
         window.location.reload()
         
    }

   console.log(blank)
    
    return (
        <Menu  isOpen={isOpen}>
  <MenuButton 
    variant="ghost"
    mx={1}
    py={[1, 2, 2]}
    px={4}
    borderRadius={5}
    _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
    aria-label="Courses"
    fontWeight="normal"
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
  >
    {state ? `Hi,${name}`: <Box>Sign In{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</Box>}
  </MenuButton>
  <MenuList  onMouseEnter={onOpen} onMouseLeave={onClose}  w={"250px"} alignItems='center' >
    
      <MenuItem>
       
      {state ?  <Box id="box" onClick={navigatePage} paddingLeft="3px" alignItems='center'  paddingRight="3px" display='flex' height="40px"  w={"200px"} color={"black"} bg={"white"}><Text  fontSize='lg'></Text></Box> : <Box id="box" onClick={navigatePage} paddingLeft="3px" alignItems='center'  paddingRight="3px" display='flex' height="40px"  w={"200px"} color={"white"} bg={"black"}><Text  fontSize='lg'>Sign In | Create Account</Text></Box>}
       
       
       
      </MenuItem>
      <MenuItem fontWeight={"bold"} > { state ? <Box display={"flex"} > <Box>{name}'S Account </Box> <Box marginLeft="10px" onClick={convertToFalse}>Sign Out</Box></Box>     : "Your Account" } </MenuItem>
      <MenuItem> <a href="https://www.nordstrom.com/my-account/purchases"></a>  Purchase </MenuItem>
      <MenuItem>  <a href="https://www.nordstrom.com/my-account/wishlist?cm_sp=WL_SP_A-_-WL_SP_B-_-WL_SP_C&origin=tab">Wish List</a>   </MenuItem>
      <MenuItem>The Nordy Club Reward </MenuItem>
       <MenuItem>Shipping Addresses  </MenuItem>
       <MenuItem>Payment Method </MenuItem>
       <MenuItem>Looks </MenuItem>
       <MenuItem>Pay And Manage Nordstrom Card </MenuItem>
       <MenuItem>Payments </MenuItem>
 
    <MenuDivider />
    <MenuGroup title='Account Settings'>
      <MenuItem>Password & Personal Info</MenuItem>
      <MenuItem>Email And Mail Preferences</MenuItem>
      <MenuItem>Stores And Events</MenuItem>
      <MenuDivider />
      <MenuItem fontWeight={"bold"}>We Are Here To Help 24/7</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
    )
    
}