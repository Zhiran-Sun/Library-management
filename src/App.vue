<template>
  <div id="app">
    <b-navbar toggleable="md" variant="yellow" >
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/smallLogo.png" class="img-circle" style="padding: 5px">
      <b-navbar-brand to="/">Library Management System</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Introduction</i></b-nav-item>
          <b-nav-item to="/books"><i class="fa fa-list" style="padding: 5px"> Books List</i></b-nav-item>
          <b-nav-item to="/addBook"><i class="fa fa-money" style="padding: 5px"> Edit books</i></b-nav-item>
          <b-nav-item to="/users"><i class="fa fa-list" style="padding: 5px"> User List</i></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 20px;
    background: url("./assets/Library.jpg") repeat center top;
  }
  .VueTables__sortable {
    cursor: pointer;
  }
</style>
