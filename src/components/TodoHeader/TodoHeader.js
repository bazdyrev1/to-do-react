import React from 'react';
import './TodoHeader.css';
import moment from 'moment';

const TodoHeader = () => {
    const weekDay = moment().format('dddd');
    const date = moment().date();
    return (
        <div>
            <div>
                <div className='todos-count'>
                    <span></span>

                    <div>
                        <span>Tasks</span>
                        <span>total count</span>
                    </div>
                </div>
                <div>
                  <span>{weekDay}</span>
                  <span>{date}</span>  
                </div>
            </div>
            <div className='add-todo'>

            </div>
        </div>
    )
}

export default TodoHeader;