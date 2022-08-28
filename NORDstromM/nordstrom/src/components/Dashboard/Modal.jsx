
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box

  } from '@chakra-ui/react'
  import React  from 'react'
  import {Link} from "react-router-dom"
  
function ModalFun() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button bg={"white"} borderRadius="0" border="1px solid black" padding={"25px 25px 25px 25px"} marginTop={"30px"} onClick={onOpen}>Sign in or Create an Account</Button>
        
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={"3xl"}>Sign In</ModalHeader>
             <Box display={"flex"} marginLeft="27px" > <p>New to Nordstrom? <Link to={"/signup"}> CREATE AN ACCOUNT</Link>.</p></Box>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input ref={initialRef} placeholder='First name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Last name' />
                <p>Forget Password?</p>
              </FormControl>

              <FormControl mt={4}>
               <p>By signing in to your account, you agree to our Privacy Policy and Terms & Conditions.</p>
              </FormControl>
               
            </ModalBody>
  
            <ModalFooter>
              <Button bg={"black"} color="white" mr={3} width="95%">
                Sign In
              </Button>

            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalFun