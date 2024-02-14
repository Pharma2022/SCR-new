import React from 'react'
import Form from '../components/Form'
import Render from '../components/Render'
import Contact from './Contact'
const Home = () => {
  return (
    <>
      <div className='wrapper flex-row'>
          <Form/>
          <Render/>
          
      </div>
    </>
  )
}

export default Home