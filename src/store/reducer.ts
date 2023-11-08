import * as actions from './actionsTypes';

let lastId = 0;

export default function reducer(state: any[] = [], action: any): any[] {
  switch (action.type) {
    case actions.TASK_ADD:
      return [...state, {
        id: ++lastId,
        title: action.payload.title,
        completed: false,
        
      }];

    case actions.TASK_TOGGLE:
      return state.map((task: any) => {
        //???
        if (task.id === action.payload.id)
          return { ...task, completed: !task.completed }
        return task;
      });

    case actions.TASK_REMOVE:
      return state.filter((task: any) => action.payload.id !== task.id);

    default:
      return state;
  }
}