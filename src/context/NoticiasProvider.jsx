import axios from "axios";
import { useState, useEffect, createContext } from "react";


const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {
    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);


    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=4e3fa4c82ff043ec88fc96df514b6135`
            const { data } = await axios(url)

            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
            setPagina(1)
        }
        consultarAPI()
    }, [categoria])

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=4e3fa4c82ff043ec88fc96df514b6135`
            const { data } = await axios(url)

            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
        }
        consultarAPI()
    }, [pagina])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    const handleChangePagina = (e,valor) => {   
        setPagina(valor)
    }

    return (
        <NoticiasContext.Provider value={{ handleChangeCategoria, categoria, noticias, totalNoticias, handleChangePagina, pagina }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext