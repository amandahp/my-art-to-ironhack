import * as S from './BoxYourArt.styles'


export const BoxYourArt = (props) => {
 const {art, title} = props
 
 return(
  <S.BoxArt>
    <h1>Your especially ART</h1>
    <div className='frame'>
      <img src={`https://www.artic.edu/iiif/2/${art}/full/843,/0/default.jpg`} alt={title} />
    </div>
    <h3>{title}</h3>
  </S.BoxArt>
 )
}