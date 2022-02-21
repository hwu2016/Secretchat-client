import { Link } from 'react-router-dom';


/**
 * 注册帮助组件 RegisterHelp
 */
export default function RegisterHelp(){
    return(
        <div className='help-wrapper'>
            <h2 style={{ textAlign: 'center' }}>SECRET CHAT</h2>
            <h5 style={{margin: 5}}>About the App</h5>
            <p>
                A secret chatting app for only two identities, either couples or best friends, etc., 
                featuring on the secret mode of chat, where messages fade out after being read 
                and would not disclose any information
            </p>
            <h5 style={{margin: 5}}>What Is Identity</h5>
            <p>
                Each account registration needs to specify two identities as a pair. You can simply
                regard the identity as a role. In a chatting room, each person plays a role, no outers
                allowed. Both identities share the same username and password.
            </p>
            <h5 style={{margin: 5}}>About the Author</h5>
            <p>
                Hi, I'm Ryan Wu. Thanks for using the Secretchat app. This version is only used for 
                learning and no unauthorized commercial activities are allowed. Please contact me by
                szwh1998@gmail.com or the github @hwu2016
            </p>
            <h6>
                <Link to='/register' style={{ color: 'yellow', textDecoration: 'none' }}>Back</Link>
            </h6>
        </div>
    )
}
