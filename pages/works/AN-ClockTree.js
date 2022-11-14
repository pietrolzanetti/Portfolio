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
  <Layout title="AN - Clock Tree">
    <Container maxW={"initial"}>
      <Title>
        AN - Clock Tree <Year>2021</Year>
      </Title>
      <P>
        The STM32F103RB features a series of clocks intended for various functionalities organized in the clock tree. Its proper configuration is essential for the predictability and correctness of the program. This Application note - Configuração da árvore de clock em tempo de execução em um STM32F103rb Nucleo - aims to guide the initial configuration of the clock tree of an STM32F103RB through the STM32CubeMX graphic interface and the subsequent change of clock values during execution. To exemplify the concepts covered, an assembly was elaborated, in which the internal LED of the STM32 board flashes at various frequencies throughout the execution, as the GIF shown in the sequency.
      </P>
      <P>
        This AN was developed by Pietro Zanetti and Pedro Bahia as a work in the discipline of Embedded Systems Programming at UFMG - Prof. Ricardo de Oliveira Duarte - Department of Electronic Engineering.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link color={useColorModeValue('gray.700', 'whiteAlpha.900')} href="https://github.com/pietrolzanetti/AN_Clock_Tree">
            AN - Clock Tree <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        {/* <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Electron, React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <WorkImage src="/images/works/AN-ClockTree.png" alt="AN-ClockTree" />
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout >
)

export default Work
export { getServerSideProps } from '../../components/chakra'
