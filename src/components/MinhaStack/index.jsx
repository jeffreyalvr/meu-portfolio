import "./styles.css";

import img_css3 from "@assets/images/css3.png";
import img_figma from "@assets/images/figma.png";
import img_html5 from "@assets/images/html5.png";
import img_javascript from "@assets/images/javascript.png";
import img_typescript from "@assets/images/typescript.png";
import img_mongodb from "@assets/images/mongodb.png";
import img_nodejs from "@assets/images/nodejs.png";
import img_react from "@assets/images/react.png";
import img_sass from "@assets/images/sass.png";
import img_nextjs from "@assets/images/nextjs.png";
import img_bun from "@assets/images/bun.png";
import img_tailwind from "@assets/images/tailwind.png";
import img_redux from "@assets/images/redux.png";
import img_astro from "@assets/images/astro.png";
import img_graphql from "@assets/images/graphql.png";
import img_electron from "@assets/images/electron.png";

const MinhaStack = () => {
  return (
    <div className="stack">
      <div className="stack-item">
        <img src={img_html5} title="HTML 5" alt="HTML 5" />
        <span>HTML 5</span>
      </div>
      <div className="stack-item">
        <img src={img_css3} title="CSS 3" alt="CSS 3" />
        <span>CSS 3</span>
      </div>
      <div className="stack-item">
        <img src={img_sass} title="Sass" alt="Sass" />
        <span>Sass</span>
      </div>
      <div className="stack-item">
        <img src={img_javascript} title="JavaScript" alt="Javascript" />
        <span>JavaScript</span>
      </div>
      <div className="stack-item">
        <img src={img_typescript} title="TypeScript" alt="Typescript" />
        <span>TypeScript</span>
      </div>
      <div className="stack-item">
        <img src={img_react} title="React JS" alt="React JS" />
        <span>React JS & Native</span>
      </div>
      <div className="stack-item">
        <img src={img_nodejs} title="Node JS" alt="Node JS" />
        <span>Node JS</span>
      </div>
      <div className="stack-item hidden">
        <img src={img_nextjs} title="Next JS" alt="Next JS" />
        <span>Next JS</span>
      </div>
      <div className="stack-item">
        <img src={img_bun} title="Bun" alt="Bun" />
        <span>Bun</span>
      </div>
      <div className="stack-item">
        <img src={img_electron} title="Electron" alt="Electron" />
        <span>Electron</span>
      </div>
      <div className="stack-item hidden">
        <img src={img_mongodb} title="MongoDB" alt="MongoDB" />
        <span>MongoDB</span>
      </div>
      <div className="stack-item">
        <img src={img_tailwind} title="Tailwind" alt="Tailwind" />
        <span>Tailwind</span>
      </div>
      <div className="stack-item">
        <img src={img_figma} title="Figma" alt="Figma" />
        <span>Figma</span>
      </div>
      <div className="stack-item hidden">
        <img src={img_astro} title="Astro" alt="Astro" />
        <span>Astro</span>
      </div>
      <div className="stack-item hidden">
        <img src={img_redux} title="Redux" alt="Redux" />
        <span>Redux</span>
      </div>
      <div className="stack-item hidden">
        <img src={img_graphql} title="GraphQL" alt="GraphQL" />
        <span>GraphQL</span>
      </div>
    </div>
  );
};

export default MinhaStack;
