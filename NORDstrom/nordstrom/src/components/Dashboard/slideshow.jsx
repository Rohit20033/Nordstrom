import { useState,useEffect } from "react"
import { Box,Stack,Text,Center, Image, Container, border, Input, IconButton,Button, Divider } from '@chakra-ui/react'
const images=["https://n.nordstrommedia.com/id/3ba3058a-ce61-45c3-a2c8-6eeb1eaaf9a7.jpeg?h=700&w=1608","https://n.nordstrommedia.com/id/a5b73db2-4180-4576-b2ed-e68436550fc2.jpeg?h=700&w=1608"]
function SlideShow(){

    const [currentIndex,setCurrentIndex]=useState(0)

    useEffect(()=>{
       
        const s = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                setCurrentIndex(currentIndex + 1);
           }
        }, 3000)

        return () => clearInterval(s);
    })
    return(
        <>
          <Box display={"flex"}  width={"90%"} border="1px solid black" margin={"auto"} marginTop="50px" height={"600px"} justifyContent={"center"}>
            <div width={"50%"} >
            <Box>
            <img width={"100%"}  src={images[currentIndex]} />
            </Box>
            </div>
           
            <Box width={"50%"} Right border="1px solid black" height={"100%"}> 
             <Box><Text fontSize={"3xl"} fontWeight={"bold"}>Western Vibes for Now & Later</Text></Box>
             <Box> <Text>wear these trending boots with summer shorts and dresses, then with denim in cooler weather. From Dolce Vita and more</Text></Box>
            </Box>
          </Box>

          <Center width={"90%"} margin="auto" marginTop={"50px"} bg={"black"} height='5px'>
            <Divider orientation='vertical' />
          </Center>
        </>
    )
}

export default SlideShow