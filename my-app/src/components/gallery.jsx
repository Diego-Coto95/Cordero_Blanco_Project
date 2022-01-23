import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='gallery' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Gallery</h2>
          <p>
            Our high quality product is harvested directly from Costa Rican mountains, with 
            a traditional and autochthonous flavor.
          </p>
        </div>
        <div className='row'>
          <div className='gallery-items'>
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
