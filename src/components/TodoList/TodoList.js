import React, { useState } from 'react';
import { Row, Col, Button, FormControl } from 'react-bootstrap';
import s from './List.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faLock, faLockOpen, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'

export const TodoList = ({ todo, setTodo, saveInLS }) => {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

 

    const deleteTodo = (id) => {
        let newTodo = [...todo].filter(item => item.id != id)
        setTodo(newTodo)
        saveInLS(newTodo)
        
    }
    const statusTodo = (id) => {
        let newTodo = [...todo].filter(item => {
            if (item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    const editTodo = (id,title) => {
        setEdit(id)
        setValue(title)
    }

    const saveTodoChange = (id) => {
        let newTodo = [...todo].map(item => {
            if (item.id == id){
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }





    return (
        <div>
            {
                todo.map((item) => (
                    <div key={item.id} className={s.listItems}>
                        {
                            edit === item.id ?
                                <div>
                                    <input  value ={value} onChange={(el) => setValue(el.target.value)} />
                                </div>
                                :
                                <div className={ !item.status ? s.close : ''}>{item.title}</div>
                        }
                        {
                            edit === item.id ?
                                <div>
                                    <Button  onClick={() => saveTodoChange(item.id)}><FontAwesomeIcon icon ={faSave}/></Button>

                                </div> :
                                <div>
                                    <Button  onClick={() => deleteTodo(item.id)}><FontAwesomeIcon icon ={faTrash}/></Button>
                                    <Button className={s.btn} onClick={() => editTodo(item.id, item.title)}><FontAwesomeIcon icon ={faEdit}/></Button>
                                    <Button className={s.btn} onClick={() => statusTodo(item.id)}>
                                        {
                                            item.status  ? <FontAwesomeIcon icon ={faLockOpen}/> : <FontAwesomeIcon icon ={faLock}/>  
                                        }
                                    
                                    </Button>

                                </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}
