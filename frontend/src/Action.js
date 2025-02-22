import React, { Component } from 'react';
import { EventsTable } from './Events';
import { ActionEdit } from './ActionEdit';


export default class Action extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newEvents: [],
            action: {id: this.props.match.params.id}
        }
    }
    render() {
        return <div>
            <h1>{this.props.match.params.id ? 'Edit action' : 'New action'}</h1>
            <ActionEdit
                apiURL=''
                user={this.props.user}
                actionId={this.state.action.id}
                onSave={(action) => {
                    this.setState({action, refresh: new Date()})
                    if(!this.props.match.params.id) {
                        this.props.history.push({
                            pathname: '/action/' + action.id,
                            state: {id: action.id}
                        })
                    }
                }}
            />
            {this.state.action.id && <div>
                <br /><br />

                <h2>Events</h2>
                <EventsTable
                    fixedFilters={{action_id: this.state.action.id}}
                    history={this.props.history}
                    key={this.state.refresh} // hack to force a refresh of events on update
                    />
            </div>}
        </div>
    }
}
