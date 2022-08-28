import CollapseEx from "./Trans"

import { Box, Image,useDisclosure,Stack,Collapse, Container,Text, border, Input, IconButton,Button, color, textDecoration } from '@chakra-ui/react'
function Category(){
    const { isOpen, onToggle } = useDisclosure()
    
    
    
    return(
       
        <Box  cursor={"pointer"} display="flex" justifyContent={"space-evenly"} marginTop="20px" >
           <Box>
            <Text color={"red"}> Sale  </Text>
           </Box>

           <Box>
           <Text><CollapseEx/></Text>
           </Box>

           <Box>
           <Text>Men</Text>
           </Box>

          

           <Box>
           <Text>Kids</Text>
           </Box>

           <Box>
           <Text>Young Adults</Text>
           </Box>
           
           <Box>
           <Text>Active Wear</Text>
           </Box>


           <Box>
           <Text>Home</Text>
           </Box>

           <Box>
           <Text>Beauty</Text>
           </Box>

           <Box>
           <Text>Designer</Text>
           </Box>

           <Box>
           <Text>Gifts</Text>
           </Box>

           <Box>
           <Text>Brands</Text>
           </Box>
        </Box>
    )
}

export default Category