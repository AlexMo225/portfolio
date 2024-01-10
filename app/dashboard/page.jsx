'use client'
import { useSession } from 'next-auth/react';

const Dashboard = () => {
  const { data: session, status } = useSession();

  // Vérifier si la session est en cours de chargement
  if (status === 'loading') {
    return <p>Chargement en cours...</p>;
  }

  // Vérifier si la session est définie
  const username = session?.user?.name;

  // Afficher le contenu du tableau de bord
  return (
    <>
      <h1>Tableau de bord</h1>
      <p>Utilisateur : {username !== undefined ? username : 'Pas d\'utilisateur'}</p>
    </>
  );
};

export default Dashboard; 