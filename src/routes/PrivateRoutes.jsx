import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Loader() {
  return <h1>Carregando...</h1>;
}

export default function PrivateRoute({ children }) {
  const { user, isUserDataLoading } = useAuth();

  if (isUserDataLoading) return <Loader />;

  // Se não estiver logado, redireciona para página de login
  if (!user) {
    return <Navigate to="/" replace />;
  }
  // Lógica para verificar se o usuário tem acesso à páginas restritas

  return children;
}
