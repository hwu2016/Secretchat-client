import { useEffect, useState } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import Button from '../../common/Button';
import handleLocation from '../../utils/handleLocation'
const ipcRenderer = window.ipcRenderer

/**
 *  身份选择组件 LoginIdentity
 */ 
export default function LoginIdentity(){
    const [identityA, setIdentityA] = useState('')
    const [identityB, setIdentityB] = useState('')

    const navigate = useNavigate()
    const location = useLocation().pathname

    useEffect(() => {
        const identities = handleLocation(location).split('&')
        setIdentityA(identities[0])
        setIdentityB(identities[1])
    }, [location])

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
            <Button content={identityA} onClick={loginWithIndentity(identityA)} />
            <Button content={identityB} onClick={loginWithIndentity(identityB)} />
        </div>
    )
}
