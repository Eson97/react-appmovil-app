import { message, Breadcrumb, Button, PageHeader, Select, Table, Tag, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { DownloadApp, GetAppsWithVersion } from '../../Services/AppService.js'

const { Option } = Select;

export const DownloadScreen = () => {

  const [Data, setData] = useState({ loading: true, data: [] });
  const [Usuario, setUsuario] = useState('1');

  useEffect(() => {
    const GetData = async () => {
      const result = await GetAppsWithVersion();
      setData({ loading: false, data: result });
    }
    GetData();
  }, []);

  const { data, loading } = Data;

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
      render: (text, record) =>
        <div style={{ display: 'flex', justifyContent: 'center' }} >
          {
            record.id % 2 === 0 &&
            <Tag style={{ fontSize: '15px' }} color='processing'>LTS</Tag>
          }
          <Tag style={{ fontSize: '15px' }} color='purple'>{record.version}</Tag>
        </div>
    },
    {
      title: 'Descargar',
      dataIndex: '',
      key: 'x',
      render: (text, record) =>
        <div style={{ display: 'flex', justifyContent: 'center' }} >
          <Button type='primary' onClick={() => hanldeOnClick(record)}>Descargar</Button>
        </div>
    }
  ];

  const handleChange = (value) => {
    setUsuario(value)
    message.success(`Se ha seleccionado el usuario ${value}`)
  }

  const hanldeOnClick = async (value) => {
    const res = await DownloadApp({ idAppVersion: value.id, idUsuario: parseInt(Usuario) });
    if (res.status === 200)
      message.success(`Se ha descargado la app ${value.nombre}`);
    else
      message.error(`Algo salio mal (Error: ${res.status})`);
  }

  return (
    <div>
      <PageHeader title='Descarga la ultima version de una App' style={{ display: 'flex', justifyContent: 'center' }} />
      <Breadcrumb style={{ margin: '16px' }}>
        <Breadcrumb.Item href='/'>
          <span>Inicio</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span>Apps</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item className='pointer-mouse'>
          <span>Descargar</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
          <p style={{ margin: '5px 10px 0 0' }}>Usuario: </p>
          <Select onChange={handleChange} defaultValue='1' style={{ width: 120, margin: '0 0 20px 0' }}>
            <Option value='1'>Jorge</Option> {/* Obtener valores desde la Api?*/}
            <Option value='2'>Luis</Option>
            <Option value='3'>Fernando</Option>
          </Select>
        </div>
        {
          (loading)
            ? <Spin size='large' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }} />
            : <Table dataSource={data} columns={columns} pagination={{ position: ['none', 'none'] }} />
        }
      </div>
    </div>
  )
}
