import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  useColorModeValue,
  Text
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Year } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Microservices-based E-Commerce">
    <Container maxW={"initial"}>
      <Title>
        Portfolio Website <Year>2022</Year>
      </Title>
      <P>
        Web project developed for personal professional profile presentation. Yeah, This one you are accessing.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link color={useColorModeValue('gray.700', 'whiteAlpha.900')} href="https://github.com/pietrolzanetti/portfolio">
            Portfolio WebSite <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Technologies</Meta>
          <span>Next.js, Chakra UI, Three.js, Framer Motion.</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/portfolio-thumb.png" alt="Questions - Web App" />
    </Container>
  </Layout >
)

export default Work
export { getServerSideProps } from '../../components/chakra'
