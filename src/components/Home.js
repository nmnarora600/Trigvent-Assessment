import React from 'react'

import Notes from './Notes';

const Home = (props) => {

  return (
    <div className='mx-2'>
     
      <Notes showAlert={props.showAlert}/>
    </div>
  )
}

export default Home
