import styles from "./styles.module.scss";
import Headline from "@site/src/components/Headline";
import clsx from "clsx";
import { filesize } from "filesize";
import React from "react";
import { DiApple, DiLinux, DiWindows } from "react-icons/di";
import { FiPackage } from "react-icons/fi";
import useSWR from "swr";

// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

const useLatestRelease = () => {
  const { data, error } = useSWR(
    `https://api.github.com/repos/DivineMC/DivineMC/releases/latest`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const icon = (type: string) => {
  const size = 24;

  switch (type) {
    case "application/x-apple-diskimage":
      return <DiApple size={size} />;
    case "application/x-msdos-program":
      return <DiWindows size={size} />;
    case "application/x-debian-package":
      return <DiLinux size={size} />;
    default:
      return <FiPackage size={size} />;
  }
};

const Download = () => {
  const { data } = useLatestRelease();
  const size = 36;

  return (
    <section id="download" className={styles.download}>
      <div className="container">
        <Headline
          category="Download"
          title="You can download the latest builds of DivineMC below."
          offset={1}
        />

        <div className="row">
          <div className="col col--6 col--offset-1">
            {data && (
              <div className={styles.assets}>
                {data.assets.map((asset, idx) => (
                  <div className={styles.asset} key={idx}>
                    <div>
                      {icon(asset.content_type)}
                      <a href={asset.browser_download_url} download>
                        {asset.name}
                      </a>
                    </div>
                    <div className={styles.size}>{filesize(asset.size)}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={clsx("col col--4", styles.info)}>
            <strong>
              We recommend to use latest version of DivineMC for new features,
              patches and bug fixes!
              <br></br>
              <br></br>
              NOTE: To run Minecraft server you need
              DivineMC-paperclip-VERSION-reobf.jar
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
