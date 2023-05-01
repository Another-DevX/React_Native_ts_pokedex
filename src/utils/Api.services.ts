import { POKEMON_API_URL } from '@env';

export async function getAllPokemon(){
    try{
        const url= `${POKEMON_API_URL}/pokemon?limit=40&offset=0`
        const response = await fetch(url)
        const result = await response.json()
        return result
    }catch (error){
        throw error
    }
}

export async function getPokemonData(url:string){
    try{
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }catch(error){
        throw(error)
    }
}