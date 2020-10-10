import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css'
import { Button, Card, Input, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './index.css'
import axios from 'axios'
import { history } from 'umi'

interface cache {
    username: string,
    psw: string,
}
const userForm = {
    username: 'a@qq.com',
    psw: '123456Aa',
}
export default (props: cache) => {
    const [username, getUserName] = useState('');
    const [psw, getPsw] = useState('');
    const handleForm = () => {
        const params = {
            fUserName: username,
            fPsw: psw
        }
        const url = 'http://localhost:3000/test';
        axios.post(url, {
            params: params
        })
            .then(res => {
                console.log(res.data)
                message.success('login success')
                history.push('/Test')
            }
        )
    }
    return (
        <div className='content flex-row'>
            <Card title='Login'>
                <div className='flex-col'>
                    <Input
                        className='input'
                        prefix={<UserOutlined />}
                        value={username}
                        onChange={e => getUserName(e.target.value)}
                        allowClear
                    />
                    <Input.Password
                        className='input'
                        onChange={e => getPsw(e.target.value)}
                        allowClear
                    />
                    <div className='buttonGroup'>
                        <Button type='primary' onClick={handleForm}>Login</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

const handleForm1 = (username, psw) => {
    const url = 'http://localhost:3000/';
    axios.get(url, {
        params: {
            username: username,
            psw: psw
        }
    })
        .then(res => {
            if (res.status == 200) {
                console.log('success')
                message.success('Login successful!')
                history.push({
                    pathname: '/test',
                    query: {
                        username: res.data.username
                    }
                })
            }
        })
}