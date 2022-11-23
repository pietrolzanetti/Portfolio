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
  <Layout title="Questions - Web App">
    <Container maxW={"initial"}>
      <Title>
        Questions - Web App <Year>2022</Year>
      </Title>
      <P>
        A simple WebApp for questions making. Using ASP.NET Core, MVC (Model View Controller) design pattern, Entity Framework and Bootstrap
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link color={useColorModeValue('gray.700', 'whiteAlpha.900')} href="https://github.com/pietrolzanetti/QuestionsWebApp">
            Questions - Web App <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/questions-thumb.png" alt="Questions - Web App" />
    </Container>
  </Layout >
)

export default Work
export { getServerSideProps } from '../../components/chakra'
