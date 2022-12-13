import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

interface layoutProps {
  title: string;
  keywords: string;
  description: string;
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({
  title,
  keywords,
  description,
  children,
}: layoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'DJ Events | Let your heart out !',
  description: 'Find the latest released songs here',
  keywords: 'music, dj, edm, music events, party',
};
