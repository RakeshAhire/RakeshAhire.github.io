import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component, useContext } from "react";
import Slider from "react-slick";
import { Box, Flex, Image, Square, Text, VStack } from "@chakra-ui/react";
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
            slidesToShow: 6,
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
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://cdn-icons-png.flaticon.com/512/732/732212.png' shadow='lg' />
                                <Text mt={{ base: '10px', lg: '15px' }}>HTML5</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5}  >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg' shadow='lg' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>CSS3</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg' shadow='lg' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>JavaScript</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg' shadow='lg' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>React.Js</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg' shadow='lg' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Redux</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/npm/npm-original-wordmark.svg' shadow='lg' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>NPM</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-plain.svg' shadow='lg' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Node.Js</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original.svg' shadow='lg' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Mongodb</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png' shadow='lg' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Express</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-plain.svg' shadow='lg' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>TypeScript</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png' shadow='lg' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Git Hub</Text>
                            </Box>
                        </div>
                        <div style={{ display: "flex", width: "50px", height: '150px' }} >
                            <Box p='20px' borderRadius={5} display='flex' flexDirection="column" justifyContent="center" alignItems="center" backgroundColor='#f4f4f4' mr={5} >
                                <Image w={{ base: '45px', md: '80px', lg: '80px' }} src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg' shadow='lg' />
                                <Text textAlign='center' mt={{ base: '10px', lg: '15px' }}>Git</Text>
                            </Box>
                        </div>
                    </Slider>
                </Box>
            </>
        );
    }
