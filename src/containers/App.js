import React, {  useEffect ,useState } from 'react';
import data from '../components/data';
import PeopleList from '../components/PeopleList';


function App(){


    const [people, setPeople] =useState(data);


    // no img or age in  api

    // const [people, setPeople] =useState([]);
    
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users').then(user =>{
    //         return user.json();
    //     }).then((ans) =>{
    //         {setPeople(ans)}
    //     }).catch(() =>{
    //         alert("ERROR ERROR ERROR ERROR")
    //     });
    // });

    return(
        <main>
            <section className='container'>
                <h3>{people.length} birthdays</h3>

            <PeopleList people={people} />

            <button
                onClick={() => setPeople([])}
            >CLEAR ALL</button>
            

            </section>
        </main>
    )

}

export default App;