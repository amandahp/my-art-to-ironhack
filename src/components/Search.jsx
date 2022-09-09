import * as S from './Search.styles'

export const SearchBar = (props) => {
  const {onChangeArt, placeholder} = props
  return(
    <>
      <S.Container>
        <h1>Search Your Favorite Art</h1>
        <S.Search onChange={onChangeArt} placeholder={placeholder} />
      </S.Container>
    </>
  )
}