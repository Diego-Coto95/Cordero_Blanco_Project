import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export const Features = (props) => {

  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration:2.5, bounce: 0.0
        }
      });
    }
    if(!inView){
      animation.start({x:'-100vw'})
    }
  }, [inView]);

  return (
    <div id='features' className='text-center' >
      <div ref={ref} className='container' >
        <div className='col-md-10 col-md-offset-1 section-title'>
          <motion.h2 animate={animation}>Features</motion.h2>
        </div>
        <motion.div className='row' animate={animation}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </motion.div>
      </div>
    </div>
  )
}
