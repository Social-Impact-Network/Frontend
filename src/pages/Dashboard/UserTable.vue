<template>
  <div class="row">
    <div class="col-md-12">
      <card card-body-classes="table-full-width">
        <h4 slot="header" class="card-title">Purchase log</h4>
        <el-table :data="tableData">
          <el-table-column
            min-width="150"
            sortable
            label="Date"
            property="date"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Action"
            property="action"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Token"
            property="amount"
          ></el-table-column>
          <!-- <el-table-column
            min-width="150"
            sortable
            align="right"
            header-align="right"
            label="Salary"
            property="salary"
          ></el-table-column> -->
        </el-table>
      </card>
    </div>

   <!--  <div class="col-md-12">
      <card class="card-plain" body-classes="table-full-width">
        <template slot="header">
          <h4 class="card-title">Table on Plain Background</h4>
          <p class="category">Here is a subtitle for this table</p>
        </template>
        <el-table
          header-cell-class-name="table-transparent"
          header-row-class-name="table-transparent"
          row-class-name="table-transparent"
          :data="tableData"
        >
          <el-table-column
            min-width="150"
            sortable
            label="Name"
            property="name"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Country"
            property="country"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="City"
            property="city"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            align="right"
            header-align="right"
            label="Salary"
            property="salary"
          ></el-table-column>
        </el-table>
      </card>
    </div>

    <div class="col-md-12">
      <card body-classes="table-full-width">
        <h4 slot="header" class="card-title">Regular Table with Colors</h4>
        <el-table :row-class-name="tableRowClassName" :data="tableData">
          <el-table-column
            min-width="150"
            sortable
            label="Name"
            property="name"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Country"
            property="country"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="City"
            property="city"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            align="right"
            header-align="right"
            label="Salary"
            property="salary"
          ></el-table-column>
        </el-table>
      </card>
    </div> -->

  </div>
</template>
<script>
import { Table, TableColumn } from 'element-ui';

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {

      let tableData = []
      let  newID=0
      this.$store.state.userDetails.tokenPurchased.forEach((purchasedEvent) => { 
        tableData.push(
          {id:newID,
          date: purchasedEvent.timestamp,
          action: 'purchased',
          amount: purchasedEvent.amountToken + 'SIP (Value: ' + purchasedEvent.valueUSD+ ' USD)'})
          newID++
        }
        )

return {
  tableData
  
      /*tableData: [
        {
          id: 1,
          date: '2020-10-28',
          action: 'bought',
          amount: 2400
          
        },
        {
          id: 2,
          date: '2020-10-13',
          action: 'bought',
          amount: 120
        },
        {
          id: 3,
          date: '2020-09-14',
          action: 'sent',
          amount: 220
        },
        {
          id: 4,
          date: '2020-09-02',
          action: 'bought',
          amount: 140
        },
        {
          id: 5,
          date: '2020-03-16',
          action: 'bought',
          amount: 20
        }
      ]*/
    };
  },
  methods: {
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 0) {
        return 'table-success';
      } else if (rowIndex === 2) {
        return 'table-info';
      } else if (rowIndex === 4) {
        return 'table-danger';
      } else if (rowIndex === 6) {
        return 'table-warning';
      }
      return '';
    }
  }
};
</script>
<style>
.table-transparent {
  background-color: transparent !important;
}
</style>
