import React, { useState } from 'react';
import { useHistory } from 'umi';

function IndexPage() {

  const [count, setCount] = useState(0)
  const history = useHistory();

  const toPageA=()=>{
    history.push('/a');
  }


  return (
    <div>
      <h1>Page c</h1>
      <div>
        <p>count: {count}</p>
        <button onClick={() => setCount(count + 1)}>add</button>
        <button onClick={toPageA}>(history.push)go to page a</button>

        <button onClick={()=> { window.location.href = `/a`}}>(window.location.href)go to page a</button>
      </div>
      
      <img src="/images/steve.jpg" />
    </div>
  );
}


export default IndexPage
