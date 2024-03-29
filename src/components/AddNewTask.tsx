import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import * as actions from '../store/actions';
import { useDispatch } from 'react-redux';

const AddNewTask = () => {
  //useState ???
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();

  const handleTaskTitleChange = (e: React.ChangeEvent<any>) => {
    setTaskTitle(e.target.value);
  }

  const handleTaskSubmit = () => {   
    dispatch(actions.addTask({
      title: taskTitle
    }));
    setTaskTitle('');
  }

  return (
    <InputGroup className="mb-3">
      <FormControl placeholder="Добавить новый таск" value={taskTitle} onChange={e => handleTaskTitleChange(e)} />
      <InputGroup>
        <Button variant="outline-secondary" onClick={handleTaskSubmit}>Сохранить</Button>
      </InputGroup>
    </InputGroup>
  )
}

export default AddNewTask;