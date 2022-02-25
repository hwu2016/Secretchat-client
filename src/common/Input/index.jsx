import './index.css'
import PropTypes from 'prop-types'

export default function Input(props){
    return(
        <div>
            <input 
                className='input' 
                placeholder={props.placeholder} 
                spellCheck="false" 
                type={props.type} 
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
}

