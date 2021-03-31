import React, {useState} from "react"
import Card from "./Card"


export default function SearchMovies(props){
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) =>{
        e.preventDefault();
        
        const url =`https://api.themoviedb.org/3/search/movie?api_key=040f5f5dc94d1775b45f925dbc3d87f6&language=en-US&query=${query}&page=1&include_adult=false`
        
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            setMovies(data.results);
        }catch(err){
            console.err(err)
        }
    }

    
    return(
        <>
            <form className ="form" onSubmit={searchMovies}>
                <label className ="label" htmlFor="query">Movie Name</label>
                <input className ="input" type ="text" name="query" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="i.e. Jurassic Park"/>
                <button className ="button" type ="submit">Search</button>
            </form>
            <div className="card-list" >
                {movies.filter(movie=>movie.poster_path).map(movie =>
                     < Card movie ={movie}  key={movie.id}/>)}
            </div>
        </>
            )
}
