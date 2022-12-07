import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Typical from 'react-typical'
const Home = () => {
    return (
        <><Box height={{base :'40px', md : '60px'}}></Box>
            <Box border='1px' borderColor='black' mt={1} w='100%' h={{base :'400px', md : '400px',lg:"500px",sm:'320px'}} backgroundImage="url('https://wallup.net/wp-content/uploads/2016/05/25/141016-geometry-lamps-interior_design-photography-black_background.jpg')"
                bgPosition="cover"
                bgRepeat="no-repeat">
                <Flex w={{ base: '100%', md: '80%' }} m='auto' alignItems='center' justifyContent={{ base: 'center', md: 'space-around' }} flexDirection={{ base: 'column-reverse', lg: 'row' }} rowGap={{ base: '10px', md: '10px' }} mt={{ base: '20px', md: '10px', lg: '40px' }}>
                    <Box fontSize={{ base: '18px', md: '35px', lg: '55px' }} width={{ base: '90%', md: '100%', lg: '65%' }} m={{ base: 'auto', lg: '0' }} fontWeight='600' textAlign={{ base: 'center', lg: 'left' }} lineHeight={{ base: '28px', md: '50px', lg: '80px' }}>
                        <Flex justifyContent='center' gap='5px' direction={{ base: 'row', lg: 'column' }}>

                            <Flex>
                                <Text color='#ffffff'>
                                    <b>Hello World!</b>
                                </Text>
                                <Image mt='-5px' w={{ base: '40px', md: '60px', lg: '85px' }} src="https://cliply.co/wp-content/uploads/2021/02/392102850_EARTH_EMOJI_400px.gif" />
                            </Flex>

                            <Text color='#319795'><b style={{ color: '#319795' }}>
                                <Typical
                                    steps={["Rakesh", 1000, 'Rakesh Ahire', 500]}
                                    loop={Infinity}
                                    wrapper="p"
                                /></b></Text>
                        </Flex>
                        <Text color='#ffffff'>MERN Stack Developer</Text>
                        <a href="https://drive.google.com/drive/u/1/folders/1lipj74g2l77s0oQZeRY8pElSnh4NPBXv" ><Button size={{ base: 'sm', md: 'md', lg: 'lg' }} mt={{ base: '10px', md: '0' }} colorScheme='teal'>Resume</Button></a>
                    </Box>

                    <Box>
                        <Image src='https://avatars.githubusercontent.com/u/103639464?v=4' shadow='lg' mt={{ base: '10px', md: '0px' }} w={{ base: '150px', md: '200px', lg: '350px' }} borderRadius='50%' alt="Rakesh Ahire" />
                    </Box>
                </Flex>
            </Box>
        
            </>
    )
}
export default Home;