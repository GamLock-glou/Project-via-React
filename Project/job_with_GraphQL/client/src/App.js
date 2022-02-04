import './App.css';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_USERS } from './query/user';
import { CREATE_USER } from './mutatuons/user';

function App() {
  //_____________________Apollo___________________________
  const  {data, loading, error} = useQuery(GET_ALL_USERS)
  const [newUser] = useMutation(CREATE_USER)
  //_____________________________________________________

  // _______________UseState_________________
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [age, setAge] = useState(0)
  // ________________________________________

  // _______________UseEffect_________________
  useEffect(()=> {
    if(!loading) {
      setUsers(data.getAllUsers)
    }
    if(loading) {
      return <h1>Loading...</h1>
    }
  }, [data])
  //__________________________________________

  //________________Functions__________________
  const addUser = (e) => {
    e.preventDefault()
    newUser({
        variables: {
            input: {
                username, age
            }
        }
    }).then(({data}) => {
        console.log(data)
        setUsername('')
        setAge(0)
    })
}
  //___________________________________________

  return (
    <div className="App">
      <form>
        <input value={username} onChange={e => setUsername(e.target.value)} type="text"/>
        <input value={age} onChange={e => setAge(e.target.value)} type="number"/>
        <div className='btns'>
        <button onClick={(e) => addUser(e)}>Create</button>
          <button>Get</button>
        </div>
      </form>
      <div>
        {users.map((user, key) => 
          <div className='user' key={key}>{key+1}. {user.username} {user.age}</div>
          
          )}
      </div>
    </div>
  );
}

export default App;
