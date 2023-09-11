<script setup lang="ts">

import { useRoute } from 'vue-router';
import{onMounted,ref} from 'vue'
import RickAndMortyCharacters from '../../services/rm-characters.service';

const service = new RickAndMortyCharacters()
    const character= service.getOneCharacter()
    // const loading:Ref<boolean> = ref(false)

let characterId = ref('')

onMounted(async()=>{
        const route = useRoute()
        characterId.value = route.params.id.toString()
        await service.fetchOneCharacter(characterId.value)

    })

</script>


<template>
    <router-link :to="{name:'home'}">Atras</router-link>
    <div>
        Character
        {{ characterId }}
        <img :src="character?.image"/>
        {{ character?.name }}
    </div>
</template>

<style scoped>

</style>