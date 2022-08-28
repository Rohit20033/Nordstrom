import { Box,Text,Avatar } from "@chakra-ui/react"
const style={
    textDecoration: "underline",
}

function TopEle(){
    return(
       <Box  display={"flex"} alignItems="center" justifyContent={'space-evenly'} height={"50px"} bg={"black"}>
         
           <Box>
           <Text fontSize={"xl"} color={"white"}> Make a difference for kids in our communities with Shoes That Fit. <a style={style}  href="https://www.nordstrom.com/browse/nordstrom-cares/shoes-that-fit?jid=-_-012996-19580&cm_sp=merch-_-corporate_social_responsibility_19580_-_-012996-_-globaltcos_0_0_0&">Learn More & Donate</a>  </Text>
           </Box>
          <Box marginRight="-200px" display={"flex"}  width={"6%"} height="80%">
            <Box margin={"auto"} > <Avatar size='xs'  name='Indian Flag' src='https://upload.wikimedia.org/wikipedia/commons/3/37/Flag_India.svg' /> </Box>
            <Box display={"flex"} alignItems="center" width={"50%"}><Text fontSize={"xl"} color={"white"}>India</Text></Box>
          </Box>
       </Box>
    )
}

export default TopEle