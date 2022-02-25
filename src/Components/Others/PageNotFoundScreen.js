import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const PageNotFoundScreen = () => {

    let navigate = useNavigate();

    const RedirectHome = () => {
        navigate('/');
    }

    return (
        <Result
            status="404"
            title="404"
            subTitle="Lo sentimos, la página que visitaste no existe."
            extra={<Button type="primary" onClick={RedirectHome}>Regresar a inicio</Button>}
        />
    )
}
