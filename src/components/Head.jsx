import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="ORkhan Racabov's Profolio." />
      <meta name="keywords" content="ORkhan Racabov, orxan, racabov" />
      <meta property="og:title" content="ORkhan Racabov's Portfolio" />
      <meta property="og:description" content="ORkhan Racabov's Profolio." />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "ORkhan Racabov",
};
