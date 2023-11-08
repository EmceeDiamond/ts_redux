import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Task from './Task';


const TaskList = ({ tasks}:{tasks:any}) => {

  if (tasks.length)
  return <>{
    // !!!ListGroup
    //<ListGroup>
        tasks.map((task:any) => (
          <div>
          <Task key={task.id} task={task} />
          </div>
        ))
    //</ListGroup>
  }</>
  else {
    return null;
  }
}

export default TaskList;