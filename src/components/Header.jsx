import * as S from './Header.styles'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'


export const Header = () => {
 
 const [boxSand, setBoxSand] = useState(false)

 const navigate = useNavigate()

 const handleClickMyArt = () => {
    setBoxSand(!boxSand)
    navigate("/my-art")
 
 }
   
 const handleClickSearch = () => {
    setBoxSand(!boxSand)
    navigate("/search-arts")
 } 
   
 const handleClickAllArts = () => {
    setBoxSand(!boxSand)
    navigate("/some-arts")
 } 
   
 const handleClickAbout = () => {
    setBoxSand(!boxSand)
    navigate("/about")
 }
 

  const handleClick = () => {
    setBoxSand(!boxSand)
 }

 return(
  <>
   <S.Header>
     <div className='mobile'>
       <button onClick={handleClick} className='sandwichButton'>
         <div/>
         <div/>
         <div/>
       </button>
     </div>
     <div className='desktop'>
      <button onClick={handleClickMyArt}>Generete My ART</button>
      <button onClick={handleClickSearch}>Search Arts</button>
      <button onClick={handleClickAllArts}>Some Arts</button>
      <button onClick={handleClickAbout}>About</button>
     </div>
   </S.Header>
   {boxSand &&(
    <>
      <S.Box className="mobileBox">
       <button onClick={handleClickMyArt}>Generete My ART</button>
       <button onClick={handleClickSearch}>Search Arts</button>
       <button onClick={handleClickAllArts}>All Arts</button>
       <button onClick={handleClickAbout}>About</button>
      </S.Box>
    </>
   )}
  </>
 )
}