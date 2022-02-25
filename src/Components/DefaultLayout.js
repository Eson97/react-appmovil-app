import { Layout } from 'antd'
import React from 'react'
import Router from '../Routers/Router'
import { NavBar } from './NavBar'
import '../CSS/DefaultLayout.css'

const { Header, Content } = Layout

export const DefaultLayout = () => {
  return (
    <Layout className='layout'>
      <Header style={{ backgroundColor: '#fff' }}>
        <div className='logo' />
        <NavBar />
      </Header>
      <Content style={{ minHeight: '100vh', padding: '0 50px'}}>
        <Router />
      </Content>
    </Layout>
  )
}
