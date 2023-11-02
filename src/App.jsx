import { useState } from 'react'
import './App.css'
import Navhead from './Navhead'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Banner from './Banner'
import Row from './Row'

library.add(fas)



function App() {
  

  return (
    <>
    
    <Navhead />  
    <Banner  />
    <Row  title = 'Now Playing' options = {
          {language: 'en-US', page: '1'}} url = 'movie/now_playing'/>
    <Row  title = 'Upcoming Movies' options = {
          {language: 'en-US', page: '2'}} url = '/movie/upcoming'/>
    <Row  title = 'Popular Malayalam movies' options = {{
          include_adult: 'false',
          include_video: 'true',
          language: 'ml-IN',
          page: '1',
          region: 'IN',
          with_original_language: 'ml',
          sort_by: 'popularity.desc'
        }} url = '/discover/movie'/>
        
    </>
    
  )
}

export default App
