import { Image } from "./image";
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import { useAnimation } from "framer-motion";

export const Product = (props) => {

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
    <div id='product' className='text-center'>
      <div ref={ref} className='container'>
        <div className='section-title'>
          <motion.h2 animate={animation}>Product</motion.h2>
          <p>
            The flavor and aroma of our coffee is our reference for your senses to appreciate the quality and value of this wonderful product.
          </p>
        </div>
        <div className='row' id="gallery-box">
          <div className='gallery-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-lg-6 col-md-6 mt-md-0'>
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