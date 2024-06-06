import {   Box, Button, Flex,  FormLabel,  Heading, Text, Textarea, } from "@chakra-ui/react"

const ContactPage = () => {
  return (
    <Flex p={{ base: 5, md: 8, lg: 12 }} mt={{ base: 20 }} direction="column" align="center" justify="center">
    <Heading id="contact-form" pb={5} color='#e22ac0'>When do you want me to do a very first lecture?</Heading>
    <Text pb={5} color='#e612bf'>Give me a date</Text>
    <Box as="form" w={{ base: '280px', sm: '400px', md: '500px', lg: '750px' }} name="contactCloey" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contactCloey" />
        <Box mb="3">
            <FormLabel color='#e612bf'>Your suggestions</FormLabel>
            <Textarea id="message" name="message" focusBorderColor="green.500" isRequired={true} />
        </Box>
        <Flex justify="center">
            <Button type="submit" bg='#e612bf' _hover={{ bg: '#df89cf' }} style={{ width: '100%', color: '#f7fafc' }}>Send</Button>
        </Flex>
    </Box>
</Flex>
  )
}

export default ContactPage