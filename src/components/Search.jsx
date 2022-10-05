import * as S from './Search.styles'

export const SearchBar = (props) => {
  const {onChangeArt, placeholder} = props
  return(
    <>
      <S.Container>
        <S.Search onChange={(e) => onChangeArt(e.target.value)} placeholder={placeholder} />
      </S.Container>
    </>
  )
}