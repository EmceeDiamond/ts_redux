import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, ListGroup } from 'react-bootstrap';
import { toggleTask, removeTask }  from '../store/actions';

const Task = ({ task }:{task:any}) => {
  const { id, title, completed }= task;
  const dispatch = useDispatch();

  return (
    <ListGroup.Item className={completed && 'task-completed'}>
      <Form.Check
        id={id}
        type="checkbox"
        label={title}
        checked={completed}
        onChange={ () => dispatch(toggleTask(id))}
      />
      <div className="list-group-item-actions">
        <span onClick={() => dispatch(removeTask(id))}>Delete</span>
      </div>
    </ListGroup.Item>
  )
}

export default Task;