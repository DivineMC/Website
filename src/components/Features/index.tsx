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
    title: "Pufferfish fork",
    description:
      "DivineMC using a custom fork of Pufferfish which a the best performance Minecraft core.",
  },
  {
    title: "Lithium patches ",
    description:
      "DivineMC contains Lithium patches which is optimize many areas in game.",
  },
  {
    title: "Bug fixes",
    description: "DivineMC have bug fixes for several Minecraft issues.",
  },
  {
    title: "New features",
    description: "DivineMC contains PaperMC pull requests patches.",
  },
  {
    title: "Faster process",
    description: "Faster process for Vanilla methods.",
  },
  {
    title: "Plugin compatibility",
    description: "DivineMC have compatibility with Spigot & Paper plugins.",
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
