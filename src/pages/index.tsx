import styles from "./styles.module.scss";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Features from "@site/src/components/Features";
import Hero from "@site/src/components/Hero";
import Resources from "@site/src/components/Resources";
import Layout from "@theme/Layout";
import React from "react";

const Home = () => {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  const { tagline } = siteConfig;

  return (
    <Layout description={tagline}>
      <Hero />

      <main className={styles.main}>
        <Features />
        <Resources />
      </main>
    </Layout>
  );
};

export default Home;
