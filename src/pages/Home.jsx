
import { useNavigate } from "react-router-dom"


import * as S from './Home.styles'
import * as C from '../components'

import imageOne from '../assets/colorful-3d-shapes-vaporwave-style.jpg'
import imageTwo from '../assets/bw-greek-statue-image-torn-paper-style-remixed-media.jpg'
import imageThree from '../assets/statue-david-by-michelangelo-florence.jpg'


export const Home = () => {
  const navigate = useNavigate()

  const handleClickMyArt = () => {
    navigate('/my-art')
  }

  return (
    <div className=".App">
      <S.Layout>
        <div className='container'>
          <C.BoxHome
            handleClick={handleClickMyArt}
          />
          <div className='columnOne'>
            <img className="colorfulImage" src={imageOne} alt="colorful 3d shapes" />
            <img className="statue" src={imageTwo} alt="statue paper" />
          </div>
          <img className="womanArt" src={imageThree} alt="woman with paint" />
        </div>
      </S.Layout>
    </div>
  )
}