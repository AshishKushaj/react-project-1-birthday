import React from "react";


const PeopleList= ({people}) =>{

    return(
        <React.Fragment>
            {
                people.map(person =>{
                    const {id , name , age , pic} = person;

                    return(
                        <div key={id} className="person">
                            <img src={pic} alt={name}/>

                            <div>
                                <h4>{name}</h4>
                                <p>Age : {age}</p>
                            </div>
                        </div>
                    )
                })
            }
       
       </React.Fragment>
    );
}

export default PeopleList;