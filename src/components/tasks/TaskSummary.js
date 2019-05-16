import React from 'react';
import moment from 'moment';

const TaskSummary =({task}) => {
    return (
        <div className="card z-depth-0 task-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{task.title}</span>
                <p>Опублікував {task.authorFirstName} {task.authorLastName}</p>
                <p className="grey-text">{moment(task.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default TaskSummary;