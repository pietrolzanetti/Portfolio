import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio,
    useColorModeValue,
    Text,
    SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Year } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="APDS9930 API">
        <Container maxW={"initial"}>
            <Title>
                APDS-9930 API <Year>2021</Year>
            </Title>
            <P>
                This API was developed by Pietro Zanetti and Pedro Bahia as a work in the discipline of Embedded Systems Programming at UFMG - Prof. Ricardo de Oliveira Duarte - Department of Electronic Engineering.        </P>
            <P>
                Library is developed and tested with STM32F1xx (Nucleo 64 board).
            </P>
            <P>
                The main.c file contain exemples of usage based in Bare Metal programming. Therefore, the functions used in the exemple are executated by the hardware when the interruption caused by the peripherals is enabled for CPU service. When not executing the instructions of the function, CPU will be executing the infinite loop.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link color={useColorModeValue('gray.700', 'whiteAlpha.900')} href="https://github.com/pietrolzanetti/APDS9930_API">
                        APDS9930_API <ExternalLinkIcon mx="2px" />
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
            <SimpleGrid columns={2} gap={2}>
                <WorkImage src="/images/works/api-apds.jpg" alt="walknote" />
                <WorkImage src="/images/works/api-display.jpg" alt="walknote" />
            </SimpleGrid>
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
