import * as S from './Home.styles'
import * as C from '../components'

import { useNavigate} from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate()

  const handleClickMyArt = () => {
    navigate('/my-art')
  }

  return(
    <>
      <S.Layout>
        <div className='container'>
        <C.BoxHome
          handleClick={handleClickMyArt}
        />
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