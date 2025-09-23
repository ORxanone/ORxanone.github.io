import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="ORxan Racabov's Profolio." />
      <meta name="keywords" content="ORxan Racabov, orxan, racabov" />
      <meta property="og:title" content="ORxan Racabov's Portfolio" />
      <meta property="og:description" content="ORxan Racabov's Profolio." />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "ORxan Racabov",
};
