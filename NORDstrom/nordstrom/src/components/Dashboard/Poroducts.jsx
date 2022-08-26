import { Box,Stack,Text,Badge,Tooltip , Image, Container, border, Input, IconButton,Button, Divider } from '@chakra-ui/react'
import { ChevronDownIcon,StarIcon, LockIcon,SearchIcon} from "@chakra-ui/icons"
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'



function Products() { 
    const property = {
      imageUrl: 'https://n.nordstrommedia.com/id/sr3/c21e64cb-3b32-46ae-84bf-7fe632b66a83.jpeg?q=45&dpr=2&h=365.31&w=230',
      imageAlt: '',
    title: 'NATORI',
    formattedPrice: 'INR 4,008.06 – INR 6,062.62',
    discount:'(Up to 33% off select items)',
    prevPrice:'INR 5,725.80 – INR 6,062.62',

    reviewCount: (3482),
    rating: 4,
     
    }
    const property2 = {
        imageUrl: 'https://n.nordstrommedia.com/id/sr3/4770621a-812d-45cf-9cd0-944245602c33.jpeg?q=45&dpr=2&h=365.31&w=230',
        imageAlt: '',
        
        title: 'ZELLA',
        formattedPrice: 'INR 3,275.50',
        discount:'',
        prevPrice:'INR 5,473.20',
        reviewCount: 94,
        rating: 4,
        
      }
  
      const property3 = {
        imageUrl: 'https://n.nordstrommedia.com/id/sr3/e5fcbabb-73a5-483e-af20-1ad605e9e3fe.jpeg?q=45&dpr=2&h=365.31&w=230',
        imageAlt: '',
        
        title: 'NATORI',
        formattedPrice: 'INR 4,009.07 – INR 6,154.65',
       
        discount:'(Up to 34% off select items)',
        prevPrice:'INR 6,154.65 ',
        reviewCount: 104,
        rating: 4.9,
       
      }
      const property4 = {
        imageUrl: 'https://n.nordstrommedia.com/id/sr3/7cb5a20e-393c-443d-b4fe-caa72930462d.jpeg?q=45&dpr=2&h=365.31&w=230',
        imageAlt: '',
        title: 'NATORI',
        formattedPrice: 'INR 4,125.95 – INR 5,894.21',
        discount:'(Up to 30% off select items)',
        prevPrice:'INR 5,894.21   ',
        reviewCount: 200,
        rating: 4.5,
       
      }
      const property5 = {
        imageUrl: 'https://n.nordstrommedia.com/id/sr3/9b332e41-ca19-46f6-b1f6-9a552f83ad39.jpeg?q=45&dpr=2&h=365.31&w=230',
        imageAlt: '',
        title: 'NATORI',
        formattedPrice: 'INR 4,547.61 – INR 6,667.54',
        discount:'(Up to 30% off select items)',
        prevPrice:'INR 6,667.54  ',
        reviewCount: 333,
        rating: 4,
      }
    return (
      <Box justifyContent={"space-evenly"} display={"flex"} gap={"5"} width="95%" margin={"auto"} marginTop="50px">
         <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2'>
            New!
          </Badge>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
          display={"flex"}
        >
          {property.title}
        </Box>

        <Box fontWeight={"bold"} color='red' display={"flex"}>
          {property.formattedPrice}
        </Box>

        <Box  color={"red"} display={"flex"}  fontSize='sm'>
            {property.discount}
        </Box>
           
        <Box display={"flex"}  textDecoration={"line-through"} fontSize='sm'>
            {property.prevPrice}
        </Box>
        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'black' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>





    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property2.imageUrl} alt={property2.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2'>
            New!
          </Badge>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
          display={"flex"}
        >
          {property2.title}
        </Box>

        <Box  display={"flex"} color={"red"} fontWeight="Bold">
          {property2.formattedPrice}
        </Box>

        <Box  display={"flex"}  color={"red"}  fontSize='sm'>
            {property2.discount}
        </Box>
           
        <Box display={"flex"}  textDecoration={"line-through"} fontSize='sm'>
            {property2.prevPrice}
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property2.rating ? 'black' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property2.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>


    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property3.imageUrl} alt={property3.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' >
            New!
          </Badge>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
          display={"flex"}
        >
          {property3.title}
        </Box>

        <Box display={"flex"} color="red" fontWeight={"bold"}>
          {property3.formattedPrice}
         
        </Box>

        <Box  color={"red"} display={"flex"}  fontSize='sm'>
            {property3.discount}
        </Box>
           
        <Box display={"flex"}  textDecoration={"line-through"} fontSize='sm'>
            {property3.prevPrice}
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property3.rating ? 'black' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property3.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>


    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property4.imageUrl} alt={property4.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' >
            New!
          </Badge>
          
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
          display='flex'
        >
          {property4.title}
        </Box>

        <Box display='flex' color={"red"} fontWeight="bold">
          {property4.formattedPrice}
        </Box>

        <Box  color={"red"} display={"flex"}  fontSize='sm'>
            {property4.discount}
        </Box>
           
        <Box display={"flex"}  textDecoration={"line-through"} fontSize='sm'>
            {property4.prevPrice}
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property4.rating ? 'black' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property4.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
        

    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property5.imageUrl} alt={property5.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2'>
            New!
          </Badge>
         
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
          display="flex"
        >
          {property5.title}
        </Box>

        <Box display={"flex"} color="red" fontWeight={"bold"}>
          {property5.formattedPrice}
    
        </Box>
         

        <Box  color={"red"} display={"flex"}  fontSize='sm'>
            {property5.discount}
        </Box>
           
        <Box display={"flex"}  textDecoration={"line-through"} fontSize='sm'>
            {property5.prevPrice}
        </Box>
        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'black' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
      </Box>
    )
  }
  export default Products