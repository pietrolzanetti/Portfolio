import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Year } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="proffy">
    <Container maxW={"initial"}>
      <Title>
        Proffy <Year>2020</Year>
      </Title>
      <P>
        Projeto idealizado com inspiração no Dia Nacional dos Profissionais da Educação, o Proffy é uma aplicação Web e Mobile com foco em criar uma ponte entre alunos e professores. Sendo assim, a aplicação oferece aos professores um meio de anunciarem suas aulas, com respectivas informações, e aos alunos um meio de busca por aulas.
      </P>
      <P>
        A aplicação foi realizada durante o Next Level Week, evento organizado pela Rocketseat.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link color={useColorModeValue('gray.700', 'whiteAlpha.900')} href="https://github.com/pietrolzanetti/proffy">
            Proffy
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Typescript, Node.js, ReactJS, React Native, Expo, Express, Axios, Async Storage</span>
        </ListItem>
      </List>

      {/* <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/walknote_01.png" alt="walknote" />
        <WorkImage src="/images/works/walknote_02.png" alt="walknote" />
      </SimpleGrid> */}
      <WorkImage src="/images/works/proffy-thumb.png" alt="proffy" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
