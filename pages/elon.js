import { Flex, Text } from "@chakra-ui/react"
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

const elon = () => {
  return (
    <div className="main">
      <Flex justifyContent={"center"}>
        <Flex width={{base:"302px",md:"562px"}}  paddingTop={"114px"} flexDirection={"column"} gap={"45px"}>
        <Flex flexDir={"column"}>        
        <Text fontWeight={"700"} fontStyle={"italic"} fontSize={"24px"} color={"#46472A"}>Elon Musk</Text>
        <Flex marginTop={"24px"} background={"#FFFFDD"} rounded={"7px"} height={"159px"}></Flex>        
        </Flex>  
        <Flex flexDirection={"column"}>
        <Text fontWeight={"700"} fontStyle={"italic"} fontSize={"24px"} color={"#46472A"}>Content</Text>
        <UnorderedList spacing={3} paddingLeft={"21px"} paddingTop={"23px"}>
          <ListItem>
            absj.xyz
          </ListItem>
          <ListItem>
            absj.xyz
          </ListItem>
          <ListItem>
            absj.xyz
          </ListItem>
          <ListItem>
            absj.xyz
          </ListItem>
        </UnorderedList>
        </Flex>

        </Flex> 
      </Flex>
    </div>
  )
}

export default elon