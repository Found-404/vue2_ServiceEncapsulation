<template>
  <div>
    <div class="echarts">
      <el-button @click="changeData(0, 5)">按钮(模拟请求)</el-button>
      <div id="echart" ref="chartDom"></div>
    </div>
    <TableDemo :tableDatas="tableData" :changeData="changeData" />
  </div>
</template>

<script>
import TableDemo from "./TableDemo.vue";
import * as echarts from "echarts";

const tableDatas = new Array(30).fill(1).map((ele, index) => {
  return {
    date: `名称${index + 1}`,
    name: parseInt(Math.random() * 100),
    address: `上海市普陀区金沙江路 ${index} `,
  };
});

export default {
  name: "EchartsDemo",
  components: {
    TableDemo,
  },
  data() {
    return {
      myChart: null, // 定义变量用来存放echarts实例
      tableData: [],
      option: {
        // 配置项写在data里面方便管理
        title: {
          text: "ECharts 示例",
        },
        tooltip: {},
        xAxis: {
          data: [],
          axisLabel: {
            interval: 0,
          },
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [],
          },
        ],
      },
    };
  },
  mounted() {
    // 第二步，在页面加载渲染的时候执行echarts画图方法
    this.drawEcharts();
  },
  methods: {
    drawEcharts() {
      // 第三步，通过echarts的init方法实例化一个echarts对象myChart，并，保存在data变量中
      this.myChart = echarts.init(this.$refs.chartDom);
      // 第四步，执行myChart的setOption方法去画图，当然至于配置项，我们要提前配置好，这里的配置项
      //         写在data中，方便我们在一些事件中去修改对应配置项，比如点击按钮更改配置项数据
      this.myChart.setOption(this.option);
      // 第五步，在页面初始化加载的时候绑定页面resize事件监听。补充resize事件：resize事件是在浏览器窗口大小改变时，会触发。
      //        如当用户调整窗口大小，或者最大化、最小化、恢复窗口大小显示时触发 resize 事件。
      //        我们一般使用这个事件去做窗口大小与对应元素的大小适配
      window.addEventListener("resize", () => {
        // 第六步，执行echarts自带的resize方法，即可做到让echarts图表自适应
        this.myChart.resize();
        // 如果有多个echarts，就在这里执行多个echarts实例的resize方法,不过一般要做组件化开发，即一个.vue文件只会放置一个echarts实例
        /*
        this.myChart2.resize();
        this.myChart3.resize();
        ......
        */
      });
    },
    beforeDestroy() {
      /* 页面组件销毁的时候，别忘了移除绑定的监听resize事件，否则的话，多渲染几次
      容易导致内存泄漏和额外CPU或GPU占用哦 */
      window.removeEventListener("resize", () => {
        this.myChart.resize();
      });
    },

    // 按钮的方法（模拟请求）把它放进组件挂载前的生命周期函数体内
    changeData(agin = 0, max = 5) {
      // 假如`tableDatas`是你接口获取的参数
      this.tableData = tableDatas;

      const xAxisData = tableDatas.slice(agin, max).map((ele) => {
        return ele.date;
      });

      const seriesData = tableDatas.slice(agin, max).map((ele) => {
        return ele.name;
      });

      this.option = {
        // 配置项写在data里面方便管理
        title: {
          text: "ECharts 示例",
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: seriesData,
            label: {
              show: true,
              color: "inherit",
              align: "center",
              position: "top",
              fontSize: "20px",
            },
          },
        ],
      };
      this.myChart.setOption(this.option);
    },

    // // 模拟请求
    // getTableData(pageNum = 1, pageSize = 5) {
    //   接口函数({
    //     pageNum,
    //     pageSize,
    //   }).then((ele) => {
    //     // 这个ele里面有接口返给你的数据
    //     const xAxisData = tableDatas.map((ele) => {
    //       return ele.date;
    //     });

    //     const seriesData = tableDatas.map((ele) => {
    //       return ele.name;
    //     });

    //     this.option = {
    //       // 配置项写在data里面方便管理
    //       title: {
    //         text: "ECharts 示例",
    //       },
    //       tooltip: {},
    //       xAxis: {
    //         data: xAxisData,
    //       },
    //       yAxis: {},
    //       series: [
    //         {
    //           name: "销量",
    //           type: "bar",
    //           data: seriesData,
    //         },
    //       ],
    //     };
    //     this.myChart.setOption(this.option); // 更新图表

    //     this.tableData = tableDatas; // 更新table
    //   });
    // },
  },
  beforeDestroy() {
    this.beforeDestroy(); // 清除
  },
};
</script>

<style scoped>
#echart {
  width: 100%;
  height: 600px;
}
/* .echarts {
  display: flex;
  align-items: flex-start;
} */
</style>
