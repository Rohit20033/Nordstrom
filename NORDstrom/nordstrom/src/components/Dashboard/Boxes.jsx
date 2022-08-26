import { Box,Stack,Text,Badge,Tooltip , Image, Container, border, Input, IconButton,Button, Divider } from '@chakra-ui/react'
import { ChevronDownIcon,StarIcon, LockIcon,SearchIcon} from "@chakra-ui/icons"
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'



function BoxesFun() { 
    const property = {
      imageUrl: 'https://n.nordstrommedia.com/id/79539c30-c965-4049-81fc-152dff9faf4e.jpeg?h=516&w=536',
      imageAlt: '',
      title: 'Nordstrom x Nike Fall ${22}',
      Desc: 'Class is back and the Nike and Jordan drops are hot.',
     
    }
    const property2 = {
        imageUrl: 'https://n.nordstrommedia.com/id/b0bc5c8b-9978-45c4-8ed7-7cf8a8a1516c.jpeg?h=516&w=536',
        imageAlt: '',
        title: 'We The Free by Free People: New Arrivals',
        Desc: 'Signature silhouettes, easy fits and lived-in staples...',
        
      }
  
      const property3 = {
        imageUrl: 'https://n.nordstrommedia.com/id/2c0aec65-3ac9-4471-9904-1f1ba615249d.jpeg?h=516&w=536',
        imageAlt: '',
        title: 'Sustainable Style',
        Desc: 'Get to know Allbirds, an industry leader making sustais.',
       
      }
    return (
      <Box justifyContent={"space-evenly"} display={"flex"} gap={"5"} width="95%" margin={"auto"} marginTop="50px">
        <Box maxW='m' borderRadius='lg' overflow='hidden'>
        <Image height={"80%"} src={property.imageUrl} alt={property.imageAlt} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='bold'
            as='h1'
            lineHeight=''
            noOfLines={1}
            fontSize="2xl"
            display={"flex"}
          >
            {property.title}
          </Box>
  
          <Box display={"flex"}>
            
           
            {property.Desc}
            
          </Box>
  
         <Box display={"flex"}>
          <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
            <Text fontSize={"xl"}> <Link href='https://www.nordstrom.com/browse/x-nike/women?campaign=0822nxnhp&jid=-_-012813-19680&cm_sp=merch-_-olivia_kim_19680_-_-012813-_-hp_0_0_0&'> Shop NxN</Link></Text>
          </Tooltip>
         </Box>
        </Box>
      </Box>



      <Box maxW='m'  borderRadius='lg' overflow='hidden'>
        <Image height={"80%"} src={property2.imageUrl} alt={property2.imageAlt} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
        
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              
            </Box>
          </Box>
  
          <Box
             mt='1'
             fontWeight='bold'
             as='h1'
             lineHeight=''
             noOfLines={1}
             fontSize="2xl"
             display={"flex"}
          >
            {property2.title}
          </Box>
  
          <Box display={"flex"}>
            {property2.Desc}
        
          </Box>
  
        </Box>
      </Box>





      <Box maxW='m' borderRadius='lg' overflow='hidden'>
        <Image height={"80%"} src={property3.imageUrl} alt={property3.imageAlt} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
    
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
           
            </Box>
          </Box>
  
          <Box
             mt='1'
             fontWeight='bold'
             as='h1'
             lineHeight=''
             noOfLines={1}
             fontSize="2xl"
             display={"flex"}
          >
            {property3.title}
          </Box>
  
          <Box display={"flex"}>
            {property3.Desc}
            
          </Box>
  
         
        </Box>
      </Box>
      </Box>
    )
  }
  export default BoxesFun