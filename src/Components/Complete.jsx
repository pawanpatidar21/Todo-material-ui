import React from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getdata } from '../Reducers/action'
import useStyles from './Style';
import { Button, Card, Checkbox, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DeleteForever from '@material-ui/icons/DeleteForever';
const Complete = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const {todo} = useSelector((state)=>state)
   
    const updateTodo = todo.filter((el) => el.status === true)
    console.log("Truedata",updateTodo)
    
    useEffect(() => {
        dispatch(getdata())
    },[])
    return (
        <div className={classes.div_margin}>
            {updateTodo.map((el) => (
                
                <Card key={el.id} className={classes.Card4}>
                    <div className={classes.Item_div1}>

                        <Typography className={classes.Item_div_sub} variant="h3">
                            {el.title}
                        </Typography>
                    </div>
                    <div className={classes.Item_div2}>
                     
                        <Button  startIcon={<DeleteForever />} className={classes.Item_div_button} variant="contained" color="secondary">Delete</Button>
                        <Link className={classes.Text_style} to={`/item/${el.id}/edit`}>
                            <Button className={classes.Item_div_button} variant="contained" color="primary">EDIT</Button>
                        </Link>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default Complete
