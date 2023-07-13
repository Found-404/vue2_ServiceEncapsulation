<template>
  <div>
    <div>
      <el-radio v-model="radio" label="1">年</el-radio>
      <el-radio v-model="radio" label="2">季</el-radio>
      <el-radio v-model="radio" label="3">月</el-radio>
      <el-date-picker
        v-if="radio === '1'"
        v-model="dataTime"
        type="year"
        placeholder="选择年"
      >
      </el-date-picker>
      <el-quarter-picker
        v-else-if="radio === '2'"
        v-model="quarterDataTime"
        value-format="yyyy-q"
        placeholder="选择季度"
      />
      <el-date-picker
        v-else
        v-model="dataTime"
        type="month"
        placeholder="选择月"
      ></el-date-picker>
      <el-button type="primary" @click="dataCon">主要按钮</el-button>
    </div>
    <h2 v-if="radio === '1'">
      {{ this.$moment(dataTime || "2023").format("YYYY") }}年车商单数统计
    </h2>
    <h2 v-else-if="radio === '2'">
      {{ quarterDataTime.substr(0, 4) }}年{{
        quarterDataTime.length === 4
          ? "1"
          : quarterDataTime[quarterDataTime.length - 1]
      }}季度车商单数统计
    </h2>
    <h2 v-else>
      {{ this.$moment(dataTime || "2023").format("YYYY") }}年{{
        this.$moment(dataTime || "2023").format("MM")
      }}月车商单数统计
    </h2>
  </div>
</template>

<script>
import ElQuarterPicker from "./ElQuarterPicker";
export default {
  data() {
    return {
      radio: "1",
      dataTime: this.$moment().format("YYYY-MM"), // 假如这是你的初始时间 this.$moment() 就可以获取今天的时间
      quarterDataTime: this.$moment().format("YYYY") + "-1",
    };
  },
  components: { ElQuarterPicker },
  methods: {
    dataCon() {
      let startDate = this.dataTime;
      switch (this.radio) {
        case "1":
          startDate = this.$moment(startDate).format("YYYY");
          break;
        case "2":
          startDate = this.quarterDataTime;
          break;
        case "3":
          startDate = this.$moment(startDate).format("YYYY-MM");
          break;
        default:
          break;
      }
      console.log(startDate);
    },
  },
};
</script>
