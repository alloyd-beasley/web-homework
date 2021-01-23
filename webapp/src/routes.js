import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import { contentStyle, layoutStyle } from './styles/AppStyles'
import Nav from "./components/Nav/Nav"

function AppRouter() {
  return (
    <Router>
      <div css={layoutStyle}>
        <Nav />
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={() => (<div>Content for /another route</div>)} exact path='/Insights' />
        </div>
      </div>
    </Router>
  )
}


export default AppRouter






