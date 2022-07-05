import { Flex, Heading, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Pagination,
    Navigation,
    Autoplay
} from 'swiper';
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation"
import { continents } from "../utils/continents";
import { useRouter } from "next/router";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

export const Slides = () => {
    const { push } = useRouter()

    return (
        <Flex maxWidth='1240px' align='center' justify='center'>
            <Swiper
                pagination={true}
                navigation={true}
                loop={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
            >
                {continents.map((continent, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Flex
                                direction='column'
                                minH={'450px'}
                                align='center'
                                justify='center'
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                backgroundImage={`url(${continent.banner})`}
                                cursor='pointer'
                                onClick={() => push(`continent/${continent.continent}`)}
                            >
                                <Heading fontSize='3xl' color={'white'}>
                                    {continent.name}
                                </Heading>
                                <Text fontSize="xs" color="white" fontWeight="bold">{continent.slogan}</Text>
                            </Flex>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Flex>
    )
}