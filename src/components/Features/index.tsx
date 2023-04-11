import styles from "./styles.module.scss";
import Headline from "@site/src/components/Headline";
import clsx from "clsx";
import React from "react";

interface Feature {
  title: string;
  description: string;
}

const data: Feature[] = [
  {
    title: "Purpur fork",
    description:
      "DivineMC is the fork of Purpur compatible with Spigot plugins, offering the best performance for your server.",
  },
  {
    title: "Lithium patches ",
    description:
      "DivineMC contains Lithium patches that optimizing many areas in game.",
  },
  {
    title: "New features",
    description: "DivineMC contains some PaperMC pull requests patches.",
  },
  {
    title: "Bug fixes",
    description: "DivineMC have patches that fixes bugs for several Minecraft issues.",
  },
  {
    title: "Plugin compatibility",
    description: "DivineMC have full compatibility with Spigot & Paper plugins.",
  },
  {
    title: "Fast upstream",
    description: "DivineMC always updated to latest version of upstream",
  },
];

const Feature = ({ title, description }: Feature) => {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <Headline
          category="Features"
          title="Check out DivineMC features!"
          offset={1}
        />

        <div className="row">
          {data.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
