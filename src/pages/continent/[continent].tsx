import { Avatar, Box, Center, Container, Flex, Heading, Image, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { GetServerSideProps } from "next"
import { CardForCities } from "../../components/cardForCities"
import { continents } from "../../utils/continents"
import { useState } from "react"
import { cities } from "../../utils/cities"
interface ContinentProps {
    continent: string
}

const Continent = ({ continent }: ContinentProps) => {
    const [selectedCountinent, setSelectedCountinent] = useState(continents.find(cont => cont.continent === continent))

    return (
        <Container maxW='container.xl' align='center' justify='center' pb='8'>
            <Header />
            <Flex
                direction='column'
                minH={'500px'}
                align='center'
                justify='center'
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${selectedCountinent?.banner})`}
            >
                <Flex w='80%' maxWidth='1160px' height='400px' align='flex-end' justify='flex-start'>
                    <Heading
                        fontSize='4xl'
                        color={'white'}
                        textTransform={'capitalize'}
                    >
                        {selectedCountinent?.name}
                    </Heading>
                </Flex>
            </Flex>
            <Box maxWidth='1160px'>
                <SimpleGrid columns={2} gap='8' px='8' py='10' >
                    <Text textAlign={'justify'}>
                        {selectedCountinent?.abstract}
                    </Text>
                    <Flex justify='space-around'>
                        <Box>
                            <Text
                                color='#FFBA08'
                                fontWeight='bold'
                                fontSize='48px'
                                margin='0'>
                                {selectedCountinent?.countries}
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
                                {selectedCountinent?.languages}
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
                                {selectedCountinent?.cities}
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
                    {cities.filter(item => item.continent === continent).map((city, index) => {
                        return (
                            <CardForCities
                                key={index}
                                country={city.country}
                                flag={city.id}
                                image={city.image}
                                name={city.name}
                            />
                        )
                    })}
                </SimpleGrid>
            </Box>
        </Container>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    console.log(query.continent)
    return {
        props: {
            continent: query.continent
        }
    }
}


export default Continent