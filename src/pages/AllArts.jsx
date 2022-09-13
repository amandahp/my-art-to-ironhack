import { useQuery } from 'react-query'

import * as S from './AllArts.styles.js'
import { getArt } from '../services/getArt'

export const AllArts = () => {
  const {data, isError, isLoading } = useQuery('arts', getArt)
  
  console.log(data)
  return(
    <S.AllArts>
      <S.Title>See beautiful ARTS</S.Title>
      <S.Container>
        {isLoading && 
        (<h3>Loading...</h3>)}
        {isError && (<p>Ops! Somethings wrong.</p>)}
        {!isLoading && data.map((art) => {
          return(
            <div>
              <h3>{art.title}</h3>
              <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`} alt={art.title} />
            </div>
          )
        })}
      </S.Container>
    </S.AllArts>
  )
}