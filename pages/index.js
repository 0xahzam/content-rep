import Head from 'next/head'
import { Flex, Text, Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className='main'>
      <Flex justifyContent={"center"}>
        <Flex marginRight={"25px"} marginTop={"144px"} flexDir={"column"} gap={"48px"}>

        <Flex border = {"1px solid #909175"}  width={"385px"} height={"130px"} rounded={"7px"} alignItems={"center"}>
        <Image src="elon.jpg" alt='Elon Musk' width={"124px"} objectFit={"cover"} height={"124px"} paddingLeft={"3px"} roundedTopLeft={"5px"} roundedBottomLeft={"5px"} />
        <Flex flexDirection={"column"} paddingLeft={"14px"}>
          <Text fontWeight={"700"} fontStyle={"italic"} fontSize={"24px"} color={"#46472A"}>Elon Musk</Text>
          <Text background={"#FFFFD5"} fontWeight={"500"} fontFamily={"Roboto Mono, monospace"} paddingLeft={"10px"} paddingRight={"10px"}>biz & engg pro</Text>
        </Flex>
        </Flex>

        <Flex border = {"1px solid #909175"}  width={"385px"} height={"130px"} rounded={"7px"} alignItems={"center"}>
        <Image src="lex.jpg" alt="Lex Fridman" width={"124px"} objectFit={"cover"} height={"124px"} paddingLeft={"3px"} roundedTopLeft={"5px"} roundedBottomLeft={"5px"} />
        <Flex flexDirection={"column"} paddingLeft={"14px"}>
          <Text fontWeight={"700"} fontStyle={"italic"} fontSize={"24px"} color={"#46472A"}>Lex Fridman</Text>
          <Text background={"#FFFFD5"} fontWeight={"500"} paddingLeft={"10px"} paddingRight={"10px"} fontFamily={"Roboto Mono, monospace"}>Definitely an ai robot</Text>
        </Flex>
        </Flex>
        
        <Flex border = {"1px solid #909175"}  width={"385px"} height={"130px"} rounded={"7px"} alignItems={"center"}>
        <Image src='aaron.jpg' alt='Aaron Swartz' objectFit={"cover"} width={"124px"} height={"124px"} paddingLeft={"3px"} roundedTopLeft={"5px"} roundedBottomLeft={"5px"} />
        <Flex flexDirection={"column"} paddingLeft={"14px"}>
          <Text fontWeight={"700"} fontStyle={"italic"} fontSize={"24px"} color={"#46472A"}>Aaron Swartz</Text>
          <Text background={"#FFFFD5"} fontWeight={"500"} paddingLeft={"10px"} paddingRight={"10px"} fontFamily={"Roboto Mono, monospace"}>Internet's Own Boy</Text>
        </Flex>
        </Flex>

        </Flex>
        <Flex marginLeft={"25px"} marginTop={"144px"} flexDir={"column"} gap={"48px"}>

        <Flex border = {"1px solid #909175"}  width={"385px"} height={"130px"} rounded={"7px"} alignItems={"center"}>
        <Image src="graham.jpg" alt='Paul Graham' width={"124px"} objectFit={"cover"} height={"124px"} paddingLeft={"3px"} roundedTopLeft={"5px"} roundedBottomLeft={"5px"} />
        <Flex flexDirection={"column"} paddingLeft={"14px"}>
          <Text fontWeight={"700"} fontStyle={"italic"} fontSize={"24px"} color={"#46472A"}>Paul Graham</Text>
          <Text background={"#FFFFD5"} fontWeight={"500"} fontFamily={"Roboto Mono, monospace"} paddingLeft={"10px"} paddingRight={"10px"}>Essayist Pro Max</Text>
        </Flex>
        </Flex>

        <Flex border = {"1px solid #909175"}  width={"385px"} height={"130px"} rounded={"7px"} alignItems={"center"}>
        <Image src="Balaji.jpg" alt="Balaji Srinivasan" width={"124px"} objectFit={"cover"} height={"124px"} paddingLeft={"3px"} roundedTopLeft={"5px"} roundedBottomLeft={"5px"} />
        <Flex flexDirection={"column"} paddingLeft={"14px"}>
          <Text fontWeight={"700"} fontStyle={"italic"} fontSize={"24px"} color={"#46472A"}>Balaji Srinivasan</Text>
          <Text background={"#FFFFD5"} fontWeight={"500"} paddingLeft={"10px"} paddingRight={"10px"} fontFamily={"Roboto Mono, monospace"}>tech brdr silicon silli</Text>
        </Flex>
        </Flex>
        
        <Flex border = {"1px solid #909175"}  width={"385px"} height={"130px"} rounded={"7px"} alignItems={"center"}>
        <Image src='naval.jpg' alt='Naval' objectFit={"cover"} width={"124px"} height={"124px"} paddingLeft={"3px"} roundedTopLeft={"5px"} roundedBottomLeft={"5px"} />
        <Flex flexDirection={"column"} paddingLeft={"14px"}>
          <Text fontWeight={"700"} fontStyle={"italic"} fontSize={"24px"} color={"#46472A"}>Naval Ravikant</Text>
          <Text background={"#FFFFD5"} fontWeight={"500"} paddingLeft={"10px"} paddingRight={"10px"} fontFamily={"Roboto Mono, monospace"}>The Philosopher</Text>
        </Flex>
        </Flex>

        </Flex>
      </Flex>

    </div>
  )
}
