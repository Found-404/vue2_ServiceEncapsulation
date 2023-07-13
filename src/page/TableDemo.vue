<template>
  <div>
    <el-table
      :data="
        tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
      "
      style="width: 100%"
    >
      <el-table-column prop="date" label="车商名称" width="180">
      </el-table-column>
      <el-table-column prop="name" label="车商单数" width="180">
      </el-table-column>
      <el-table-column prop="address" label="车商金额(万元)"> </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    >
    </el-pagination>
  </div>
</template>

<script>
// const tableData = new Array(30).fill(1).map((ele, index) => {
//   return {
//     date: "2016-05-03",
//     name: "王小虎",
//     address: `上海市普陀区金沙江路 ${index} `,
//   };
// });
export default {
  name: "TableDemo",
  props: {
    tableDatas: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
    },
    changeData: {
      type: Function,
    },
  },
  data() {
    return {
      tableData: this.tableDatas || [],
      currentPage: 1, // 初始页
      pagesize: 5, // 每页的数据
    };
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange(size) {
      this.pagesize = size;
      this.currentPage = 1;
      this.changeData(0, size);
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.changeData(
        (currentPage - 1) * this.pagesize,
        currentPage * this.pagesize
      );
    },
  },
  watch: {
    tableDatas: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        console.log("tableData被修改", newValue, oldValue);
        this.tableData = newValue;
      },
    },
  },
};
</script>
