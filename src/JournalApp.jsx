import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "./auth/pages/index";

export const JournalApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>WA WA WA WA</div>} />

        {/* Registro y Login */}
        {/* <Route path='/auth/*' element={<AuthRoutes />}  />*/}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<Navigate to="/auth/login" />} />

        {/* JournalApp */}
        {/* <Route path="/*" element={<JournalRoutes />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
