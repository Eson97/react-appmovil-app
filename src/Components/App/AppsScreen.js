import { Breadcrumb, Button, Form, Input, message, PageHeader } from 'antd'
import React from 'react'
import { AddApp } from '../../Services/AppService'

export const AppsScreen = () => {

  const onFinish = async (values) => {
    const res = await AddApp(values);

    if (res.status === 200)
      message.success(`Se ha agregado con exito la app ${values.nombre}`);
    else
      message.error(`Algo salio mal (Error: ${res.status})`);
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  return (
    <div>
      <PageHeader title='Agrega una nueva App' style={{ display: 'flex', justifyContent: 'center' }} />
      <Breadcrumb style={{ margin: '16px' }}>
        <Breadcrumb.Item href='/'>
          <span>Inicio</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span>Apps</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item className='pointer-mouse'>
          <span>Agregar</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <Form
          name='basic'
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
          style={{ margin: '10% 0' }}
        >
          <Form.Item label='Nombre' name='nombre' rules={[{ required: true, message: 'Ingrese un nombre para la app' }]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
            <Button type='primary' htmlType='submit'>Agregar</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
