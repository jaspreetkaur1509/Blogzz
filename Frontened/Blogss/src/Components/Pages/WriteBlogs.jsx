import React from 'react'
import WriteUpdate from '../WriteBlogs/WriteUpdate'

const WriteBlogs = ({title}) => {
  return (
    <div>
      <WriteUpdate titlename={title} />
    </div>
  )
}

export default WriteBlogs