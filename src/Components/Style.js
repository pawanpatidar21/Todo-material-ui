import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
   
    root: {
        display: "flex",
        justifyContent: "space-between",
        
    },
    tool_flex: {
        display: "flex",
        justifyContent: "space-between"
     
       
    },

    Card1: {
        display: "flex",
        width: "1000px",
        justifyContent:"center",
        border: "2px solid black",
      margin:"auto",
        marginTop: "100px",
        padding: 30,
        backgroundColor: "F0FFFF",
        boxShadow: "(rgba(100, 100, 111, 0.2) 0px 7px 29px 0px)"
        
        
    },
    Input_feild: {
        width:800
    },
    button_search: {
        height: "3.8vw",
        marginLeft:20
    }
    ,

    Card2: {
        display: "flex",
        width:"700px",
   
        border: "2px solid black",
        margin: "auto",
        alignItems:"center",
        marginTop: "10px",
        padding: 15,
        justifyContent: "space-between"

    },
    

    Card3: {
        display: "flex",
        width:"700px",
   
        border: "2px solid black",
        margin: "auto",
        alignItems:"center",
        marginTop: "40px",
        padding: 35,
        justifyContent: "space-between"

    },
        

    Card4: {
        display: "flex",
        width:"700px",
   
        border: "2px solid black",
        margin: "auto",
        alignItems:"center",
        marginTop: "20px",
        padding: 20,
        justifyContent: "space-between"

    },
    Item_div1: {
        display: "flex",
     
        alignItems: "center",
    },
    Item_div2: {
    
        display: "flex",
        padding: "0% 5%",
      
   
        alignItems: "center",
    },
    Item_div_sub: {
        marginLeft: "20px",
        fontSize:"30px"
        
    },
    Item_div_button: {
        marginLeft: "20px",
        fontSize:"15px"
        
    },
    Text_style: {
        textDecoration: "none",
        color:"white"
    },
    div_margin: {
        marginTop:80
    },

    pagination: {
        display: "flex",
        marginTop:20,
        justifyContent:"center"
       
       
        
    }
 



})

export default useStyles
// import { makeStyles } from "@material-ui/core/styles";

// export const useStyles = makeStyles((theme) => ({
//     navbar: {
//         display: "flex",
//         justifyContent: "space-between",
//     },

//     link: {
//         textDecoration: "none",
//         color: "white",
//         fontSize: "16px",
//     },
//     mainContainer: {
//         border: "2px solid #3F50B5",
//         borderRadius: "10px",
//         // height: "500px",
//         padding: "30px",
//     },
//     input: {
//         width: "350px",
//         marginBottom: "16px",
//     },
// }));
