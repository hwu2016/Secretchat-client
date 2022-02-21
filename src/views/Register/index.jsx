import CURR_VERSION from '../../config/version.json'
import Button from '../../common/Button';
import Input from '../../common/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


/**
 * 注册界面组件 Register 
 */
export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [pwdConfirm, setPwdConfirm] = useState('')
    const [idA, setIdA] = useState('')
    const [idB, setIdB] = useState('')
    const [status, setStatus] = useState(false)

    const navigate = useNavigate()

    const register = () => {
        setStatus(true)
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }

    return (
        <div className='login-register-wrapper'>
            <h2 style={{ textAlign: 'center' }}>SECRET CHAT</h2>
            <Input placeholder='Username' id="register_username" type='text' />
            <Input placeholder='Password' id="register_password" type='password' />
            <Input placeholder='Confirm Password' id="register_password_confirm" type='password' />
            <Input placeholder='Identity A' id="register_id_A" type='text' />
            <Input placeholder='Identity B' id="register_id_B" type='text' />
            <Button
                content={status ? 'Success' : 'Register'}
                onClick={register}
                disabled={status ? true : false}
                style={status ? { backgroundColor: '#077A20' } : {}}
            />
            <h6 style={{margin: 10}}>
                <Link
                    to='/register/help'
                    style={{ color: 'white', textDecoration: 'none', marginLeft: -65}}
                >
                    Help: What Is Identity? 
                </Link>
            </h6>
            <h6 style={{margin: 5, display: 'block', alignItems: 'flex-start'}}>
                <Link to='/' style={{ color: 'yellow', textDecoration: 'none', marginRight: 50 }}>Back</Link>
                <span style={{ float: 'right', marginLeft: 10}}>Designed By R.Wu</span>
                <span style={{ float: 'right' }}>v{CURR_VERSION.version}</span>
            </h6>
        </div>
    )
}
