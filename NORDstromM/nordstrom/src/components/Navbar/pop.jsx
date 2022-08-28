import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,useDisclosure
  } from '@chakra-ui/react'
  import { ChevronDownIcon, LockIcon,SearchIcon} from "@chakra-ui/icons"
  import AvatarFun from './Avatar'
function PopFun(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <Popover isOpen={isOpen}>
        <PopoverTrigger>
          <Button onMouseEnter={onOpen} onMouseLeave={onClose}>  <LockIcon   w={8} h={8}/></Button>
        </PopoverTrigger>
        <PopoverContent onMouseEnter={onOpen} onMouseLeave={onClose}>
          <PopoverArrow />
          {/* <PopoverCloseButton /> */}
          <PopoverHeader>Sign in to see what you may have added before.</PopoverHeader>
          <PopoverBody>Accepted Payment Methods</PopoverBody>
          <PopoverBody> 
            <AvatarFun/>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    )
}
export default PopFun