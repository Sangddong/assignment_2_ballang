import React from 'react'
import { useAuth } from '../../contexts/auth.context'
import {useNavigate} from "react-router-dom"

function MyPage() {
  const{isLoggedIn}=useAuth();
  const navigate = useNavigate();
  return (
    <div>
      {isLoggedIn ? (
        navigate("/")
      ) : (
        navigate("/sign-in")
      )}
    </div>
  )
}

export default MyPage