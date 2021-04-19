import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import Body from '../components/body'

const Home = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Smart Farm for practicum project</title>
        </Head>
        <Container>
          <Intro />
          <Body />
        </Container>
      </Layout>
    </>
  )
}

export default Home