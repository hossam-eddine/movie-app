<script>
// @ts-nocheck

    export let movie
</script>



<div  class="movie-card">
    <a sveltekit:prefetch  sveltekit:noscroll  href={'/movie/'+movie.id}>

        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" srcset="">
    </a>
        <div class="movie-description">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
    </div>
</div>


<style>
    
    
    img{
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 1rem;
        
    }
    img:hover
    {
        opacity: 0.5;
    }

    h2{

       font-size: 1.05rem;
    }

    .movie-description{

        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
    
      
    }
    
</style>