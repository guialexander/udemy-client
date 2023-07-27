import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import TitleHeading from '../componentes/titleHeading';
import headingImg from '../images/Title-heading.png';
import headingImgPhone from '../images/Title-heading-movil.png';
import AlternateHeadline from '../componentes/alternateheadline'

import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className="home-container">



      <TitleHeading
       title='Last day for these savings!'
       text='Courses that meet today’s challenges (and tomorrow’s). They start at just COL$39,900. Sale ends today.'
       img={headingImg}
       alt='illustration'
       imgPhone={headingImgPhone}
       />
      
      <AlternateHeadline
      title='A broad selection of courses'
      info='Choose from 204,000 online video courses with new additions published every month'
      />




   


      

        <div className={styles.grid}>
          <nav>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about' >About</Link>
              </li>
              <li>
                <Link href='/products' >Products</Link>
              </li>
            </ul>
          </nav>
        </div>
        </div>
     
    </>
  )
}
