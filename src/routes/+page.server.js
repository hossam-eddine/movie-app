export async function load() {

    const  url=`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API}&language=en-US&page=1`
    const res= await fetch(url)
    const data =await res.json()
    

    if (res.ok) {

        return {
            popular:data.results
        }
        
    }



  return {
 
  };
}