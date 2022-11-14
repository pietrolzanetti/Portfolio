import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  HStack,
  extendTheme,
  Text
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin, IoDocument } from 'react-icons/io5'
import Image from 'next/image'

//teste
import { StyleFunctionProps } from '@chakra-ui/styled-system'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW={"initial"}>
      <Box
        borderRadius="lg"
        mb={6}
        mt={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/perfil.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Hey, I'm <Text color={useColorModeValue("colorone.500", "colorone.200")}>Pietro Zanetti</Text>
          </Heading>
          <p>.NET Software Engineer</p>
        </Box>

      </Box>

      <Box my={4}>
        <HStack>
          <Link href="https://github.com/pietrolzanetti" target="_blank">
            <Button
              variant={useColorModeValue('light', 'dark')}
              // colorScheme="colorone"
              css={{ backdropFilter: 'blur(10px)' }}
              leftIcon={<IoLogoGithub />}
            >
              Github
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/pietrolzanetti/" target="_blank">
            <Button
              variant={useColorModeValue('light', 'dark')}
              // colorScheme="colorone"
              css={{ backdropFilter: 'blur(10px)' }}
              leftIcon={<IoLogoLinkedin />}
            >
              Linkedin
            </Button>
          </Link>
          <Link href="/Pietro_Resume.pdf" target="_blank">
            <Button
              variant={useColorModeValue('light', 'dark')}
              // colorScheme="colorone"
              css={{ backdropFilter: 'blur(10px)' }}
              leftIcon={<IoDocument />}
            >
              Resume
            </Button>
          </Link>
        </HStack>
      </Box>


      <Box display={{ md: 'flex' }}>
        {/* <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Pietro Zanetti
          </Heading>
          <p>.NET Software Engineer</p>
        </Box> */}
        {/* <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/perfil.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box> */}
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <Paragraph>
          I'm a full-stack developer based in Brazil with a passion for building technological stuff.
          Currently in my last semester of Electrical Engineering at UFMG, looking forward to doing what I love.

        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false} legacyBehavior>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="colorone">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Timeline
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Castelo, Brazil.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Work at TCS Industrial as Software Engineer Intern.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Work at WINET - UFMG as Undergraduate Researcher.
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Work at Concert Technologies as Software Engineer Intern.
        </BioSection>
      </Section>

      {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section> */}
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
