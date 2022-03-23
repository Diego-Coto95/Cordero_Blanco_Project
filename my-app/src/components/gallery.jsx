import { Image } from "./image";
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import { useAnimation } from "framer-motion";


export const Gallery = (props) => {

  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration:1, bounce: 0.0
        }
      });
    }
    if(!inView){
      animation.start({x:'-100vw'})
    }
  }, [inView]);

  return (
    <div id='gallery' className='text-center'>
      <div ref={ref} className='container'>
        <div className='section-title'>
          <motion.h2 animate={animation}>Gallery</motion.h2>
          <p>
            Our high quality product is harvested directly from Costa Rican mountains, with 
            a traditional and autochthonous flavor.
          </p>
        </div>
        <div className='row' id="gallery-box" animate={animation}>
          <div className='gallery-items' >
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )


}
