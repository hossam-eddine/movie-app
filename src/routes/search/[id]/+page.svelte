<script>
    import MovieCard from "$lib/components/MovieCard.svelte";


    export let data




</script>

<div class="search-movies">
    {#each data.searchmovies  as movie }
        
    <MovieCard movie={movie} />
    {/each}
</div>

<style>
    .search-movies {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
    }
</style>