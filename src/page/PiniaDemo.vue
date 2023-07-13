<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6"
        ><el-input v-model="input" placeholder="请输入内容"></el-input
      ></el-col>
      <el-col :span="3">
        <el-Button
          @click="
            toUrl({
              title: input,
              key: input,
            })
          "
          >按钮</el-Button
        ></el-col
      >
    </el-row>
    <ul>
      <li :span="2" v-for="(p, index) in tagslist" :key="index">
        <span>{{ p.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/index";
import { mapState, mapActions } from "pinia"; //引入映射函数

export default {
  data() {
    return {
      input: "",
    };
  },
  computed: {
    ...mapState(useUserStore, ["tagslist"]), //映射函数，取出tagslist
  },
  methods: {
    ...mapActions(useUserStore, ["changeTagList"]), //映射action
    toUrl(item) {
      console.log(item);
      const obj = {
        title: item.title,
        key: item.key,
      };
      this.changeTagList(obj); //直接使用action改变状态
    },
  },
};
</script>
