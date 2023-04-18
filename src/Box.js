import React,{useState} from "react";
import List from "./List";
import data from './data';

function Box(){
    const [list, setList]=useState(data);

    return(
        <div className="Box bs-shadow-5 ">

            <h2 className="heading">5 buddaay today</h2>

            <List list={list}/>


            <button className="button" 

                onClick={
                    ()=> setList([])
                }
                
            >CLEAR</button>

        </div>



    );
}


export default Box;