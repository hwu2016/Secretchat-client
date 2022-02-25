import CURR_VERSION from '../../config/version.json'
import Button from '../../common/Button';
import Input from '../../common/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../../apis';
import { useAlert } from 'react-alert';


/**
 * 注册界面组件 Register 
 */
export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [retypePwd, setRetypePwd] = useState('')
    const [identityA, setIdentityA] = useState('')
    const [identityB, setIdentityB] = useState('')
    const [status, setStatus] = useState(false)

    const navigate = useNavigate()
    const alert = useAlert()


    const register = async () => {
        let res
        switch (validateForm(username,password, retypePwd, identityA, identityB)){
            case 1: 
                alert.error('Passwords typed were not the same! Please retype the password!')
                return
            case 2:
                alert.error('All the fields should be completed to submit')
                return
            default:
                const user = {
                    username,
                    password,
                    identityA,
                    identityB
                }
                res = await registerUser(user)

        }
        if (res.data.status === 0) {
            setStatus(true)
            alert.success("Register Success!")
            setTimeout(() => {
                navigate('/')
            }, 2000)
        } else {
            alert.error(res.data.msg)
        }
    }

    const validateForm = (username, pwd, rpwd, identityA, identityB) => {
        if (pwd !== rpwd) {
            return 1
        }
        if (username.trim() === '' || pwd.trim() === '' || identityA.trim() === '' || identityB.trim() === '') {
            return 2
        }
    }


    return (
        <div className='login-register-wrapper'>
            <h2 style={{ textAlign: 'center' }}>SECRET CHAT</h2>
            <Input placeholder='Username' id="register_username" type='text' onChange={e => setUsername(e.target.value)}/>
            <Input placeholder='Password' id="register_password" type='password' onChange={e => setPassword(e.target.value)}/>
            <Input placeholder='Confirm Password' id="register_password_confirm" type='password' onChange={e => setRetypePwd(e.target.value)}/>
            <Input placeholder='Identity A' id="register_id_A" type='text' onChange={e => setIdentityA(e.target.value)}/>
            <Input placeholder='Identity B' id="register_id_B" type='text' onChange={e => setIdentityB(e.target.value)}/>
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
