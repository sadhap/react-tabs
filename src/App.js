import React,{useState,useEffect} from 'react';
import {FaAngleDoubleRight}  from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
const url = 'https://course-api.com/react-tabs-project';
const App = () => {
  const [isLoading,setIsLoading]= useState(true);
  const[people,setPeople]= useState([]);
  const[value,setValue]= useState(0);
  const fetchPeople = async ()=>{
    const response = await fetch (url);
    const data = await response.json();
    setPeople(data);
    setIsLoading(false);
  }
    useEffect(()=>{
           fetchPeople(false);
    },[]);
  
   if (isLoading){
    return(
      <section className='section loading'>
      <h1>Loading....</h1>
      </section>
    );
   }
   const {company,dates,duties,title}= people[value];
   return(
    <section className='section'>
      <div className='title'>
      <h2>
        Experience
      </h2>
      <div className='underline'></div> 
      </div>
      <div className='jobs-center'>
      <div className='btn-container'>
      {people.map((person,index)=>{
        console.log(setValue);
        return(
          <button   className={`job-btn ${index=== value && 'active-btn'}`} onClick={()=>setValue(index)}key={uuidv4()}>
            {person.company}
          </button>
        )
      })}
      </div>
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-data'>
          {dates}
        </p>
        {duties.map((duty)=>{
          return(
            <div className='job-desc'key={uuidv4()}>
              <FaAngleDoubleRight className='job-icon'/>
              <p>{duty}</p>
            </div>
         )
        })}
      </article>
      
      </div>
     </section>
     )  
  };


export default App;