import CURR_VERSION from '../../config/version.json'
import Button from '../../common/Button';
import Input from '../../common/Input';
import { Link, useNavigate} from 'react-router-dom';

/**
 *  登陆组件 Login
 */ 
export default function Login() {
    const navigate = useNavigate();

    const login = () => {
        navigate('/identity')
    }

    return (
        <div className='login-register-wrapper'>
            <h2 style={{ textAlign: 'center' }}>SECRET CHAT</h2>
            <Input placeholder='Username' id="login_username" type='text' />
            <Input placeholder='Password' id="login_password" type='password' />
            <Button content='Login' onClick={login} />
            <h6 style={{ margin: 20, display: 'block', alignItems: 'flex-start' }}>
                <Link to='/register' style={{ color: 'yellow', textDecoration: 'none', marginRight: 30 }}>Register</Link>
                <span style={{ float: 'right', marginLeft: 10 }}>Designed By R.Wu</span>
                <span style={{ float: 'right' }}>v{CURR_VERSION.version}</span>
            </h6>
        </div>
    )
}

