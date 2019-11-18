<template>
    <div class="card">
        <footer class="card-footer">
            <div class="card-footer-item" v-for="(comic, index) in comicsCharacter">{{comic.title}}</div>
        </footer>
    </div>    
</template>

<script>
export default {
    props: {
        Comics: {
            required: true
        },
        characterId: {
            required: true
        }
    },
    data() {
        return {
            comicsCharacter: []
        }
    },
    mounted() {
        this.comicsCharacter = this.Comics[this.characterId]
    },
    watch: { 
        //This watcher is because JavaScript Array and Obj Changes not is reactive.
      	Comics: function(newObj, oldObj) {
          this.comicsCharacter = newObj[this.characterId]
        }
    }
     
}
</script>

<style lang="scss" scoped>
    .card {
        width: 100%
    }
</style>