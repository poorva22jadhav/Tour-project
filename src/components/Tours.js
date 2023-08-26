import React from 'react';
import Title from './Title';
import {tourData} from "./data.js";

const Tours = () => {
  return (
    
    <section className="section" id="tours">
             <Title title='featured' subtitle='Tours'/>

            

      <div className="section-center featured-center">

      {tourData.map((tour)=>{
                const{id,date,image,country,title,text,days,price}=tour
                return (
                  <article className="tour-card" key={id}>
                  <div className="tour-img-container">
                 <img src={image} className="tour-img" alt="" />
                 <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
             {text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {country}
              </p>
              <p>{days}</p>
              <p>{price}</p>
            </div>
          </div>
        </article>
                  
                );
              })}
        

      
      </div>
    </section>
  )
}

export default Tours