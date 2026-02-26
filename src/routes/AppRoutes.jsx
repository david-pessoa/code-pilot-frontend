import { BrouserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import Conversation from '../pages/Conversation';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="chat/:conversationId?"
          element={
            <PrivateRoutes>
              <Conversation />
            </PrivateRoutes>
          }
        />
      </Routes>
    </Router>
  );
}
