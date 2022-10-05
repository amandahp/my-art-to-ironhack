import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import * as S from './RandomArtPage.styles'
import * as C from '../components'
import { getArt } from '../services/getArt'



export const RandomArtPage = () => {
  const [random, setRandomNumber] = useState();
  const { data, isError, isLoading } = useQuery('arts', getArt)


  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100))
  }, [])

  return (
    <S.MyArt>
      <h1>Your especially ART</h1>
      {isLoading && (<p>Loading...</p>)}
      {!isLoading && random && (
        <C.BoxYourArt
          art={data[random].image_id}
          title={data[random].title}
          altText={data[random].title}
        />
      )}
      {isError && (<p>Ops! Somethings is wrong :c</p>)}
    </S.MyArt>
  )
}