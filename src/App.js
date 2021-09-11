import React from 'react'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import Overview from './pages/Overview'
import { Report2, Reports, Report3 } from './pages/reports'
import Products from './pages/Products'
import Team from './pages/Team'
import { Messages, Messages1, Messages2 } from './pages/Messages'
import Support from './pages/Support'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Sidebar/>
                <Switch>
                    <Route path='/overview' exact component={Overview}/>
                    <Route path='/reports' exact component={Reports}/>
                    <Route path='/reports/reports1' exact component={Reports}/>
                    <Route path='/reports/reports2' exact component={Report2}/>
                    <Route path='/reports/reports3' exact component={Report3}/>
                    <Route path='/products' exact component={Products}/>
                    <Route path='/team' exact component={Team}/>
                    <Route path='/messages' exact component={Messages}/>
                    <Route path='/messages/message1' exact component={Messages1}/>
                    <Route path='/messages/message2' exact component={Messages2}/>
                    <Route path='/support' exact component={Support}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App

