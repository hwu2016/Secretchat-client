import { useState } from "react";

/**
 * 文本输入组件Editor
 */
export default function Editor(){
    const [content, setContent] = useState('')

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    /**
     * @NeedReproduction
     * 
     */
    const sendMessage = (e) => {
        if (e.key === 'Enter') {
            console.log(`send: ${content}`);
            e.preventDefault()
            setContent('')
        }
    }

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
