import * as S from './Home.styles'
import * as C from '../components'

export const Home = () => {
 return(
  <>
   <S.Layout>
     <div className='container'>
     <C.BoxHome />
      <div className='columnOne'>
       <img className="colorfulImage" src="colorful-3d-shapes-vaporwave-style.jpg" alt="colorful 3d shapes"/>
       <img className="statue" src="bw-greek-statue-image-torn-paper-style-remixed-media.jpg" alt="statue paper"/>
      </div>
      <img className="womanArt" src="statue-david-by-michelangelo-florence.jpg" alt="woman with paint" />
     </div>
   </S.Layout>
  </>
 )
}