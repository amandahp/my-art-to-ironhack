import { useQuery } from 'react-query'
import { Oval } from 'react-loader-spinner'

import * as S from './RandomArtPage.styles'
import * as C from '../components'
import { getArt } from '../services/getArt'



export const RandomArtPage = ( ) => {
 const randomNumber = Math.floor(Math.random() * 100)
 const {data, isError, isLoading } = useQuery('arts', getArt)

 return(
   <S.MyArt>
    {isLoading && (<Oval
      height={80}
      width={80}
      color="white"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="grey"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />)}
    {!isLoading &&(
     <C.BoxYourArt
       art={data[randomNumber].image_id} 
       title={data[randomNumber].title}
       altText={data[randomNumber].title} 
     />
     )}
     {isError && (<p>Ops! Somethings is wrong :c</p>)}
   </S.MyArt>
 )
}