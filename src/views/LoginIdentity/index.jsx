import {useNavigate} from 'react-router-dom';
import Button from '../../common/Button';
const ipcRenderer = window.ipcRenderer

/**
 *  身份选择组件 LoginIdentity
 */ 
export default function LoginIdentity(){
    const navigate = useNavigate()

    const loginWithIndentity = (identity) => {
        return () => {
            navigate(`/main/${identity}`)
            ipcRenderer.send('login')
        }
    }

    return(
        <div className='login-register-wrapper expand'>
            <h2 style={{ textAlign: 'center' }}>SECRET CHAT</h2>
            <h3 style={{ textAlign: 'center' }}>YOU ARE ...</h3>
            <Button content='A' onClick={loginWithIndentity('A')} />
            <Button content='B' onClick={loginWithIndentity('B')} />
        </div>
    )
}
