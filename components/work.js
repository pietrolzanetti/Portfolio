import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, Button, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works" passHref legacyBehavior>
      <Link>
        <Button
          variant={useColorModeValue('light', 'dark')}
          color={useColorModeValue('gray.700', 'whiteAlpha.900')}
          // colorScheme="colorone"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Works
        </Button>
      </Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon fontSize={"lg"} />{' '}
    </span>
    <Heading mt="4" ml="10" display="flex" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" py="0.5" px="2" mr={2} mb="1" borderRadius="lg">
    {children}
  </Badge>
)

export const Year = ({ children }) => (
  <Badge py="0.5" px="2" ml={2} mb="5" borderRadius="lg">
    {children}
  </Badge>
)
