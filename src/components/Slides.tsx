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

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

export const Slides = () => {
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
                <SwiperSlide>
                    <Flex
                        direction='column'
                        minH={'450px'}
                        align='center'
                        justify='center'
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={'images/europe.png'}
                    >
                        <Heading fontSize='3xl' color={'white'}>
                            Europa
                        </Heading>
                        <Text fontSize="xs" color="white" fontWeight="bold">O continente mais antigo.</Text>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        direction='column'
                        minH={'450px'}
                        align='center'
                        justify='center'
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={'url(https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80)'}
                    >
                        <Heading fontSize='3xl' color={'white'}>
                            América do Sul
                        </Heading>
                        <Text fontSize="xs" color="white" fontWeight="bold">O novo mundo.</Text>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        direction='column'
                        minH={'450px'}
                        align='center'
                        justify='center'
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={'url(https://images.unsplash.com/photo-1588272947922-21cbc34dc3a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)'}
                    >
                        <Heading fontSize='3xl' color={'white'}>
                            América do Norte
                        </Heading>
                        <Text fontSize="xs" color="white" fontWeight="bold">Conheça o que o mundo tem a oferecer.</Text>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        direction='column'
                        minH={'450px'}
                        align='center'
                        justify='center'
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={'url(https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'}
                    >
                        <Heading fontSize='3xl' color={'white'}>
                            Ásia
                        </Heading>
                        <Text fontSize="xs" color="white" fontWeight="bold">Rico em história e gastrônomia.</Text>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        direction='column'
                        minH={'450px'}
                        align='center'
                        justify='center'
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={'url(https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)'}
                    >
                        <Heading fontSize='3xl' color={'white'}>
                            África
                        </Heading>
                        <Text fontSize="xs" color="white" fontWeight="bold">Belos lugares por todo o continente.</Text>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        direction='column'
                        minH={'450px'}
                        align='center'
                        justify='center'
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)`}
                    >
                        <Heading fontSize='3xl' color={'white'}>
                            Oceania
                        </Heading>
                        <Text fontSize="xs" color="white" fontWeight="bold">O continente das ilhas.</Text>
                    </Flex>
                </SwiperSlide>

            </Swiper>
        </Flex>
    )
}