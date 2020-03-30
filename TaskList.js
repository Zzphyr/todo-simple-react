import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onClickTask }) => (
    <ul>
        {tasks.map((task) => (
            <Task key={task.text} task={task} onClickTask={onClickTask}/>
        ))}
    </ul>
)

export default TaskList;