import { Box, Button, Flex, FormLabel, Heading, Text, Textarea } from "@chakra-ui/react"

const ContactPage = () => {
  return (
    <Flex p={{ base: 5, md: 8, lg: 12 }} mt={{ base: 20 }} direction="column" align="center" justify="center">
    <Heading id="contact-form" pb={5} color='#176734'>When do you want me to do a very first lecture?</Heading>
    <Text pb={12} color='#176734'>Give me a date</Text>
    <Box as="form" w={{ base: '280px', sm: '400px', md: '500px', lg: '750px' }} name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <Box mb="3">
            <FormLabel color='#176734'>Your suggestions</FormLabel>
            <Textarea id="message" name="message" focusBorderColor="green.500" isRequired={true} />
        </Box>
        <Flex justify="center">
            <Button type="submit" bg='#176734' _hover={{ bg: '#1e9c4b' }} style={{ width: '100%', color: '#f7fafc' }}>Send</Button>
        </Flex>
    </Box>
</Flex>
  )
}

export default ContactPage