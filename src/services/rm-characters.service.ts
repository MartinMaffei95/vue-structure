import { ref ,Ref} from "vue"
import { CharacterFromApi, InfoFromApi } from "../interfaces"
 class RickAndMortyCharacters{

    private characters:Ref<CharacterFromApi[]>
    private character:Ref<CharacterFromApi|null>
    private info:Ref<InfoFromApi |null>
    constructor(){
        this.characters = ref([])
        this.character = ref(null)
        this.info = ref(null)
    }

    getCharacters(){
        return this.characters
    }
    getOneCharacter(){
        return this.character
    }
    getInfo(){
        return this.info
    }

    async fetchByPage(page:number = 1){
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URI}/character/?page=${page}`)
            const data = await res.json()
            this.characters.value = await data.results
            this.info.value = await data.info
        } catch (error) {
                alert("Ocurrio un error")
                console.error(error)
        }
    }

    async fetchOneCharacter (characterId:string){
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URI}/character/${characterId}`)
            const data = await res.json()
            this.character.value =    await data
        } catch (error) {
                alert("Ocurrio un error")
                console.error(error)
        }
    }

}

export default RickAndMortyCharacters