import { useLocation } from "react-router-dom"
import handleLocation from '../../utils/handleLocation'

export default function Info(){
    const location = useLocation().pathname;

    return(
        <div className="mainwindow-info">
            {handleLocation(location)}
        </div>
    )
}
