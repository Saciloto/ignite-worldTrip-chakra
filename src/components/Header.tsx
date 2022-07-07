import { Box, Flex, Image } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { MdKeyboardArrowLeft } from "react-icons/md"

export const Header = ({ goBack = false }: { goBack?: boolean }) => {
    const { back } = useRouter()
    return (
        <Flex as='header' w='full' justify='flex-start' align='center' py='4'>
            {goBack &&
                <Box onClick={() => back()} cursor='pointer'>
                    <MdKeyboardArrowLeft size='30px' />
                </Box>
            }
            <Flex w='full' align='center' justify='center'>
                <Image src='/images/Logo.svg' alt='Logo' maxH='46px' />
            </Flex>
        </Flex>
    )
}