import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Box } from '@mui/system';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>DJ</h1>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Home;
