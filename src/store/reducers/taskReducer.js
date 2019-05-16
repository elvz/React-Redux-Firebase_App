const initState = {};

const taskReducer = (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'CREATE_TASK':
            console.log('created task', action.task);
            return state;
        case 'CREATE_TASK_ERROR':
            console.log(' create task error', action.err);
            return state;
        default: 
           return state; 
    }
}

export default taskReducer;