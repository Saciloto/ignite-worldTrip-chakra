import { Center, Container, Divider, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { IconsWithText } from '../components/IconsWithText'
import { Slides } from '../components/Slides'

const Home: NextPage = () => {
  return (
    <Container align='center' justify='center' pb='20'>
      <Head>
        <title>WorldTrip</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w='full' justify='center' align='center' py='10'>
        <Image src='/images/Logo.svg' alt='Logo' />
      </Flex>
      <Image src='/images/Banner.svg' alt='banner' w='98vw' />
      <Flex w='full' justify='center' align='center'>
        <HStack spacing='130px'>
          <IconsWithText description='vida noturna' iconName='Vector' />
          <IconsWithText description='praia' iconName='surf 1' />
          <IconsWithText description='moderno' iconName='building 1' />
          <IconsWithText description='clássico' iconName='museum 1' />
          <IconsWithText description='e mais' iconName='earth 1' />
        </HStack>
      </Flex>
      <Divider color='#000' orientation='horizontal' />
      <Center>
        <Heading textAlign={'center'}>
          Vamos nessa?
          <Text>Então escolha seu continente</Text>
        </Heading>
      </Center>
      <Slides/>
    </Container>
  )
}

export default Home
