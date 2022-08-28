import { Fade, ScaleFade,Text,WrapItem, Slide,Avatar,Wrap, SlideFade,useDisclosure,Button,Collapse,Box } from '@chakra-ui/react'
import {Link} from "react-router-dom"
const women=["Women Get Inspired",
"New Arrivals",
"ASOS",
"Black-Owned & -Founded Brands",
"Contemporary",
"Nordstrom Made",
"Pop-In@Nordstrom |Tappan",
"Shop by Trend",
"Sports Fan Shop",
"Sustainable Style",
"TOPSHOP"]

const clothing=[
  "Activewear",
"Blazers, Suits & Separates",
"Coats & Jackets",
"Dresses",
"Jeans & Denim",
"Lingerie, Hosiery & Shapewear",
"Loungewear",
"Pants & Leggings",
"Shorts",
"Skirts",
"Sleepwear & Robes",
"Sweaters",
"Sweatshirts & Hoodies",
"Swimsuits & Cover-Ups",
"Tops",
"Maternity",
"Plus-Size Clothing"
]

const shoes =[
  "Booties",
  "Boots",
  "Clogs",
  "Comfort",
  "Dress Shoes",
  "Espadrilles",
  "Flats",
  "Heels",
  "Mules & Slides",
  "Oxfords & Loafers",
  "Running Shoes",
  "Sandals",
  "Slippers"
]

function CollapseEx() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button bg={"white"} onClick={onToggle}><Text>Women</Text></Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p='40px'
            color='black'
            mt='4'
            bg='white'
            rounded='md'
            shadow='md'
            display={"flex"}
            width="100%"
            height="auto"
            justifyContent={"space-between"}
            position="absolute"
            margin={"auto"}
            
          >
           
           <Box  lineHeight={"50px"} w={"14%"}  >
           
            {women.map((item)=>{
                return(
                  <Box textAlign={"justify"} ><Text fontWeight={"bold"}  fontSize={"xl"}>{item}</Text></Box>
                )
              })}
            
            
           </Box>
        <Box paddingRight={"20px"} lineHeight={"50px"} w={"13%"}  >
            <Box textAlign={"justify"} ><Text fontSize={"xl"} fontWeight="bold">Clothing</Text></Box>
      
             {clothing.map((items)=>{
              return(
                <Box  textAlign={"justify"} ><Text  fontSize={"xl"}>{items}</Text></Box>
              )
             })}
        </Box>
        <Box  lineHeight={"50px"} w={"15%"} >
            <Box textAlign={"justify"} ><Text fontSize={"xl"} fontWeight="bold">Shoes</Text></Box>
            {shoes.map((items)=>{
              return(
             <Box textAlign={"justify"} > <a href="https://www.nordstrom.com/browse/women/new?breadcrumb=Home%2FWomen%2FNew%20Arrivals&origin=topnav"><Text  fontSize={"xl"}>{items}</Text></a> </Box>

              )
             })}
        </Box>
        <Box lineHeight={"50px"} w={"15%"}>
            <Text fontSize={"xl"} fontWeight="bold">Nordstrom Card & Rewards</Text>
            <Text fontSize={"xl"}>The Nordy Club Rewards</Text>
            <Text fontSize={"xl"}>Pay My Bill</Text>
            <Text fontSize={"xl"}>Manage My Nordstrom Card</Text>
            
        </Box>
        <Box lineHeight={"50px"} w={"15%"} >
            <Text fontSize={"xl"} fontWeight="bold">Nordstrom, Inc.</Text>
            <Text fontSize={"xl"}>Nordstrom Rack</Text>
            <Text fontSize={"xl"}>Nordstrom Canada</Text>
            <Text fontSize={"xl"}>Investor Relations</Text>
            <Text fontSize={"xl"}>Press Releases</Text>
            <Text fontSize={"xl"}>Nordstrom Media Network</Text>
        </Box>
        <Box w={"17%"} paddingTop="100px" >
        <Box>
        
        </Box>
        </Box>
      </Box>
        
        </Collapse>
      </>
    )
  }

  export default CollapseEx