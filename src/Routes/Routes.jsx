import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Complete from '../Components/Complete'
import Navbar from '../Components/Navbar'
import Todo from '../Components/Todo'
import TodoIndividual from '../Components/TodoIndividual'

const Routes = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Todo />
                </Route>
                <Route path='/item/:id'>
                    <TodoIndividual/>
                </Route>
                <Route path="/completed">
                    <Complete/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
