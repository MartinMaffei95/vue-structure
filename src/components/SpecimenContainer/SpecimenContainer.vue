<script setup lang="ts">
import type {Specimen as ISpecimen} from "../../interfaces"
import Specimen from "./Specimen.vue";
    const specimenes:ISpecimen[] = [
        {
            name:"Mark",
            type:"HUMAN"
        },
        {
            name:"E.T.",
            type:"NO_HUMAN"
        }
        ,
        {
            name:"Marvin",
            type:"NO_HUMAN"
        },
        {
            name:"Martin",
            type:"HUMAN"
        }
    ]
</script>


<template>
    <div class="flex bg-neutral-400 p-4 gap-2 justify-around">

        <Specimen v-for="specimen in specimenes" :specimen="specimen" />
    </div>
</template>

<style scoped>

</style>