<template>
    <div class="card">
        <footer class="card-footer">
            <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="false">
                <b-icon
                    pack="fas"
                    icon="spinner"
                    size="is-middle"
                    custom-class="fa-spin">
                </b-icon> <p>Loading last five comics</p>
            </b-loading>           
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
            comicsCharacter: [],
            isLoading: true
        }
    },
    mounted() {
        this.isLoading = true
    },
    watch: { 
        //This watcher is because JavaScript Array and Obj Changes not is reactive.
      	Comics: function(newObj, oldObj) {
          this.comicsCharacter = newObj[this.characterId]
          this.isLoading = false
        }
    }
     
}
</script>

<style lang="scss" scoped>
    .card {
        width: 100%;
        min-height: 50px;
    }
</style>