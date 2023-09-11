<script setup lang="ts">  
  import {ref,Ref} from "vue"
    import { Specimen } from "../../interfaces";
    type Props={
        specimen : Specimen
    }
    const {specimen} =defineProps<Props>()
    
    const state:Ref<Specimen> = ref(specimen)
        const toggleType = ()=>{
            state.value.type = state.value.type=== "HUMAN" ? "NO_HUMAN": "HUMAN"
        }
</script>


<template>
 <div class="p-2 bg-neutral-100 shadow-md flex flex-col basis-2/12 items-center gap-4 rounded-md">
{{ state.name }}
{{ state.type === "HUMAN" ? "🧔":"👽" }}
<button class="bg-neutral-300 p-2 font-medium rounded hover:bg-neutral-400" @click="toggleType">{{ state.type === "HUMAN" ? "Marcianizate":"Humanizate" }}</button>

 </div>
</template>

<style scoped>
</style>