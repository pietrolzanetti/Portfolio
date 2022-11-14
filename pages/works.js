import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbANClockTree from '../public/images/works/AN-ClockTree-thumb.png'
import thumbProffy from '../public/images/works/proffy-thumb.png'
import thumbapi from '../public/images/works/api-thumb.png'

const Works = () => (
  <Layout title="Works">
    <Container maxW={"initial"}>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="AN-ClockTree"
            title="AN - Clock Tree"
            thumbnail={thumbANClockTree}
          >
            A guide to the initial configuration of the clock tree of an STM32F103RB and the subsequent change of clock values during execution
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="APDS9930_API"
            title="APDS-9930 API"
            thumbnail={thumbapi}
          >
            API developed for APDS-9930 ambient light and proximity sensor
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="proffy"
            title="Proffy"
            thumbnail={thumbProffy}
          >
            Aplicação Web e Mobile com foco em criar uma ponte entre alunos e professores.
          </WorkGridItem>
        </Section>


        {/* <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section> */}


      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbANClockTree} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
