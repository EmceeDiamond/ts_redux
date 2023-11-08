import * as actions from './actionsTypes';

export const addTask = (task: any) => ({
  type: actions.TASK_ADD,
  payload: task
});

export const toggleTask = (id:string) => ({
  type: actions.TASK_TOGGLE,
  payload: { id }
});

export const removeTask = (id:string) => ({
  type: actions.TASK_REMOVE,
  payload: { id }
})