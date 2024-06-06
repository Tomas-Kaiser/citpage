import { VStack, Text} from "@chakra-ui/react"

const Footer = () => {
    const date = new Date();


    return (
        <VStack justifyContent="center" mt={10} p={3} bg="#F7FAFC" h="14vh">
            <Text color="#176734" mb={3}>&copy; {date.getFullYear()} Created by Tomas for Cloey!</Text>
        </VStack>
    )
}

export default Footer