import { motion } from "framer-motion";
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%"
                  }}
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </motion.a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
