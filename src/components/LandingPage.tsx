import { Center, VStack, Text, Button, Heading } from "@chakra-ui/react"

// import logo from "../assets/logo.webp"
import "../index.css"
import { FaArrowDown } from "react-icons/fa";

const LandingPage = () => {

    return (
        <>
     {/* bg='linear-gradient(#F7FAFC 80%, #fff 100%)' */}
            <Center h='100vh' className="section-bg">
                <VStack pb='10px' >
                    <VStack spacing={0} style={{ fontFamily: 'Ivar Text' }}>
                        <Heading as='h1' color='#176734' fontSize={{ base: '2.6rem', md: '4.6rem' }} letterSpacing={{ base: '4px', md: '7px' }}>Cloey</Heading>
                        <Text align='center' color='#176734' fontSize={{ base: '1.2rem', md: '1.6rem' }} letterSpacing={{ base: '1.5px', md: '2px' }}>For special girl who wants to learn IT stuff from a cool IT guy!</Text>
                        <Button as='a' href='#contact-form' color='#176734' borderColor='#176734' size='lg' variant='outline' mt={45} _hover={{ shadow: '1px 1px gray' }} leftIcon={<FaArrowDown />} rightIcon={<FaArrowDown />}>Scroll Down</Button>
                    </VStack>
                </VStack>
            </Center >
        </>
    )
}

export default LandingPage