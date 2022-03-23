import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import { useAnimation } from "framer-motion";

export const Team = (props) => {

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
    <div id='team' className='text-center'>
      <div ref={ref} className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
        <motion.h2 animate={animation}>Meet the team</motion.h2>
          <p>
            With hard and constant work we always give our best, promoting new opportunities to improve the quality of our product.
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
