import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/Card'
import Content from '../components/Content'
import NavBar from '../components/navbar'
// import styles from '../styles/Home.module.css'
import { Typography } from 'antd';
import Modals from '../components/Modals'
import dynamic from 'next/dynamic'
import AnimationText from '../components/AnimA'

const { Title } = Typography;
const ParticlesBg = dynamic(() => import('particles-bg'), {
  ssr: false,
});


const Home: NextPage = () => {
  return (
    <div>
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={50} />
      <Head>
        <title>Hamza's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Content >
        <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "margin": "10px" }}>
          {/* <span className="title">
          <Cards /> */}
          {/* <AnimationText /> */}
        </div>
      </Content>
      <Modals />
    </div>
  )
}

export default Home
