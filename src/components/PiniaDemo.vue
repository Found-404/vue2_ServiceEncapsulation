<template>
  <div>
    <div>
      <span v-for="(p, index) in tagslist" :key="index">{{ p.title }}</span>
    </div>

    <el-Button
      @click="
        toUrl({
          title: '论坛',
          key: 'lunTan',
        })
      "
      >按钮</el-Button
    >
  </div>
</template>

<script>
import { useUserStore } from "@/stores/index";
import { mapState, mapActions } from "pinia"; //引入映射函数

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useUserStore, ["tagslist"]), //映射函数，取出tagslist
  },
  methods: {
    ...mapActions(useUserStore, ["changeTagList"]), //映射action
    toUrl(item) {
      const obj = {
        title: item.title,
        key: item.name,
      };
      this.changeTagList(obj); //直接使用action改变状态
    },
  },
};
</script>
