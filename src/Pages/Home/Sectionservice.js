import React from 'react';
import Service from '../../Component/Service/Service';
import './sectionservice.css'
const Sectionservice = () => {
  return (
    <div className=''>
      <div className="full-app">

        <div className="container app-service">
          <section>
            <h4 className='sm-tittle'>Our Services</h4>
            <h1 className='tittle'>Best Services for Kids</h1>
            <p>

              Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
          </section>
          <div>
            <Service></Service>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionservice;