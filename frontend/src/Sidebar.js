import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        let matches = (path) => this.props.history.location.pathname.indexOf(path) > -1
        return <div className="sidebar col-sm-3 col-md-2 sidebar flex-shrink-1 bg-light pt-3" style={{minHeight: '100vh'}}>
            <div className="row logo-row">
              <img className="logo" src="/static/posthog-logo.png" />
              <div className="posthog-title">PostHog</div>
            </div>
            <ul className="nav flex-sm-column">
                <li><NavLink className="nav-link" exact to="/"><i className='fi flaticon-home' /> Dashboard</NavLink></li>
                <li><NavLink className="nav-link" exact to="/actions"><i className='fi flaticon-click' /> Actions</NavLink></li>
                {matches('/action') && [
                    <li key="1" className='nav-indent'><NavLink className='nav-link' to="/actions/live"><i className='fi flaticon-refresh' /> Live actions</NavLink></li>,
                    <li key="2" className='nav-indent'><NavLink className='nav-link' to="/actions/trends"><i className='fi flaticon-target' /> Trends</NavLink></li>
                ]}
                <li><NavLink className={"nav-link " + (matches('/person') && 'active')} to="/people"><i className='fi flaticon-speech-bubble' /> Users</NavLink></li>
                {matches('/people') && [
                    <li key="1" className='nav-indent'>
                        <NavLink className={"nav-link"} to="/people/cohorts">
                            <i className='fi flaticon-user' style={{margin: 0}} />
                            <i className='fi flaticon-user' style={{marginLeft: -4}} />
                            Cohorts
                        </NavLink></li>
                ]}
                <li><NavLink className="nav-link" to="/funnel"><i className='fi flaticon-cursor-1' /> Funnels</NavLink></li>
                <li><NavLink className="nav-link" to="/events"><i className='fi flaticon-zoom-in' /> Events</NavLink></li>
                <li><NavLink className="nav-link" to="/paths"><i className='fi flaticon-shuffle-1' style={{transform: 'rotate(180deg)'}} /> Paths</NavLink></li>
                <li><NavLink className="nav-link" to="/setup"><i className='fi flaticon-settings' /> Setup</NavLink></li>
            </ul>
        </div>
    }
}
export default withRouter(Sidebar);