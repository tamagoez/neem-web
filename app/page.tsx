"use client";

import { Nova_Round } from "next/font/google";

const novafont = Nova_Round({ weight: "400", subsets: ["latin"] });

const IndexPage = () => (
  <>
    <style jsx>
      {`
        .title_thumb {
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #d4e8fc, #e2d5fe);
          display: flex;
          justify-content: center;
        }
        .title_text {
          align-self: center;
          text-align: center;
          padding-bottom: 8vw;
          margin: 0 auto;
        }
        .title_text p {
          background: linear-gradient(270deg, #7184ff, #b3beff);
          background: -webkit-linear-gradient(280deg, #7184ff, #b3beff);
          display: inline-block;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}
    </style>
    <div className="title_thumb">
      <div className="title_text">
        <p className={novafont.className} style={{ fontSize: "20vw" }}>
          neem
        </p>
        <br />
        <p
          className={novafont.className}
          style={{ fontSize: "4vw", marginTop: "-5vw" }}
        >
          Now on developing!
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