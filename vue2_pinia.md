## Vue2中使用Pinia


### 1.初始化配置
```js
# main.js

import Vue from 'vue'
import App from './App.vue'
import pinia from './stores/index'
import { PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)

new Vue({
  render: h => h(App),
  pinia,
}).$mount('#app')

```


### 2.模块化开发
新建`stores`文件，建立入口文件`index.js`

```js
# index.js

import { createPinia } from 'pinia'
export * from './nodules/useUserStore'


const pinia = createPinia()

export default pinia

```

`stores`文件下新建`nodules`模块文件(有点类似dva中的`model.ts`)

在nodules中新建`useUserStore.js`文件

```js
# useUserStore.js

import { defineStore } from 'pinia'
export const useUserStore = defineStore('store', {
    state: () => {
        return {
            tagslist: [{
                title: '首页',
                key: 'home',
                closable: false
            }, {
                title: '用户中心',
                key: 'home',
                closable: false
            }, {
                title: '讨论',
                key: 'home',
                closable: false
            }],
        }
    },
    actions: {
        changeTagList(obj) {
            console.log(this.tagslist);
            if (!this.tagslist.some(ele => ele.key === obj.key)) {
                const objs = {
                    ...obj,
                    closable: false
                }
                console.log(this.tagslist.some(ele => ele.key === obj.key));
                this.tagslist.push(objs)
            }
        },
        deleteTagList(k) {
            const key = this.tagslist.findIndex(item => {
                return item.key == k
            })
            this.tagslist.splice(key, 1)
        },
    }
})

// pinia不需要mutation，只需要使用action来改变状态

```


### 3.使用

```vue
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

```