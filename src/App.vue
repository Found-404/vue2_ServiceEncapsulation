<template>
  <div id="app">
    <div class="link">
      <router-link to="/">DataTime</router-link>
      <el-divider direction="vertical"></el-divider>
      <router-link to="/Echarts">Echarts</router-link>
      <el-divider direction="vertical"></el-divider>
      <router-link to="/TableDemo">TableDemo</router-link>
      <el-divider direction="vertical"></el-divider>
      <router-link to="/pinia">Pinia</router-link>
      <el-divider direction="vertical"></el-divider>
      <router-link to="/rollingchange">RollingChange</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.link {
  margin-bottom: 30px;
}
</style>
