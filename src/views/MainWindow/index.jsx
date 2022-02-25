import Action from '../../components/Action'
import Editor from '../../components/Editor'
import Info from '../../components/Info'
import Panel from '../../components/Panel'

import './index.css'
/**
 * 主窗口组件 MainWindow
 */
export default function MainWindow(){
    return(
        <div className="mainwindow-wrapper">
            <div className="mainwindow-left">
                <Info/>
                <Action/>
            </div>
            <div className="mainwindow-right">
                <Panel/>
                <Editor/>
            </div>
        </div>
    )
}
