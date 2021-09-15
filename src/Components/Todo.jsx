import { Button, Card } from '@material-ui/core'
import React,{useState} from 'react'
import TodoInput from './TodoInput'
import useStyles from './Style';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deletedata, getdata, toggledata } from '../Reducers/action';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import LaunchIcon from "@material-ui/icons/Launch";
import {Link} from 'react-router-dom'
import usePagination from './Pagination';
import { Pagination } from "@material-ui/lab";


const Todo = () => {
    const { todo, Loading, Error } = useSelector((state) => state)
    console.log(Loading,Error)
    console.log(todo)
    const dispatch = useDispatch()
    const classes = useStyles()
    useEffect(() => {
        dispatch(getdata())
    }, [dispatch])
    

    const handleToggle = (el) => {
    
        dispatch(toggledata(el))
        dispatch(getdata())
    }
    const handledelete = (id) => {
    
        dispatch(deletedata(id))
        dispatch(getdata())
    }

    //----------------------------
let [page, setPage] = useState(1);
  const PER_PAGE = 4;
  const count = Math.ceil(todo.length / PER_PAGE);
  const _DATA = usePagination(todo, PER_PAGE);

   const handleChange = (e, p) => {
    setPage(p);
     _DATA.jump(p);
     console.log(p)
  }
 



    return Loading?<div>Loading...</div>:Error?<div>Some Thing Happen Wrong</div>: (
        <>
            <TodoInput />
         
        <div>
            
            {_DATA.currentData().map((el) => (
                    <Card key={el.id} className={classes.Card2}>
                        <div className={classes.Item_div1}>
                            <LabelImportantIcon style={{ fontSize: "50px", color: "darkblue" }} />
                            <Typography className={classes.Item_div_sub} variant="h3">
                                {el.title}
                            </Typography>
                        </div>
                        <div className={classes.Item_div2}>
                            <Checkbox checked={el.status === true} onChange={() => handleToggle(el)}
                        

                               
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            
                            <Button onClick={()=>handledelete(el.id)} startIcon={<DeleteForeverIcon />} className={classes.Item_div_button} variant="contained" color="secondary">Delete</Button>
                            <Link className={classes.Text_style} to={`/item/${el.id}`}>
                                <Button startIcon={<LaunchIcon />} className={classes.Item_div_button} variant="contained" color="primary">OPEN</Button>
                            </Link>
                        </div>
                    </Card>

                    
                ))
            }
            
           
            <Pagination className={classes.pagination}
                count={count}
                size="large"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
            />
            </div>
            </>
    )
}

export default Todo
