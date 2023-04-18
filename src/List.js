import React from "react";

function List({list}){


    return (
        <div className="list">

            {
                list.map(person =>{

                    const {id, name, age, image}=person;

                    return(

                        <div className="person">
                            
                            <img className="image" src={image} alt={name}  />

                            <div>
                                <h3 className="name">{name}  </h3>
                                <p className="age">{age} Yeaaars</p>
                               
                            </div>
 
                        </div>

                    )
                })
            }

        </div>
    )
}


export default List;