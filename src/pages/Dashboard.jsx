import React from 'react';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <h1>Você precisa estar logado para acessar o Dashboard!</h1>;
  }

  return (
    <div>
      <h1>Bem-vindo ao Dashboard!</h1>
      <p>Gerencie seus pets aqui!</p>
    </div>
  );
}

export default Dashboard;
