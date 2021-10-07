import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import moment from 'moment';
import './TodoHeader.css';
import DialogModal from '../Dialog/DialogModal';

const whiteColor = '#fff';

const styles = {
    wrapper:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%'
    },
    finished: {
        fontSize: '45px',
        color: whiteColor,

    },
    total: {
        display: 'flex',
        flexDirection: 'column',
        color: whiteColor
    },
    weekDay:{
        color: whiteColor,
        fontSize: '20px',
    },
    date:{
        color: whiteColor,
        fontSize: '20px',
        marginLeft: 10
    }
}


const TodoHeader = () => {
    const weekDay = moment().format('dddd');
    const date = moment().date();
    return (
        <div className='todo-header'>
            <div style={styles.wrapper}>
                <div className='todos-count'>
                    <span style={styles.finished}>2</span>

                    <div style={styles.total}>
                        <span>Tasks</span>
                        <span>/ 10</span>
                    </div>
                </div>
                <div>
                  <span style={styles.weekDay}>{weekDay}</span>
                  <span style={styles.date}>{date}</span>  
                </div>
            </div>
            <div className='add-todo'>
                <AddCircleIcon color='primary' /> 
                <span className="icon-background" />
            </div>
            <DialogModal />
        </div>
    )
}

export default TodoHeader;