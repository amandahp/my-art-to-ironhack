import * as S from './BoxHome.styles'

export const BoxHome = (props) => {
  const {handleClick} = props
  return(
    <>
      <S.Box>
        <h1>Discovery <br/> Your ART</h1>
        <button onClick={handleClick}>START NOW</button>
      </S.Box>
    </>
  )
}