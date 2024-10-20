"use client"
import React from 'react'

const Student = ({params}) => {
   
  return (
    <div>
        <h1>student list</h1>
        <h3>Name : {params.student}</h3>
    </div>
  )
}

export default Student