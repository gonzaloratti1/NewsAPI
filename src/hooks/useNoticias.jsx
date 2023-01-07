import { useContext } from "react"
import NoticiasContext from "../context/NoticiasProvider"
import { NoticiasProvider } from "../context/NoticiasProvider"
import React from 'react'

const useNoticias = () => {
  return useContext(NoticiasContext)
}

export default useNoticias