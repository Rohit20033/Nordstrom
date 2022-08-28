import NavBar from "../Navbar/Navbar"
import { Box,Stack,Text,Badge, Image, Container, border, Input, IconButton,Button, Divider } from '@chakra-ui/react'
import ModalFun from "./Modal"
import SlideShow from "./slideshow"
import BoxesFun from "./Boxes/Boxes"
import { Link } from "react-router-dom"
import Products from "./products/Poroducts"
import BoxesFun2 from "./Boxes/boxes2"
import Category from "../Navbar/category"
import TopEle from "./topele"
import { useEffect,useState } from "react"
import FooterFun from "../footter/footer"
import {ChatIcon} from "@chakra-ui/icons"
let name =  localStorage.getItem('userName')

function HomePage(){
    const [state,isState]= useState(false)
    const [blank,setBlank] = useState(name)
    const style={
        textDecoration: "underline",
    }
   
    useEffect(()=>{
        if(blank===null){
            isState(false)
            
        }
        else{
            isState(true)
            
            
        }
     },[])
    
   return(
    <>
    <TopEle/>
     <NavBar/>
     <Category/>
     {state   ? null : <><Box marginTop={"50px"}><Text fontSize='2xl' fontWeight={"bold"} >Shop what you love—faster and easier.</Text></Box>
     <ModalFun/></>}
       

       
        
      <Box margin={"auto"} width={"90%"} marginTop={"50px"}>
        <Stack>
         <a href="https://www.nordstrom.com/becomecardmember?cc=AA1010"><img  src="https://n.nordstrommedia.com/id/44648fdb-be56-4600-addb-6d3c7ba21f2c.jpeg?h=200&w=1608" alt="" /></a>
         </Stack>
      </Box>
      <SlideShow/>
      <Box marginTop={"50px"}>
       <Text fontSize={"3xl"}  fontWeight="bold">NEW & NOTEWORTHY</Text>
      </Box>
      <BoxesFun/>
       <Box margin="auto" width={"95%"}  marginTop="50px">
        <Image    src="https://n.nordstrommedia.com/id/0a4d1c1c-e045-4f24-be62-b56b759440a6.jpeg?h=700&w=1608" alt="" />
       </Box>
         <Box marginLeft="50px" marginTop="50px">
          <Box display={"flex"}><Text fontSize={"2xl"}  fontWeight="bold">Great deals on what you love</Text></Box>
           <Box display={"flex"}><Text fontSize={"xl"} > Items similar to what you've browsed are on sale</Text></Box>
         </Box>
       <Products/>
         
         <Box marginTop="50px">
            <Text fontSize={"3xl"} fontWeight="bold"> THE THREAD</Text>
            <Text fontSize={"xl"} lineHeight={"50px"}>Introducing your new go-to destination for all things fashion, beauty and lifestyle at Nordstrom, from how-tos and style inspiration to exclusive interviews and more.</Text>
            <Text fontSize={"xl"}><a  style={style}href="">Get Inspired</a></Text>
         </Box>
        <Box marginLeft={"90%"} position="-webkit-sticky">
          <ChatIcon w={10} h={10} />
        </Box>
       <BoxesFun2/>
       <FooterFun/>
       
    
     
    </>
   )
}
export default HomePage