import React, { Component } from 'react';

class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            text: this.state.value,
            isDone: false,
        }
        // only submit if not empty string
        if(this.state.value) {
            this.props.onSubmit(newTask);
        }
        this.setState({ value: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="text">Task:</label>
                <input
                    type="text"
                    name="text"
                    id="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Add"/>
            </form>
        )
    }
}

export default TaskInput;