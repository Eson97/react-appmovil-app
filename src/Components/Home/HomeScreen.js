import React from 'react'
import { PageHeader } from 'antd'
import logo from '../../Assets/HomeDisplay.png'

const HomeScreen = () => {
  return (
    <div>
      <PageHeader title='¡Bienvenido!' style={{display:'flex', justifyContent:'center', fontSize:'50px'}}/>
      <div className="site-layout-content">
        <img style={{maxWidth:'100%'}} src={logo} />
      </div>
    </div>
  )
}

export default HomeScreen