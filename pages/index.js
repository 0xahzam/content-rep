import Head from 'next/head'
import { Flex, Text, Image, Link } from '@chakra-ui/react'
import NextLink from "next/link"

export default function Home() {
  return (
    <div className='main'>
      <Flex  justifyContent={"center"}>
      <Flex flexDirection={{base:"column",md:"row"}}>
        <Flex marginRight={{base:"0px",md:"25px"}} marginTop={"114px"} flexDir={"column"} gap={"48px"}>

        <NextLink href='/elon'>
        <Link _hover={{textdecor : "None"}}>
        <Flex border = {"1px solid #909175"}  width={"385px"} height={"130px"} rounded={"7px"} alignItems={"center"}  _hover={{background:"#FFFFDD", cursor:"pointer"}}>
        <Image src="elon.jpg" alt='Elon Musk' width={"124px"} objectFit={"cover"} height={"124px"} paddingLeft={"3px"} roundedTopLeft={"5px"} roundedBottomLeft={"5px"} />
        <Flex flexDirection={"column"} paddingLeft={"14px"}>
          <Text fontWeight={"700"} fontStyle={"italic"} fontSize={"24px"} color={"#46472A"}>Elon Musk</Text>
          <Text background={"#FFFFD5"} fontWeight={"500"} fontFamily={"Roboto Mono, monospace"} paddingLeft={"10px"} paddingRight={"10px"}>biz & engg pro</Text>
        </Flex>

        </Flex>
        </Link>
        </NextLink>

        <NextLink href="/">
        <Link _hover={{textdecor : "None"}}>
        <Flex border = {"1px solid #909175"}  width={"385px"} height={"130px"} rounded={"7px"} alignItems={"center"}  _hover={{background:"#FFFFDD", cursor:"pointer"}}>
        <Image src="lex.jpg" alt="Lex Fridman" width={"124px"} objectFit={"cover"} height={"124px"} paddingLeft={"3px"} roundedTopLeft={"5px"} roundedBottomLeft={"5px"} />
        <Flex flexDirection={"column"} paddingLeft={"14px"}>
          <Text fontWeight={"700"} fontStyle={"italic"} fontSize={"24px"} color={"#46472A"}>Lex Fridman</Text>
          <Text background={"#FFFFD5"} fontWeight={"500"} paddingLeft={"10px"} paddingRight={"10px"} fontFamily={"Roboto Mono, monospace"}>Definitely an ai robot</Text>
        </Flex>
        </Flex>
        </Link>
        </NextLink>

        <NextLink href="/">
        <Link _hover={{textdecor : "None"}}>
        <Flex border = {"1px solid #909175"}  width={"385px"} height={"130px"} rounded={"7px"} alignItems={"center"}  _hover={{background:"#FFFFDD", cursor:"pointer"}}>
        <Image src='aaron.jpg' alt='Aaron Swartz' objectFit={"cover"} width={"124px"} height={"124px"} paddingLeft={"3px"} roundedTopLeft={"5px"} roundedBottomLeft={"5px"} />
        <Flex flexDirection={"column"} paddingLeft={"14px"}>
          <Text fontWeight={"700"} fontStyle={"italic"} fontSize={"24px"} color={"#46472A"}>Aaron Swartz</Text>
          <Text background={"#FFFFD5"} fontWeight={"500"} paddingLeft={"10px"} paddingRight={"10px"} fontFamily={"Roboto Mono, monospace"}>Internet's Own Boy</Text>
        </Flex>
        </Flex>  
        </Link>
        </NextLink>

        </Flex>

        <Flex marginLeft={{base:"0px",md:"25px"}} marginTop={{base:"48px",md:"114px"}} flexDir={"column"} gap={"48px"}>

        <NextLink href="">
        <Link _hover={{textdecor : "None"}}>
        <Flex border = {"1px solid #909175"}  width={"385px"} height={"130px"} rounded={"7px"} alignItems={"center"}  _hover={{background:"#FFFFDD", cursor:"pointer"}}>
        <Image src="sama.jpg" alt='Sam Altman' width={"124px"} objectFit={"cover"} height={"124px"} paddingLeft={"3px"} roundedTopLeft={"5px"} roundedBottomLeft={"5px"} />
        <Flex flexDirection={"column"} paddingLeft={"14px"}>
          <Text fontWeight={"700"} fontStyle={"italic"} fontSize={"24px"} color={"#46472A"}>Sam Altman</Text>
          <Text background={"#FFFFD5"} fontWeight={"500"} fontFamily={"Roboto Mono, monospace"} paddingLeft={"10px"} paddingRight={"10px"}>@openai</Text>
        </Flex>
        </Flex>  
        </Link>
        </NextLink>

        <NextLink href="">
        <Link _hover={{textdecor : "None"}}>
        <Flex border = {"1px solid #909175"}  width={"385px"} height={"130px"} rounded={"7px"} alignItems={"center"}  _hover={{background:"#FFFFDD", cursor:"pointer"}}>
        <Image src="vitalik.jpg" alt="Vitalik Buterin" width={"124px"} objectFit={"cover"} height={"124px"} paddingLeft={"3px"} roundedTopLeft={"5px"} roundedBottomLeft={"5px"} />
        <Flex flexDirection={"column"} paddingLeft={"14px"}>
          <Text fontWeight={"700"} fontStyle={"italic"} fontSize={"24px"} color={"#46472A"}>Vitalik Buterin</Text>
          <Text background={"#FFFFD5"} fontWeight={"500"} paddingLeft={"10px"} paddingRight={"10px"} fontFamily={"Roboto Mono, monospace"}>silicon silli</Text>
        </Flex>
        </Flex> 
        </Link>
        </NextLink>

        <NextLink href="">
        <Link _hover={{textdecor : "None"}}>
        <Flex border = {"1px solid #909175"}  width={"385px"} height={"130px"} rounded={"7px"} alignItems={"center"}  _hover={{background:"#FFFFDD", cursor:"pointer"}}>
        <Image src='naval.jpg' alt='Naval' objectFit={"cover"} width={"124px"} height={"124px"} paddingLeft={"3px"} roundedTopLeft={"5px"} roundedBottomLeft={"5px"} />
        <Flex flexDirection={"column"} paddingLeft={"14px"}>
          <Text fontWeight={"700"} fontStyle={"italic"} fontSize={"24px"} color={"#46472A"}>Naval Ravikant</Text>
          <Text background={"#FFFFD5"} fontWeight={"500"} paddingLeft={"10px"} paddingRight={"10px"} fontFamily={"Roboto Mono, monospace"}>The Philosopher</Text>
        </Flex>
        </Flex>  
        </Link>
        </NextLink>




        


        </Flex>
      </Flex>
      </Flex>

      <Flex justifyContent={"center"}>
      <Flex paddingTop={"130px"}>
      <Text textAlign={"center"} fontSize={"16px"} fontWeight={"400"} textColor={"#46472A"}>made with ???? by <a style={{textDecoration:"0.7px underline"}}>ahzam</a> & <a style={{textDecoration:"0.7px underline"}}>anoushka</a></Text>
      </Flex>
      </Flex>

    </div>
  )
}
