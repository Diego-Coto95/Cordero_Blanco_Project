import React from "react";
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export const About = (props) => {

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
      animation.start({x:'100vw'})
    }
  }, [inView]);


  return (
    <div id="about">
      <div ref={ref} className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <motion.img id="image-about"  animate={animation} src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <motion.div animate={animation} className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};


