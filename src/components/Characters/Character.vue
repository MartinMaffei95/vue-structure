<script setup lang="ts">
import { CharacterFromApi } from '../../interfaces';

    interface Props{
        character:CharacterFromApi
    }
    defineProps<Props>()

</script>


<template>
 <router-link :to="{name:'character-view',params:{id:character?.id }}" class="bg-neutral-100 rounded basis-2/12 flex flex-col p-4 gap-2 shadow-md">
<div class=" w-3/4 rounded-full overflow-hidden self-center">
    <img class="aspect-square" :alt="character.name + ' image'" :src="character.image"/>

</div>
<p class="text-center font-bold">
{{ character.name }}

</p>
<p>
    {{ character.location.name }}
</p>
<p>
    status: {{ character.status }}
    gender:{{ character.gender }}

</p>
<p>
    specie: {{ character.species }}
</p>
 </router-link>
</template>

<style scoped>

</style>