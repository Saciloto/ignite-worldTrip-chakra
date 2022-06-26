import { Avatar, Box, Flex, Image, Stack, Text } from "@chakra-ui/react"

export const CardForCities = () => {
    return (
        <Box
            maxW={'256px'}
            w={'full'}
            boxShadow={'2xl'}
            border={'1px'}
            borderColor={'yellow'}
        >
            <Image
                src={
                    'https://www.britishcouncil.org.br/sites/default/files/a-girl-standing-by-a-golden-letter-box-in-front-of-westminster-abbey-with-a-red-bus-behind.jpg'
                }
                objectFit={'cover'}
                alt='cardphoto'
                w='full'
                maxHeight={'153px'}
            />
            <Flex py='4' align={'center'} justify={'space-around'}>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontSize={'md'} fontWeight={600}>Londres</Text>
                    <Text fontSize={'xs'} color={'gray.500'}>Reino Unido</Text>
                </Stack>
                <Avatar size='sm' name='Dan Abrahmov' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/1200px-Flag_of_the_United_Kingdom_%282-3%29.svg.png' />
            </Flex>
        </Box>
    )
}