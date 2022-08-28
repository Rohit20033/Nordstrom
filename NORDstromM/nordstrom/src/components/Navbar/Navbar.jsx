
import { Box, Image, Container, border, Input, IconButton,Button } from '@chakra-ui/react'

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
    Divider 
   
  
    
} from "@chakra-ui/react"
import { ChevronDownIcon, LockIcon,SearchIcon} from "@chakra-ui/icons"
import MenuCom from './menu'
import PopFun from './pop'
import SignIn from '../Signups/signin'
import {Link} from "react-router-dom"
import { useEffect } from 'react'


function NavBar({value,state}) {
  
    const style = {
        display: "flex",
        border: "1px solid black",
        justifyContent: "center",
        alignItem: "center"
    }
     const popfun =()=>{
            
     }

     
    
    
     
     
    return (
<> 
        <Box   height="130px" w='9xl' display='flex' alignItems='center' justifyContent='space-around'>
           <Link to={"/"}> <Image height="125px" src='https://1000logos.net/wp-content/uploads/2019/08/Nordstrom-logo-1.jpg' alt='Nordstrom Logo' /></Link>
            <Input onClick={popfun}   focusBorderColor='black'  height="60px" size='lg' width='55%' placeholder='Search for products or brand' />
            <MenuCom/>
            <PopFun/>
          
        </Box>
        <Divider w={"90%"} margin="auto" orientation='horizontal' />

        
        </>
    )
}

export default NavBar