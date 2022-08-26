
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
export default function MenuCom() {
    const { isOpen, onOpen, onClose } = useDisclosure()
     const navigate = useNavigate()
    const navigatePage=()=>{
         navigate("/signin")
    }
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
     Sign In{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
  </MenuButton>
  <MenuList  onMouseEnter={onOpen} onMouseLeave={onClose}  w={"250px"} alignItems='center' >
    
      <MenuItem><Box onClick={navigatePage} paddingLeft="3px" alignItems='center'  paddingRight="3px" display='flex' height="40px"  w={"200px"} color={"white"} bg={"black"}><Text  fontSize='lg'>Sign In | Create Account</Text></Box></MenuItem>
      <MenuItem fontWeight={"bold"} > Your Account </MenuItem>
      <MenuItem>Purchase </MenuItem>
      <MenuItem>Wish List </MenuItem>
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