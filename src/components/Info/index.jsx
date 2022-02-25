import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function Info(){
    const location = useLocation().pathname;

    const handleLocation = (loc) => {
        const len = loc.length
        let i = len - 1;
        while (i > 0) {
            if (loc[i] === '/') {
                break
            }
            i--
        }
        return loc.slice(i + 1, len)
    }

    useEffect(() => {
        // console.log(handleLocation(location));
    }, [])

    return(
        <div className="mainwindow-info">
            {handleLocation(location)}
        </div>
    )
}
