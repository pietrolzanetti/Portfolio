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
        Microservices-based E-Commerce <Year>2022</Year>
      </Title>
      <P>
        An simple E-Commerce Web App based on microservices with .NET Core 6.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link color={useColorModeValue('gray.700', 'whiteAlpha.900')} href="https://github.com/pietrolzanetti/microservices-dotnet6">
            Microservices-based E-Commerce <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Technologies</Meta>
          <span>ASP.NET, .NET Core 6, Oauth2, OpenID, JWT, Identity Server, RabbitMQ, API Gateway with Ocelot, Swagger OpenAPI and others.</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/microservices-thumb.png" alt="Questions - Web App" />
    </Container>
  </Layout >
)

export default Work
export { getServerSideProps } from '../../components/chakra'
