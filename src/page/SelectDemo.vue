<template>
  <div>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in selectData"
        :key="item.id"
        :label="item.value"
        :value="item.id"
      >
      </el-option>
    </el-select>
    <el-select v-model="valueTwo" placeholder="请选择">
      <el-option
        v-for="item in selectDataTwo"
        :key="item.id"
        :label="item.value"
        :value="item.id"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectData: [
        {
          id: 1,
          value: "一队",
          children: [
            {
              id: 101,
              value: "一队团1",
            },
            {
              id: 102,
              value: "一队团2",
            },
          ],
        },
        {
          id: 2,
          value: "二队",
          children: [
            {
              id: 201,
              value: "二队团1",
            },
            {
              id: 202,
              value: "二队团2",
            },
          ],
        },
      ],
      selectDataTwo: [],
      value: null,
      valueTwo: null,
    };
  },
  watch: {
    value: {
      immediate: false,
      handler(newValue, oldValue) {
        console.log("value被修改", newValue, oldValue);
        const arr = this.selectData.find(
          (ele) => ele.id === newValue
        )?.children;
        this.selectDataTwo = arr;
        console.log(arr);
        this.valueTwo = null;
      },
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
