import { Flex, Image } from "@chakra-ui/react"

export const Header = () => {
    return (
        <Flex as='header' w='full' justify='center' align='center' py='4'>
            <Image src='/images/Logo.svg' alt='Logo' maxH='46px'/>
        </Flex>
    )
}