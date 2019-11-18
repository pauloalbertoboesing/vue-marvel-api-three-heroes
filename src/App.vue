<template>
  <div id="app">
    <header>
      <div class="logo"></div>
      <div class="heroes"></div>
    </header>
    <router-view></router-view>
    <footer>
      <div class="heroes"></div>
      <div class="developed">
          Developed by Paulo Ramos, mail: pauloalberto@outlook.com, Phone: +5551 99864.35.46
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #D32A1C;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
    margin-bottom: 6px;
    .logo {
      background: url('http://pluspng.com/img-png/marvel-png-marvel-png-497.png') no-repeat;
      background-size: cover;
      width: 150px;
      height: 50px;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .heroes {
      background: url('http://pluspng.com/img-png/marvel-png-download-1153.png') no-repeat;
      background-size: cover;
      width: 150px;
      height: 50px;
      flex: 1
    }
  }
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
