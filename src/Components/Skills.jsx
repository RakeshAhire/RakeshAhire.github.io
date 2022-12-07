import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, {useContext } from "react";
import Slider from "react-slick";
import { Box, Image, Text } from "@chakra-ui/react";
import { AppContext } from "../Context/theme";

export const AutoPlay =()=> {
   
        const { Theme, ToggleTheme } = useContext(AppContext)
        const light = {
            backgroundColor: 'white',
            color: 'black'
          }
        
          const dark = {
            backgroundColor: 'black',
            color: 'black'
          }
        const settings = {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay:true,
            speed: 2000,
            autoplaySpeed: 1000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 700,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 2,
                      infinite: true,
                    }
                  },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            }
      
       
        return (
            <>
                <Text fontSize={{base : '22px',md: '22px', lg : '40px'}} fontWeight={{base : '600', md : '700'}} textAlign='center' color='#319795'>Skills</Text>
                <Box w="80%" m='auto'>
                    <Slider {...settings} style={Theme === 'light' ? light : dark}>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5}  >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/html5.png' />
                                <Text mt={{ base: '10px', lg: '15px' }}>HTML5</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5}  >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/css3.png' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>CSS3</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/javascript.png' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>JavaScript</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/react.png' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>React.Js</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/redux.png' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Redux</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/npm.png' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>NPM</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/node-js.png' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Node.Js</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/mongodb.png' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Mongodb</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='express.png' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Express</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/typescript.png' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>TypeScript</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/github.png' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>GitHub</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/git.png' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Git</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='/postman.png' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Postman</Text>
                            </Box>
                        </div>
                    </Slider>
                </Box>
            </>
        );
    }
