import { Button, Card,   TextField } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import useStyles from './Style'
import { useSelector,useDispatch} from 'react-redux'
import { adddata } from '../Reducers/action'
const TodoInput = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    
    const [item, setItem] = useState("")
    const handleSubmit = () => {
        const payload = {
            title: item,
            status: false,
            id:Date.now()
        }
        console.log(payload)
        dispatch(adddata(payload))
        setItem("")
        
    }
    return (
        <div>
            <Card className={classes.Card1}>
                
                   
                <TextField value={item} onChange={(e)=>setItem(e.target.value)} className={classes.Input_feild} id="outlined-basic" label="Enter Item..." placeholder="Please Enter Item" variant="outlined" />
                
                <Button onClick={handleSubmit} className={classes.button_search} variant="contained" color="secondary">
                    Add-Todo
                </Button>
              
            </Card>
        </div>
    )
}

export default TodoInput
