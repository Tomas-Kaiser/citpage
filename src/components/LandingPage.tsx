import { Center, VStack, Text, Button, Heading, Image, Box } from "@chakra-ui/react"

// import logo from "../assets/logo.webp"
import "../index.css"
import dog from "../assets/bg.jpg"
import { FaArrowDown } from "react-icons/fa";

const LandingPage = () => {

    return (
        <>
        {/* className="section-bg" */}
            <Center mb={10} h="100%">
                    <Box w='1000px'>
                        <Image src={dog} alt="logo"  w='100%'/> 
                    </Box>
            </Center>
            <Center>
                <VStack pb='40vh' >
                    <VStack spacing={0} style={{ fontFamily: 'Ivar Text' }}>
                        <Heading as='h1' color='#e22ac0' mb={5} fontSize={{ base: '2.6rem', md: '4.6rem' }} letterSpacing={{ base: '4px', md: '7px' }}>Cloey</Heading>
                        <Text align='center' color='#e612bf' fontSize={{ base: '1.2rem', md: '1.6rem' }} letterSpacing={{ base: '1.5px', md: '2px' }}>For a special girl who wants to learn IT stuff from a cool IT guy!</Text>
                        <Button as='a' href='#contact-form' color='#e612bf' borderColor='#e612bf' size='lg' variant='outline' mt={45} _hover={{ shadow: '1px 1px gray' }} leftIcon={<FaArrowDown />} rightIcon={<FaArrowDown />}>Scroll Down</Button>
                    </VStack>
                </VStack>
            </Center >
        </>
    )
}

export default LandingPage