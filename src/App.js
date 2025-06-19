import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <br />
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      <br />
      {visible && <p>{text}</p>}
    </div>
  );
}
export default App;
