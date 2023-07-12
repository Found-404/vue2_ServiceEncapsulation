<template>
  <div>
    <el-radio v-model="radio" label="1">年</el-radio>
    <el-radio v-model="radio" label="2">月</el-radio>
    <el-date-picker
      v-if="radio === '1'"
      v-model="dataTime"
      type="year"
      placeholder="选择年"
    >
    </el-date-picker>
    <el-date-picker
      v-else
      v-model="dataTime"
      type="month"
      placeholder="选择月"
    ></el-date-picker>
    <el-button type="primary" @click="dataCon">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      dataTime: this.$moment("2023"), // 假如这是你的初始时间 this.$moment() 就可以获取今天的时间
    };
  },
  methods: {
    dataCon() {
      console.log(this.value3);
    },
  },
};
</script>
