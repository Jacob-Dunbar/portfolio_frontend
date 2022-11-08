import Head from "next/head";

import Navbar from "../components/Navbar.js";
import Contact from "../components/Contact";
import Header from "../components/Header.js";
import { useState, useRef } from "react";
import Portfolio from "../components/Portfolio.js";
import ScrollToTop from "../components/ScrollToTop.js";
import ScrollDown from "../components/ScrollDown.js";
import Background from "../components/Background.js";
import Footer from "../components/Footer.js";

// strapi CMS

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `{
        portfoliopieces{
          data{
            attributes{
              title
              description
              techstack
              livesite
              repo
              image {
                data{
                  attributes{
                    url
                  }
                }
              }
              figma
            }
          }
        }
        }`,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const data = await res.json();

  return {
    props: data,
    // check for new data on CMS once every ten seconds
    revalidate: 10,
  };
}

export default function Home({ data }) {
  // dark mode state
  const [darkMode, setDarkMode] = useState(false);

  //useRefs for navigation
  const portfolioSection = useRef(null);
  const contactSection = useRef(null);

  function scrollToSection(elementRef) {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  }
  return (
    <div className={darkMode ? "background_dark" : "background_light"}>
      <Head>
        <title>Jacob Dunbar</title>
        <meta name="Portfolio Website" content="Web development" />
        <link rel="icon" href="/icons/favicon.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>

      <ScrollToTop darkMode={darkMode} />
      <ScrollDown
        darkMode={darkMode}
        scrollToSection={scrollToSection}
        portfolioSection={portfolioSection}
      />

      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((prevMode) => !prevMode)}
        scrollToSection={scrollToSection}
        portfolioSection={portfolioSection}
        contactSection={contactSection}
      />

      <Header
        darkMode={darkMode}
        scrollToSection={scrollToSection}
        contactSection={contactSection}
      />

      <div ref={portfolioSection}></div>
      <Portfolio darkMode={darkMode} data={data} />

      <div ref={contactSection}></div>
      <Contact darkMode={darkMode} />

      <Background darkMode={darkMode} />

      <Footer darkMode={darkMode} />
    </div>
  );
}
