import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import { useAnimation } from "framer-motion";

export const Pricing = (props) => {

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
    <section id="pricing" className='pricing text-center'>
      <div ref={ref} className='container' data-aos="fade-up">
        <div className='col-md-10 col-md-offset-1 section-title'>
        <motion.h2 animate={animation}>Pricing</motion.h2>
          <p>We have different sizes for you to choose the one that suits your budget.</p>
        </div>
        <div className="row">

          <div className="col-lg-3 col-md-6" data-aos="zoom-im" data-aos-delay="100">
            <div className="box" id="gallery-box">
              <h3>Small</h3>
              <h4><sup>$</sup>1.25</h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#contact" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
            <div id="featured" className="box featured">
              <h3>Large</h3>
              <h4><sup>$</sup>10</h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#contact" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="100">
            <div className="box" id="gallery-box">
              <h3>Medium</h3>
              <h4><sup>$</sup>5</h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#contact" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
            <div id="featured" className="box featured">
              <h3>Large</h3>
              <h4><sup>$</sup>10</h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#contact" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}