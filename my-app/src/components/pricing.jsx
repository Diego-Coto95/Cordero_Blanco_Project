// export const Pricing = (props) => {
//   return (
//     <div id='team' className='text-center'>
//       <div className='container'>
//         <div className='col-md-8 col-md-offset-2 section-title'>
//           <h2>Meet the Team</h2>
//           <p>
//             With hard and constant work we always give our best, promoting new opportunities to improve the quality of our product.
//           </p>
//         </div>
//         <div id='row'>
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
//                   <div className='thumbnail'>
//                     {' '}
//                     <img src={d.img} alt='...' className='team-img' />
//                     <div className='caption'>
//                       <h4>{d.name}</h4>
//                       <p>{d.job}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             : 'loading'}
//         </div>
//       </div>
//     </div>
//   )
// }
export const Pricing = (props) => {
  return (
    <section id="pricing" className='pricing text-center'>
      <div className='container' data-aos="fade-up">
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Pricing</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row">

          <div className="col-lg-4 col-md-6" data-aos="zoom-im" data-aos-delay="100">
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

          <div className="col-lg-4 col-md-6 mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
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

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="100">
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
        </div>
      </div>
    </section>
  )
}