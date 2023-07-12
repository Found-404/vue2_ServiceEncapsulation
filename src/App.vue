<template>
  <div id="app">
    <router-link to="/">DataTime</router-link>
    <el-divider direction="vertical"></el-divider>
    <router-link to="/Echarts">Echarts</router-link>
    <el-divider direction="vertical"></el-divider>
    <router-link to="/TableDemo">TableDemo</router-link>
    <el-divider direction="vertical"></el-divider>
    <router-link to="/pinia">Pinia</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
