import React, { useState } from 'react';

function IndexPage() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Page b</h1>
      <div>
        <p>count: {count}</p>
        <button onClick={() => setCount(count + 1)}>add</button>
      </div>
      
      <img src="/images/steve.jpg" />
    </div>
  );
}


export default IndexPage
