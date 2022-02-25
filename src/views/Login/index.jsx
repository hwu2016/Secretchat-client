import CURR_VERSION from '../../config/version.json'
import Button from '../../common/Button';
import Input from '../../common/Input';
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import { loginUser } from '../../apis';

/**
 *  登陆组件 Login
 */ 
export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const alert = useAlert()

    const login = async () => {
        if (username.trim() === '' || password.trim() === '') {
            alert.error('Username or Password cannot be empty!')
            return
        } 
        const user = {
            username,
            password,
            identityA: '',
            identityB: ''
        }
        let res = await loginUser(user)
        if (res.data.status === 0) {
            const {identityA, identityB} = res.data.data 
            alert.success('Login Success!')
            navigate(`/identity/${identityA}&${identityB}`)
        } else {
            alert.error(res.data.msg)
        }
    }

    return (
        <div className='login-register-wrapper'>
            <h2 style={{ textAlign: 'center' }}>SECRET CHAT</h2>
            <Input placeholder='Username' id="login_username" type='text' onChange={e => setUsername(e.target.value)}/>
            <Input placeholder='Password' id="login_password" type='password' onChange={e => setPassword(e.target.value)}/>
            <Button content='Login' onClick={login} />
            <h6 style={{ margin: 20, display: 'block', alignItems: 'flex-start' }}>
                <Link to='/register' style={{ color: 'yellow', textDecoration: 'none', marginRight: 30 }}>Register</Link>
                <span style={{ float: 'right', marginLeft: 10 }}>Designed By R.Wu</span>
                <span style={{ float: 'right' }}>v{CURR_VERSION.version}</span>
            </h6>
        </div>
    )
}

