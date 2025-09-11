import React from 'react';

function App() {
  // Coloque aqui todos os nomes dos arquivos
  const avatars = [
    'ALBARA.png',
    'panicz.png',
    'joao.png',
    'maria.png',
    'lucas.png',
    'ana.png',
    'bruno.png',
    'carla.png',
    'diego.png',
    'elisa.png',
    'felipe.png',
    'gabi.png',
    'henrique.png',
    'isabela.png',
    'julia.png',
    'karen.png',
    'leonardo.png',
    'marcos.png',
    'natalia.png',
    'otavio.png',
    'patricia.png',
    'rafael.png',
    'samuel.png',
    'thais.png',
    'vitoria.png',
    'wesley.png',
    'yasmin.png',
    'zeca.png',
    'tati.png',
    'luana.png'
  ];

  return (
    <div>
      <h1>Lista de Avatares</h1>
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={`/images/avatars/${avatar}`}
          alt={`Avatar ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default App;
