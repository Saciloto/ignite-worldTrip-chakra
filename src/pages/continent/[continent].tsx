import { Avatar, Box, Center, Container, Flex, Heading, Image, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { GetServerSideProps } from "next"

interface ContinentProps {
    continent: string
}

const Continent = ({ continent }: ContinentProps) => {
    console.log('props', continent)
    return (
        <Container maxW='container.xl' align='center' justify='center'>
            <Header />
            <Flex
                direction='column'
                minH={'500px'}
                align='center'
                justify='center'
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(https://images.unsplash.com/photo-1560394638-7b2346507d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}
            >
                <Flex w='80%' maxWidth='1160px' height='400px' align='flex-end' justify='flex-start'>
                    <Heading
                        fontSize='4xl'
                        color={'white'}
                        textTransform={'capitalize'}
                    >
                        {continent}
                    </Heading>
                </Flex>
            </Flex>
            <Box maxWidth='1160px'>
                <SimpleGrid columns={2} gap='8' px='8' py='10' >
                    <Text textAlign={'justify'}>
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Text>
                    <Flex justify='space-around'>
                        <Box>
                            <Text
                                color='#FFBA08'
                                fontWeight='bold'
                                fontSize='48px'
                                margin='0'>
                                50
                            </Text>
                            <Text
                                fontWeight='bold'
                                margin='0'>
                                países
                            </Text>
                        </Box>
                        <Box>
                            <Text
                                color='#FFBA08'
                                fontWeight='bold'
                                fontSize='48px'
                                margin='0'>
                                60
                            </Text>
                            <Text
                                fontWeight='bold'
                                margin='0'>
                                línguas
                            </Text>
                        </Box>
                        <Box>
                            <Text
                                color='#FFBA08'
                                fontWeight='bold'
                                fontSize='48px'
                                margin='0'>
                                27
                            </Text>
                            <Text
                                fontWeight='bold'
                                margin='0'>
                                cidades +100
                            </Text>
                        </Box>
                    </Flex>
                </SimpleGrid>
                <Heading as='h2' textAlign='left' py='5'>
                    Cidades +100
                </Heading>
                <SimpleGrid columns={4} gap='8'>

                </SimpleGrid>
            </Box>
        </Container>
    )
}

const cities = [
    {
        continent: 'europe',
        image: 'https://images.unsplash.com/photo-1560394638-7b2346507d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name: 'Londres',
        country: 'Reino Unido',
        id: 'uk'
    },{
        continent: 'europe',
        image: 'https://images.unsplash.com/photo-1560394638-7b2346507d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name: 'Paris',
        country: 'França',
        id: 'fr'
    },{
        continent: 'europe',
        image: 'https://images.unsplash.com/photo-1560394638-7b2346507d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name: 'Roma',
        country: 'Itália',
        id: 'it'
    },{
        continent: 'europe',
        image: 'https://images.unsplash.com/photo-1560394638-7b2346507d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name: 'Praga',
        country: 'República Tcheca',
        id: 'cz'
    },{
        continent: 'europe',
        image: 'https://images.unsplash.com/photo-1560394638-7b2346507d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        name: 'Holanda',
        country: 'Amsterdã',
        id: 'nl'
    },
    
]


const bannerImages = [
    {
        continent: 'europe',
        link: 'https://images.unsplash.com/photo-1560394638-7b2346507d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        continent: 'southAmerica',
        link: 'https://images.unsplash.com/photo-1560394638-7b2346507d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        continent: 'northAmerica',
        link: 'https://images.unsplash.com/photo-1560394638-7b2346507d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        continent: 'asia',
        link: 'https://images.unsplash.com/photo-1560394638-7b2346507d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        continent: 'oceania',
        link: 'https://images.unsplash.com/photo-1560394638-7b2346507d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
        continent: 'africa',
        link: 'https://images.unsplash.com/photo-1560394638-7b2346507d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
]

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    console.log(query.continent)
    return {
        props: {
            continent: query.continent
        }
    }
}


export default Continent