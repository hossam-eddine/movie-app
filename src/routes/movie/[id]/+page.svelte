<script>
// @ts-nocheck

import {fly} from "svelte/transition"

    export let data;
</script>

<div in:fly={{ y:50 ,duration:500 ,delay:500}} out:fly={{ duration:500 }}  class="movie-details">
    <div class="image-container">
        <img
            src={"https://image.tmdb.org/t/p/w500" + data.movie.poster_path}
            alt={data.movie.title}
        />
    </div>
    <div class="movie-description">
        <h1>{data.movie.title}</h1>
        <p>
            <span>Release date:</span>
            {data.movie. release_date} 
            <br />
           <span>Budget: </span>
            ${data.movie.budget}
            <br /> 
           <span>Rating:</span>
            {data.movie.vote_average}
            <br />
           <span>Runtime:</span>
            {data.movie. runtime}mins
       </p>
       

    
    </div>
</div>

<style>
    h1{
         padding: 1rem 0rem 2rem;
     }
       
     p{
         padding: 1rem 0rem;
     }
     .image-container {
        width: 100%;
     }
    img {
        width: 100%;
        height: 80vh;
        border-radius: 1rem;
     }
     .movie-details {
        margin: 2rem 20%;
     }
     span {
        font-weight: bold;
     }
</style>

