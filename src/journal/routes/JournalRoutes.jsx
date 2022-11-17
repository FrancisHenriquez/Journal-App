import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { JournalPage } from '../pages/JournalPage'

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path='/' component={<JournalPage />} exact />
        <Route path='/*' component={ <Navigate to = '/' /> } exact />
        
     
     
    </Routes>
  )
}
