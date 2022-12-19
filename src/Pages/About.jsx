import {
  Box,
  Center,
  Text,
  Stack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../Context/theme';

// import LinkedinButton from './LinkedInFollowBtn';

export default function About() {
  const { Theme } = useContext(AppContext);

  const light = {
    backgroundColor: 'white',
    color: 'black'
  }

  const dark = {
    backgroundColor: 'black',
    color: 'white'
  }
  return (
    <>
      <Text color='#319795' fontSize={{ base: '22px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }} textAlign='center'>About Me</Text>
      <Center style={Theme === 'light' ? light : dark}>
        <Box style={Theme === 'light' ? light : dark}
          maxW={{ base: '350px', md: '450px', lg: '600px' }}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          rounded={'lg'}
          textAlign={'center'}>

          <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3} style={Theme === 'light' ? light : dark}>
            Result-oriented Full-Stack Web Developer. Self-motivated and curious, passionate about developing user-friendly web applications with the ability to
            write clean, reusable, and  optimized code. Have problem-solving skills and the ability to perform well in a team & challenging work environment.
          </Text>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>#WebDesign</Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #tech
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #DSA
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #programmer
            </Badge>
          </Stack>

          <Stack mt={1} direction={'row'} spacing={4} >
            <a href="https://www.linkedin.com/in/abrar-khan-b67333230/" target='_blank' style={{ width: '90%', margin: 'auto' }}>{/*<LinkedinButton/>*/}</a>
          </Stack>
        </Box>
      </Center>
    </>
  );
}