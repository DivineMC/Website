import React from "react"

import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Download from "@site/src/components/Download"
import Hero from "@site/src/components/Hero"
import Resources from "@site/src/components/Resources"
import Layout from "@theme/Layout"

import styles from "./styles.module.scss"

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig } = context
  const { tagline } = siteConfig

  return (
    <Layout description={tagline}>
      <Hero />

      <main className={styles.main}>
        <Download />
        <Resources />
      </main>
    </Layout>
  )
}

export default Home
