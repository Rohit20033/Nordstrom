
import { Box,Stack,Text,Avatar,Wrap,WrapItem,Badge, Image, Container, border, Input, IconButton,Button, Divider } from '@chakra-ui/react'
function FooterFun(){
    return(
      <Box cursor={"pointer"} marginTop={"50px"} color={"grey"} justifyContent={"center"} height={"auto"}  display="flex" >
        <Box  lineHeight={"50px"} w={"15%"} >
            <a href="https://www.nordstrom.com/browse/customer-service?origin=footer&cm_sp=corp-_-corp_CustomerService-_-globalfooternav_custserv">  <Text fontSize={"xl"} fontWeight="bold">Customer Service</Text></a>
          
            <Text fontSize={"xl"}>Contact Us</Text>
            <Text fontSize={"xl"}>Order Status</Text>
            <Text fontSize={"xl"}>Shipping</Text>
            <Text fontSize={"xl"}>Return Policy & Exchanges</Text>
            <Text fontSize={"xl"}>Price Adjustments</Text>
            <Text fontSize={"xl"}>Gift Cards</Text>
            <Text fontSize={"xl"}>FAQ</Text>
            <Text fontSize={"xl"}>Product Recalls</Text>
        </Box>
        <Box lineHeight={"50px"} w={"15%"} >
            <a href="https://www.nordstrom.com/browse/about?origin=footer&cm_sp=corp-_-corp_AboutUs-_-globalfooternav_aboutus">
            <Text fontSize={"xl"} fontWeight="bold">About Us</Text>
            </a>
           
            <Text fontSize={"xl"}>Careers</Text>
            <Text fontSize={"xl"}>Corporate Social Responsibility</Text>
            <Text fontSize={"xl"}>Diversity, Inclusion & Belonging</Text>
            <Text fontSize={"xl"}>Get Email Updates</Text>
            <Text fontSize={"xl"}>Nordstrom Blog</Text>
            <Text fontSize={"xl"}>The Thread</Text>
            <Text fontSize={"xl"}>Nordy Podcast</Text>
        </Box>
        <Box lineHeight={"50px"} w={"15%"} >
            <a href="https://www.nordstrom.com/browse/services?origin=footer&cm_sp=corp-_-corp_Services-_-globalfooternav_services">
            <Text fontSize={"xl"} fontWeight="bold">Stores & Services</Text>
            </a>
           
            <Text fontSize={"xl"}>Find a Store</Text>
            <Text fontSize={"xl"}>Free Style Help</Text>
            <Text fontSize={"xl"}>Alterations & Tailoring</Text>
            <Text fontSize={"xl"}>Pop-In Shop</Text>
            <Text fontSize={"xl"} >Virtual Events</Text>
            <Text fontSize={"xl"}>Spa Nordstrom</Text>
            <Text fontSize={"xl"}>Nordstrom Local</Text>
            
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
        <Wrap>
            <WrapItem marginLeft={"10px"}>
                <Avatar size={"sm"} name='Dan Abrahmov' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3wXFFuJ9ZI13gh7UI8i8ky1ka8VSAcdiXw&usqp=CAU' />
            </WrapItem>
            <WrapItem>
                <Avatar size={"sm"} name='Kola Tioluwani' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsr9fE2sownUhO9wxQOPHM8fe2pUrR5F55hYbJalluIjWHhbKjrN2Xzn3TT-pR4l5_SNI&usqp=CAU' />
            </WrapItem>
            <WrapItem>
                <Avatar size={"sm"} name='Kent Dodds' src='https://www.pngitem.com/pimgs/m/477-4770379_twitter-png-black-and-white-transparent-png.png' />
            </WrapItem>
            <WrapItem>
                <Avatar size={"sm"} name='Ryan Florence' src='https://thumbs.dreamstime.com/b/high-resolution-image-black-white-instagram-icon-high-resolution-image-black-white-instagram-icon-web-printing-purpose-172342399.jpg' />
            </WrapItem>
            <WrapItem>
                <Avatar size={"sm"} name='Prosper Otemuyiwa' src='https://image.shutterstock.com/image-illustration/plus-sign-icon-element-web-260nw-1098707264.jpg' />
            </WrapItem>
            
            
            </Wrap>
            </Box>
        </Box>
      </Box>
    )
}
export default FooterFun





