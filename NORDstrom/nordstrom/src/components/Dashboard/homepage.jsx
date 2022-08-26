import NavBar from "../Navbar/Navbar"
import { Box,Stack,Text,Badge, Image, Container, border, Input, IconButton,Button, Divider } from '@chakra-ui/react'
import ModalFun from "./Modal"
import SlideShow from "./slideshow"
import BoxesFun from "./Boxes"
import { Link } from "react-router-dom"
import Products from "./Poroducts"


function HomePage(){
   return(
    <>
     <NavBar/>
     <Text fontSize='xl' fontWeight={"bold"} >Shop what you love—faster and easier.</Text>
     <ModalFun/>
       

       
        
      <Box margin={"auto"} width={"90%"} marginTop={"50px"}>
        <Stack>
         <a href="https://www.nordstrom.com/becomecardmember?cc=AA1010"><img  src="https://n.nordstrommedia.com/id/44648fdb-be56-4600-addb-6d3c7ba21f2c.jpeg?h=200&w=1608" alt="" /></a>
         </Stack>
      </Box>
      <SlideShow/>
      <BoxesFun/>
       <Box margin="auto" width={"95%"} >
        <Image    src="https://n.nordstrommedia.com/id/0a4d1c1c-e045-4f24-be62-b56b759440a6.jpeg?h=700&w=1608" alt="" />
       </Box>
       <Products/>
       
    
     
    </>
   )
}
export default HomePage