import React from 'react'
import Page1 from '../Home/Page1'
import Page2 from '../Home/Page2';

function Home() {
  return (
    <div>
      <Page1 />
      <div className='d-flex justify-content-center align-items-center py-4'>
        <h3>Latest Blogs</h3>
      </div>
      <Page2 />
    </div>
  )
}

export default Home;