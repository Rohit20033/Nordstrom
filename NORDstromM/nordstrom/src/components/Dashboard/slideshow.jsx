import { useState,useEffect } from "react"
import { Box,Stack,Text,Center, Image, Container, border, Input, IconButton,Button, Divider } from '@chakra-ui/react'
const images=["https://n.nordstrommedia.com/id/3ba3058a-ce61-45c3-a2c8-6eeb1eaaf9a7.jpeg?h=700&w=1608",
"https://n.nordstrommedia.com/id/a5b73db2-4180-4576-b2ed-e68436550fc2.jpeg?h=700&w=1608",
"https://n.nordstrommedia.com/id/6e0e5e0b-b946-496c-956e-419bc76aa72c.jpeg?h=700&w=1608"]

const headings=["Western Vibes for Now & Later","Prep Meets Punk","A+ Athleisure "]
const desc=["wear these trending boots with summer shorts and dresses, then with denim in cooler weather. From Dolce Vita and more",
"Ultra-chunky soles add modern attitude to old-school styles from Steve Madden, Dr. Martens and more.",
"Master easygoing style this semester with fall's freshest pieces.  "
]
function SlideShow(){

    const [currentIndex,setCurrentIndex]=useState(0)
    const [currentI,setCurrentI]=useState(0)

    useEffect(()=>{
       
        const s = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                setCurrentIndex(currentIndex + 1);
           }
        }, 5000)

        return () => clearInterval(s);
    })
    useEffect(()=>{
       
        const s = setInterval(() => {
            if(currentI === headings.length - 1) {
                setCurrentI(0);
            } 
            else {
                setCurrentI(currentI + 1);
           }
        }, 5000)

        return () => clearInterval(s);
    })

    useEffect(()=>{
       
        const s = setInterval(() => {
            if(currentI === desc.length - 1) {
                setCurrentI(0);
            } 
            else {
                setCurrentI(currentI + 1);
           }
        }, 5000)

        return () => clearInterval(s);
    })
    return(
        <>
          <Box display={"flex"}  width={"90%"}  margin={"auto"} marginTop="50px" height={"600px"} >
            
            <Box width={"50%"}   boxSize='1xl' >
             <Image 
             boxSize='100%'
             width={"100%"}
             objectFit='cover' 
             
             src={images[currentIndex]} />
            </Box>
            
           
            <Box paddingTop={"100px"} marginLeft={"-30%"}  width={"30%"}  height={"100%"}> 
             <Box marginTop={"70px"} display={"flex"}><Text fontSize={"4xl"} fontWeight={"bold"}>{headings[currentI]}</Text></Box>
              <Box display={"flex"}><Text fontSize={"m"} textAlign={"justify"}>{desc[currentI]}</Text></Box>
            </Box>
          </Box>

          <Center width={"90%"} margin="auto" marginTop={"50px"} bg={"black"} height='2px'>
            <Divider orientation='vertical' />
          </Center>
        </>
    )
}

export default SlideShow