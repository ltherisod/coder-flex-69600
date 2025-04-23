import React from 'react'
import { Spinner } from 'react-bootstrap'
import { PacmanLoader } from 'react-spinners'

const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'90vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        {/* <PacmanLoader color='yellow' /> */}
        <Spinner animation="border" variant="success" />
    </div>
  )
}

export default LoaderComponent