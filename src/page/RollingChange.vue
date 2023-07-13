<template>
  <div class="RollingChange">
    <div id="Box">
      <img
        src="https://element.eleme.cn/static/theme-index-blue.c38b733.png"
        alt=""
      />
      <div class="jumbotron-red" :style="jumbotronStyle">
        <img
          src="https://element.eleme.cn/static/theme-index-red.c8e136e.png"
          alt=""
        />
      </div>
    </div>
    <div class="occupy"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jumbotronStyle: {
        height: 0,
      },
    };
  },
  created() {},
  methods: {
    changeHeight() {
      const win = document.documentElement;
      const Box = document.querySelector("#Box");
      if (win.scrollTop > 10) {
        this.jumbotronStyle = {
          height: `${win.scrollTop + 20}px`,
        };
        if (parseInt(this.jumbotronStyle.height) > Box.offsetHeight) {
          this.jumbotronStyle = {
            height: `${Box.offsetHeight + 20}px`,
          };
        }
      }
      if (win.scrollTop === 0) {
        this.jumbotronStyle = {
          height: `0px`,
        };
      }
    },
    beforeDestroy() {
      /* 页面组件销毁的时候，别忘了移除绑定的监听resize事件，否则的话，多渲染几次
      容易导致内存泄漏和额外CPU或GPU占用哦 */
      window.removeEventListener("scroll", () => {
        console.log("移除");
      });
    },
  },
  watch: {},
  mounted() {
    window.addEventListener("scroll", this.changeHeight);
  },
  updated() {},
  beforeDestroy() {
    this.beforeDestroy();
  },
};
</script>

<style scoped>
#Box {
  width: 100%;
  position: relative;
}
.RollingChange {
  padding: 50px;
}
img {
  width: 100%;
}
.jumbotron-red {
  position: absolute;
  overflow: hidden;
  height: 0px;
  top: 0px;
}
.occupy {
  height: 600px;
}
</style>
