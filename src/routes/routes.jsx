import FirstPage from "../pages/FirstPage.jsx";
import SecondPage from "../pages/SecondPage.jsx";
import ThirdPage from "../pages/ThirdPage.jsx";

export const router =[
    {
        component : <FirstPage/> ,
        path : '/first',
        name : 'First Page'
    },
    {
        component : <SecondPage/>,
        path : '/second',
        name : 'Second Page'
    },
    {
        component : <ThirdPage/>,
        path : '/third',
        name : 'Third Page'
    }
]