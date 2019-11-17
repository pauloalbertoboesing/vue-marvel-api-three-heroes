<template>
    <div></div>
</template>

<script>
import Characters from '../../services/Characters'
export default {
    data() {
        return {

        }
    },

    created() {
        let characters = new Characters(this.$axios, this.$queryParams)
            characters.setMyFavorites(['Thor','Hulk','Spider-Man'])
            characters.getMyFavorites().then(response => {
                console.log(response)
            })
    }
}
</script>

<style lang="scss" scoped>

</style>