import React, { useEffect, useState } from 'react';
import { axios } from './Constants';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay,faCircleInfo} from '@fortawesome/free-solid-svg-icons';
//import { faCircleInfo } from '@fortawesome/free-regular-svg-icons';
//library.add(faInfoCircle);

const Banner = () => {
    let [page,setPage] = useState(1);
    let [data,setData] = useState([]);
    let [producer,setProducer] = useState('');
    const generateRandomNumber = () => {
        const min = 1;
        const max = 20;
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNum
      };
      
    useEffect(()=>{
      let i = setInterval(()=>{
        setPage(generateRandomNumber())
       },4000)
       console.log(i,'jhjknjk')
        const params = {
            include_adult: 'false',
            language: 'en-US', // Malayalam language
            page: '1', // Adjust the page number as needed
          };
        axios.get('/trending/tv/week',{params :params}).
        then(res=>{
            console.log(res.data.results[1],'sdswdw');
            setData(res.data.results);
        }).
        catch(error=>{console.log(error.message)})  
        return ()=> clearInterval(i); 
    },[])
    useEffect(()=>{
     data[page] && axios.get(`tv/${data[page].id}/credits`).then((res)=>{
        const producers = res.data.crew.filter(crewMember => crewMember.job === 'Producer');
        setProducer(producers[0].name);
    }).catch(err=>{console.log(err.message);});
    },[page,data])
   
   
    
  return (
    
    
     data[page] &&   <div id='banner'  style={{backgroundImage : `url('https://image.tmdb.org/t/p/original/${data[page] ? data[page].backdrop_path : data[page].poster_path }')` ,backgroundPosition: 'center',backgroundRepeat : 'no-repeat',backgroundSize : 'cover',height : '500px'}}>
    <div>
    <div id='nlogo'>
    <div  className='d-flex'>
      <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/423px-Netflix_2015_N_logo.svg.png" alt="" width={'15px'} height={'25px'} />
      <h6 id='series' className='text-secondary font-monospace ms-2'>SERIES</h6>
      </div>
     <div className='d-flex'>
      <div className='me-3'>
      <h2 className='text-light fw-bolder'>{data&& data[page].name}</h2>
      </div>
      <div className='text-secondary fw-bold'>
          <h4 className='fw-bold'>From Executive Producer</h4>
          <h1 className='text-light fw-bolder'>{producer}</h1>
      </div>
     </div>
     <div className='d-flex'>
      <button className='btn btn-light me-2'><FontAwesomeIcon icon={faPlay} /> Play</button>
      <button className='btn btn-secondary'><FontAwesomeIcon  icon={faCircleInfo} />  More info</button>
     </div>
    </div>
    </div>
  </div>

  )
}

export default Banner
