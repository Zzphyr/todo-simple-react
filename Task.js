import React from 'react';

const Task = ({ task, onClickTask }) => {
    // if(task.isDone) {
    //     return <li><del>{task.text}</del></li>
    // } else {
    //     return <li>{task.text}</li>
    // }
    const handleClickTask = () => {
        onClickTask(task);
    }

    return (
        <li onClick={handleClickTask} className={task.isDone ? 'done' : ''}>
            {task.text}
        </li>
    )
}

export default Task;