import * as S from './Search.styles'

export const SearchBar = (props) => {
  const {onChangeArt, placeholder} = props
  return(
    <>
      <S.Container>
        <h1>Search Your Favorite Art</h1>
        <S.Search onChange={(e) => onChangeArt(e.target.value)} placeholder={placeholder} />
      </S.Container>
    </>
  )
}