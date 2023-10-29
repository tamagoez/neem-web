"use client";

import { Nova_Round } from "next/font/google";
import styles from "./styles/pages/Index.module.css"
const novafont = Nova_Round({ weight: "400", subsets: ["latin"] });

const IndexPage = () => (
  <>
    <div className={styles.title_thumb}>
      <div className={styles.title_text}>
        <p className={novafont.className} style={{ fontSize: "20vw" }}>
          neem
        </p>
        <br />
        <p
          className={novafont.className}
          style={{ fontSize: "4vw", marginTop: "-5vw" }}
        >
          Still Developing!
        </p>
        <br />
        <p
          className={novafont.className}
          style={{ fontSize: "4vw", marginTop: "-2vw" }}
        >
          See you soon
        </p>
      </div>
    </div>
  </>
);

export default IndexPage;
