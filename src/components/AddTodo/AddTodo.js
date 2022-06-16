import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Row, Col, Button, FormControl } from 'react-bootstrap'
import s from './AddTodo.module.css'

export const AddTodo = ({ todo, setTodo }) => {
    const [value, setValue] = useState('')

    const saveTodo = () => {
        if (!value) {
            return
        }
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true,
            }]
        )
        setValue('')
    }



    return (
        <Row>
            <Col className={s.addTodoForm}>
                <FormControl placeholder='Add task' value={value} onChange={(e) => setValue(e.target.value)} />
                <Button className={s.btn} onClick={saveTodo}>Save</Button>
            </Col>
        </Row>

    )
}
