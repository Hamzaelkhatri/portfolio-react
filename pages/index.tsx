import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/Content'
import NavBar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Content >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-col space-y-4">
                        <span className="text-2xl font-bold">
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>

    </div>
  )
}

export default Home
