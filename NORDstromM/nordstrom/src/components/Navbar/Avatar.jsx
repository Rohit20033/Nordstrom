import { Avatar, AvatarBadge, AvatarGroup,WrapItem,Wrap } from '@chakra-ui/react'
function AvatarFun(){
    return(
        <Wrap>
  <WrapItem>
    <Avatar size='sm' name='Dan Abrahmov' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAVD6fjtzNsXfew6NOE2p6STGxpsjUCS1_euiYMJgoMnmgktEY1W5mFKN_Kr_B_pORwA&usqp=CAU' />
  </WrapItem>
  <WrapItem>
    <Avatar size='sm' name='Kola Tioluwani' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/2560px-JCB_logo.svg.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='sm' name='Kent Dodds' src='https://www.investopedia.com/thmb/LF_8TWZPQxdvn6y0DG-bNIZT5Co=/1000x714/filters:fill(auto,1)/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg' />
  </WrapItem>
  <WrapItem>
    <Avatar size='sm' name='Ryan Florence' src='https://i.pcmag.com/imagery/reviews/02RJy7OTtPnQQjh37yQDNqx-15..v1598973550.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='sm' name='Prosper Otemuyiwa' src='https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='sm' name='Christian Nwamba' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='sm' name='Segun Adebayo' src='data:image/png;base64,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' />
  </WrapItem>
</Wrap>
    )
}

export default AvatarFun