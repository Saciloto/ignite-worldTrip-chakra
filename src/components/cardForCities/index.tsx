import { Avatar, Box, Flex, Image, Stack, Text } from "@chakra-ui/react"

type CardForCitiesProps = {
    image: string
    name: string
    country: string
    flag: string
}

export const CardForCities = ({ country, flag, image, name }: CardForCitiesProps) => {
    return (
        <Box
            maxW={'256px'}
            w={'full'}
            boxShadow={'2xl'}
            border={'1px'}
            borderColor={'yellow'}
        >
            <Image
                src={image}
                objectFit={'cover'}
                alt='cardphoto'
                w='full'
                maxHeight={'153px'}
            />
            <Flex py='4' align={'center'} justify={'space-around'}>
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontSize={'md'} fontWeight={600}>{name}</Text>
                    <Text fontSize={'xs'} color={'gray.500'}>{country}</Text>
                </Stack>
                <Avatar size='sm' name='Dan Abrahmov' src={`https://flagcdn.com/48x36/${flag}.png`} />
            </Flex>
        </Box>
    )
}