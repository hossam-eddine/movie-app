// @ts-nocheck
export async  function load({params})

{
    const movie_id = params.id
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${import.meta.env.VITE_API}&language=en-US`
    const res =await fetch(url)
    const data= await res.json()
 
    return {
       movie:data
    }
}