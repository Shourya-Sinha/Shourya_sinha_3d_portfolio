import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  const isExternal = (icon) =>
    typeof icon === "string" && icon.startsWith("http");
  return (
    <>
      {/* <motion.div id="tech" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tools
        </h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-4'>
      {technologies.map((technology) => (
        <div style={{height: '5rem', width: "5rem"}} key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div> */}
      <motion.div id="tech" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Tools</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-4">
        {technologies.map((technology) => (
          <div key={technology.name} style={{ height: "5rem", width: "5rem" }}>
            {isExternal(technology.icon) ? (
              <img
                src={technology.icon}
                alt={technology.name}
                 className="h-20 w-20 object-contain rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                 style={{height:'70px', width:'70px', objectFit:'contain'}}
              />
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
