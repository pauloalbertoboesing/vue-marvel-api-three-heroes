<template>
    <div>
        <div class="card" v-for="(hero, index) in heroes">
            <div class="card-content">
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
            heroes: []
        }
    },

    created() {
        let characters = new Characters(this.$axios, this.$queryParams)
            characters.setMyFavorites(['Thor','Hulk','Spider-Man'])
            characters.getMyFavorites().then(response => {
                response.forEach(res => {
                    this.heroes.push(res.data.data.results[0])
                })
            })
    },

    methods: {
        
    }
}
</script>

<style lang="scss" scoped>

</style>