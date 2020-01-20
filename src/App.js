import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['React', 'ReactNative']);
  const [newTech, setNewTech] = useState('');
  function handleAdd() {
    setTech([...tech, newTech]);
  }

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)}></input>
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
