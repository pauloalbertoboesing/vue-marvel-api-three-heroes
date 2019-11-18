<template>
    <div>
        <div class="card" v-for="(hero, index) in heroes">
            <div :class="`card-content hero_${hero.id}`">
                <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                    <img :src="`${hero.thumbnail.path}/portrait_small.${hero.thumbnail.extension}`" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{hero.name}}</p>
                    <p class="subtitle is-6">@{{hero.name}}</p>
                </div>
                </div>

                <div class="content">
                    {{hero.description}}
                </div>
                <div class="card-footer">
                    <div class="card-footer-item" v-for="(comic, index) in comics[hero.id]">{{comic.title}}</div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import Characters from '../../services/Characters'
import Comics from '../../services/Comics'
export default {
    data() {
        return {
            heroes: [],
            comics: []
        }
    },

    created() {
        let charactersAPI = new Characters(this.$axios, this.$queryParams)
            charactersAPI.setMyFavorites(['Thor','Hulk','Spider-Man'])
            charactersAPI.getMyFavorites().then(response => {
                response.forEach(res => {
                    this.heroes.push(res.data.data.results[0])
                    this.getComics(res.data.data.results[0].id)
                })
            })
    },

    methods: {
        getComics: function(idCharacter) {
            let comicsAPI = new Comics(this.$axios, this.$queryParams)
            comicsAPI.getComicsByIdCharacter(idCharacter).then(resolve => {
                let comics = resolve.data.data.results
                this.comics[idCharacter] = []
                comics.forEach(Obj => {
                   this.comics[idCharacter].push(Obj)
                })
            }, reject => {
                console.error(reject)
            })
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>