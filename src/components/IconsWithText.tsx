import { Flex, Image, Text } from "@chakra-ui/react"

interface IconsWithTextProps {
    iconName: string;
    description: string;
}

export const IconsWithText = ({ iconName, description }: IconsWithTextProps) => {
    return (
        <Flex direction='column' align='center' justify='center' p='8'>
            <Image src={`/images/icons/${iconName}.svg`} alt='night' />
            <Text fontWeight={'600'}>{description}</Text>
        </Flex>
    )
}