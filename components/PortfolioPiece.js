import styles from "../styles/portfoliopiece.module.scss";
import Image from "next/image";

//techstack icons

const cssIcon = "/css.svg";
const htmlIcon = "/html.svg";
const javascriptIcon = "/javascript.svg";
const nextjsIcon = "/next.js.svg";
const reactIcon = "/react.svg";

function PortfolioPiece(props) {
  const imageUrl = props.image.data[0].attributes.url;
  const techStack = props.techstack.tech;

  const stackElements = techStack.map((item) => {
    if (item === "html") {
      return <img src={htmlIcon} key={item} className={styles.stack_item} />;
    } else if (item === "css") {
      return <img src={cssIcon} key={item} className={styles.stack_item} />;
    } else if (item === "react") {
      return <img src={reactIcon} key={item} className={styles.stack_item} />;
    } else if (item === "next.js") {
      return <img src={nextjsIcon} key={item} className={styles.stack_item} />;
    } else if (item === "javascript") {
      return (
        <img src={javascriptIcon} key={item} className={styles.stack_item} />
      );
    }
  });

  return (
    <div
      className={
        props.darkMode ? styles.portfolioCard_dark : styles.portfolioCard_light
      }
    >
      <img className={styles.thumbnail} src={imageUrl} alt="thumbnail" />
      <div className={styles.body}>
        <h1>_{props.title}</h1>
        {/* <p>{props.description}</p> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis
          consectetur auctor purus at. Sit id sapien facilisis et, amet,
          sollicitudin nec. Adipiscing commodo magna. sollicitudin nec.
          Adipiscing commodo magna.
        </p>
        <div className={styles.stack}>{stackElements}</div>
        <div className={styles.buttons}>
          <button
            className={
              props.darkMode
                ? styles.btn_livesite_dark
                : styles.btn_livesite_light
            }
          >
            Live Site
          </button>
          <button
            className={
              props.darkMode ? styles.btn_github_dark : styles.btn_github_light
            }
          >
            Githib Repo
          </button>
          <button
            className={
              props.darkMode ? styles.btn_figma_dark : styles.btn_figma_light
            }
          >
            Figma Design
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPiece;

// {`../public/${techStack[1]}.svg`}
