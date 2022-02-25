import { Breadcrumb, Button, Form, Input, message, PageHeader, Select, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { GetApps } from '../../Services/AppService';
import { AddVersion } from '../../Services/VersionService';

const { Option } = Select;

export const VersionsScreen = () => {

  const [Data, setData] = useState({ loading: true, data: [] });

  useEffect(() => {
    const GetData = async () => {
      const result = await GetApps();
      setData({ loading: false, data: result });
    }
    GetData();
  }, []);

  const { data: Apps, loading } = Data;

  const onFinish = async (values) => {
    const data = { ...values, fechaPublicacion: null }
    const res = await AddVersion(data);
    if (res.status === 200)
      message.success('Se agrego con exito la nueva version');
    else
      message.error(`Algo salio mal (Error: ${res.status})`);
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }
  const handleChange = (value) => {
    console.log(value);
  }

  const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  return (
    <div>
      <PageHeader title='Agrega una nueva version a una App' style={{ display: 'flex', justifyContent: 'center' }} />
      <Breadcrumb style={{ margin: '16px' }}>
        <Breadcrumb.Item href='/' >
          <span>Inicio</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item className='pointer-mouse'>
          <span>Agregar</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        {
          loading
            ? <Spin size='large' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }} />
            : <Form
              name='basic'
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
              style={{ margin: '10% 0' }}
            >
              <Form.Item label='App' name='idApp' rules={[{ required: true, message: 'Seleccione una app' }]}>
                <Select onChange={handleChange}>
                  {
                    Apps.map(e => <Option key={e.key} value={e.id}>{e.nombre}</Option>)
                  }
                </Select>
              </Form.Item>
              <Form.Item label='Version' name='appVersion1' rules={[{ required: true, message: 'Ingrese una version para la app' }]}>
                <Input />
              </Form.Item>
              <Form.Item label='Url' name='urlDescarga' rules={[{ required: true, message: 'Ingrese una url' }]}>
                <Input addonBefore={selectBefore} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 16, span: 16 }}>
                <Button type='primary' htmlType='submit'>Agregar</Button>
              </Form.Item>
            </Form>
        }
      </div>
    </div>
  )
}
