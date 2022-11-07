import {BrowserRouter, Route, Router} from 'react-router-dom'
import Home from './pages/Home'
import Print from './pages/Print'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home}  path='/' />
            <Route component={Print} path='/print'/>
        </BrowserRouter>
    )
}

export default Routes