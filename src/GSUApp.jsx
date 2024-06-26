import {Header} from "./components/Header/index.jsx";
import {NavBar} from "./components/NavBar/index.jsx";
import {Widget} from "./components/Widget/index.jsx";

import  './index.css'

const GSUApp = ({router}) => {
    const GsuRouter = router ?? false
    return (
        <>
            <Header></Header>
            <div className={'gsu-app'}>
                <NavBar router ={GsuRouter}></NavBar>
                <Widget router={GsuRouter}></Widget>
            </div>
        </>
    )
}

export default GSUApp
