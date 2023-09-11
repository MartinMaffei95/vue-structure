<script setup lang="ts">
import RickAndMortyCharacters from '../../services/rm-characters.service';
import Character from './Character.vue';
import {onMounted,ref,Ref,computed} from "vue"
    const service = new RickAndMortyCharacters()
    const characters= service.getCharacters()
    const loading:Ref<boolean> = ref(false)
    let actualPage:Ref<number> = ref(1)
    let page = computed({
        get(){
            return actualPage.value
        },
       async set(value){
        actualPage.value = value
        loading.value = true
            await service.fetchByPage(+value)
            loading.value = false

        }
    })

    onMounted( async ()=>{
        await service.fetchByPage()
    })
    
    
</script>


<template>
    <div class="bg-neutral-200 w-screen p-4">

        <div class="flex gap-4 justify-center items-center">

            PERSONAJES
            <input min="1" type="number"  v-model="page" />
        </div>

    <div class=" gap-4 p-4 grid grid-cols-4 auto-rows-auto ">
        <Character v-if="characters.length > 0 && !loading" v-for="character in characters" :character="character"/>
        <div v-if="loading">
            Cargando
        </div>
            <div v-if="characters.length <= 0 && !loading">
                No hay personajes para mostrar aun
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>