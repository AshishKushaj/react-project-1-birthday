import React,{useState} from "react";
import List from "./List";
import data from './data';

function Box(){
    const [list, setList]=useState(data);
    const [n,setN]= useState(5);

    return(
        <div className="Box bs-shadow-5 ">

            <h2 className="heading">{n} buddaay today</h2>

            <List list={list}/>


            <button className="button" 

                onClick={
                    ()=> {
                        setList([])
                        setN(0)
                    }
                }
                
            >CLEAR</button>

        </div>



    );
}


export default Box;