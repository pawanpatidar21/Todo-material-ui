import React from 'react'
import { useParams,useHistory } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';
import useStyles from './Style';
import { Button, Card, Checkbox, Typography } from '@material-ui/core';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { deletedata, editdata, getdataindividual } from '../Reducers/action';
import Modal from "@material-ui/core/Modal";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import UpdateIcon from '@material-ui/icons/Update';
import CancelIcon from '@material-ui/icons/Cancel';





const TodoIndividual = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { id } = useParams()
    const history = useHistory()

    const todo = useSelector((state) => state)

  
    useEffect(() => {
        dispatch(getdataindividual(id))
       
    }, [])
    const handleDelete = () => {
        dispatch(deletedata(id))
        history.push('/')
    }

    const [newValue, setNewValue] = useState(todo.title)
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const edithandle = (todo) => {
        console.log("editdataget", todo)
        dispatch(editdata(todo,newValue))
         setOpen(false)
        dispatch(getdataindividual(todo))
        
    }

   


    return (
        <>
        <div style={{ marginTop: "150px" }}>
            <Card   className={classes.Card3}>
                <div className={classes.Item_div1}>
                  
                    <Typography className={classes.Item_div_sub} variant="h3">
                        {todo.individualItem.title}
                    </Typography>
                </div>
                <div className={classes.Item_div2}>
                

                    <Button onClick={handleDelete} startIcon={<DeleteForever />} className={classes.Item_div_button} variant="contained" color="secondary">Delete</Button>
                  
                        <Button className={classes.Item_div_button} onClick={handleOpen} variant="contained" color="primary">EDIT</Button>
              
                </div>

            </Card>
            </div>
            <div>
                <Modal className={classes.paper} open={open} onClose={handleClose}>
                    <Container className={classes.modalCont}>
                        <Typography variant="h6" style={{ margin: "30px auto" }}>
                            Update Your Task
                        </Typography>
                        <TextField
                            required
                            size="small"
                            id="filled-required"
                            label="Update your task"
                            variant="outlined"
                            value={newValue}
                            onChange={(e) => setNewValue(e.target.value)}
                            style={{ width: "100%" }}
                        />
                        <Box className={classes.flex}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<UpdateIcon />}
                                className={classes.itemBtn}
                                onClick={() => edithandle(todo)}
                            >
                                UPDATE
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<CancelIcon />}
                                className={classes.itemBtn}
                                onClick={handleClose}
                            >
                                CLOSE
                            </Button>
                        </Box>
                    </Container>
                </Modal>
            </div>

            </>
        
    )
}

export default TodoIndividual
