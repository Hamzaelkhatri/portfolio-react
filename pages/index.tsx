import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Cards from '../components/Card'
import Content from '../components/Content'
import NavBar from '../components/navbar'
// import styles from '../styles/Home.module.css'
import { Typography } from 'antd';
import Modals from '../components/Modals'

const { Title } = Typography;


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Content >
        <div style={{"display":"flex","flexDirection":"column","alignItems":"center","margin":"10px"}}>
        <span className="title">
          <Title level={1} style={{fontSize:"40px",color:"white"}}>
                hello world
          </Title>

        </span>
        <Cards />
        </div>
      </Content>
        <Modals/>
    </div>
  )
}

export default Home
