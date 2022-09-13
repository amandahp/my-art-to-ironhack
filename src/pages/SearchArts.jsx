import { useState } from 'react'
import { useDebounce } from 'use-debounce'
import { searchArt } from '../services/searchArt'
import { useQuery } from 'react-query'
import * as C from '../components'
import * as S from './SearchArts.styles'
export const SearchArts = () => {

  const [filter, setFilter] = useState(undefined)
  const [debouncedFilter] = useDebounce(filter, 500);
  const {data, isLoading, isError} = useQuery(['searchedArt',debouncedFilter],() => searchArt(debouncedFilter),{enabled:Boolean(debouncedFilter)})


  console.log(data)
  const handleSearchChange = (e) =>{
    setFilter(e)
  }


  return(
    <S.Search>
      <C.SearchBar
        onChangeArt={handleSearchChange}
        placeholder="Search your ART"
      />
      <S.Container>
        {isLoading && 
        (<h3>Loading...</h3>)}
        {isError && (<p>Ops! Somethings wrong.</p>)}
        {!isLoading && data && data.length && data.map((art, index) => {
          return(
            <div key={`${art.title}${index}`}>
              <h3>{art.title}</h3>
              <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`} alt={art.title} />
            </div>
          )
        })}
      </S.Container>
    </S.Search>
  )
}