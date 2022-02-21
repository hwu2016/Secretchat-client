import './index.css'
import PropTypes from 'prop-types'

export default function Button(props) {
    return (
        <button
            className="button"
            onClick={props.onClick}
            disabled={props.disabled}
            style={props.style}
        >
            {props.content}
        </button>
    )
}

Button.propTypes = {
    content: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    style: PropTypes.object
}
