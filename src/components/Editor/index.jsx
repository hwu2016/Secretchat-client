import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 
import handleLocation from "../../utils/handleLocation";

/**
 * 文本输入组件Editor
 */
export default function Editor(){
    const [content, setContent] = useState('')
    const [currIdentity, setCurrIdentity] = useState('')

    const location = useLocation().pathname

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    /**
     * @NeedReproduction
     * 
     */
    const sendMessage = (e) => {
        if (e.key === 'Enter') {
            console.log(`send: ${content} from ${currIdentity}`);
            e.preventDefault()
            setContent('')
        }
    }

    useEffect(() => {
        setCurrIdentity(handleLocation(location))
    }, [location])

    return(
        <div className="mainwindow-editor">
            <textarea 
                className="mainwindow-text-area" 
                onChange={onChangeContent}
                value={content}
                onKeyDown={sendMessage}
            />
        </div>
    )
}
