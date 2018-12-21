<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-info" style="padding: 3px"></i>{{messagetitle}}</h3>
    <p>
      <button class="btn btn-primary btn1" type="button" onclick="getViewNumber()">View</button>
    </p>
    <table align="center">
      <tr>
        <td>
          <p> <span style="font-size: large; color: black; "> Number </span></p>
        </td>
        <td>
          <label class="form__label" id="number1"></label>
        </td>
      </tr>
      <tr>
        <td>
          <p> <span style="font-size: large; color: black; "> Number </span></p>
        </td>
        <td>
          <canvas id="myChart2" width="300px" height="300px"></canvas>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// eslint-disable-next-line
function getViewNumber () {
  var ctx = document.getElementById('number1')
  ctx.value = '123'
}
export default {
  name: 'AboutUs',
  data () {
    return {
      messagetitle: ' About Us '
    }
  },
  methods: {
    getViewNumber () {
      var ctx = document.getElementById('number1')
      ctx.value = '123'
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
