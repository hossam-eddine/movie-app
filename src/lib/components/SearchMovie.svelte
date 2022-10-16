<script>
    import { goto } from "$app/navigation";
    import { fly } from "svelte/transition";



let inputvalue


const submitSearch= () => 
{

      goto('search/'+inputvalue)



}


</script>

<form on:submit|preventDefault={submitSearch}  class="search">
    
    <input  bind:value={inputvalue} type="text" name="search_movie" placeholder="search movie">
   {#if inputvalue}
    
   <button out:fly={{ x: 0 ,duration:500  }} in:fly={{ x: 20, duration:500 }} >Search </button>
   {/if}
</form>












<style>

.search {

    width: 100%;
    position: relative;
   
}

input {
    background: transparent;
    width: 40%;
    font-size: large;
    border: none;
    border-bottom:1px solid white ;
    outline: none;
    color:white;
    padding: 1rem;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-family: 'Silkscreen', cursive;
}
input::placeholder{

    
    font-family: 'Silkscreen', cursive;
}
input:focus{
    background: transparent;
    
}  


button{
    position: absolute;
    
    background: #ff8906;
    color: #fffffe;
    border: none;
    padding: 1rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.3rem;
    
}

</style>