import React, {useState, useEffect} from 'react';



function App() {

  const [repositories, setRepositories] = useState([])

  useEffect( async ()=>{
    const response = await fetch('https://api.github.com/users/marcoseduardoss/repos');
    const data = await response.json();

    setRepositories(data);

  }, [])

  return (
  <ul>
     {repositories.map(r => <li key={r.id}>{r.name}</li>)}
  </ul>
  );
}

export default App;
