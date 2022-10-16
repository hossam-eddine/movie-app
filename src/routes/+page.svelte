<script>
// @ts-nocheck

import Popularmovie from "$lib/components/popularmovie.svelte";
import SearchMovie from "$lib/components/SearchMovie.svelte";
import {fly } from "svelte/transition";
import global from "../global.css"





export let data 


</script>

<section in:fly={{ y:50 ,duration:500,delay:500 }} out:fly={{ duration:500 }} >
    <SearchMovie/>
<Popularmovie  popular={data.popular} />
</section>















