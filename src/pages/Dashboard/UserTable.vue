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

     /* let tableData = []
      let  newID=0
      this.$store.state.userDetails.tokenPurchased.forEach((purchasedEvent) => { 
        tableData.push(
          {id:newID,
          date: purchasedEvent.timestamp,
          action: 'purchased',
          amount: purchasedEvent.amountToken + 'SIP (Value: ' + purchasedEvent.valueUSD+ ' USD)'})
          newID++
        }
        )*/

return {
  
    
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
  },
  computed:{
    tableData() {

let tableData = []
      let  newID=0
      if (Array.isArray(this.$store.state.userDetails.tokenPurchased)){
      this.$store.state.userDetails.tokenPurchased.forEach((purchasedEvent) => { 
        tableData.push(
          {id:newID,
          date: new Date(purchasedEvent.timestamp*1000).toLocaleString(),
          action: 'purchased',
          amount: this.$store.state.web3.web3Instance().utils.fromWei(purchasedEvent.amountToken.toString()) + ' SIP (Value: ' + this.$store.state.web3.web3Instance().utils.fromWei(purchasedEvent.valueUSD.toString())+ ' USD)'})
          newID++
        }
        )}
        
      if (Array.isArray(this.$store.state.userDetails.transferSent)){
        this.$store.state.userDetails.transferSent.forEach((transferSentEvent) => { 
          tableData.push(
            {id:newID,
            date: new Date(transferSentEvent.timestamp*1000).toLocaleString(),
            action: 'Token sent',
            amount: this.$store.state.web3.web3Instance().utils.fromWei(transferSentEvent.amountToken.toString()) + ' SIP' })
            newID++
          }
        )
        }
console.log(this.$store.state.userDetails.transferReceived)
      if (Array.isArray(this.$store.state.userDetails.transferReceived)){
        this.$store.state.userDetails.transferReceived.forEach((transferReceivedEvent) => { 
          tableData.push(
            {id:newID,
            date: new Date(transferReceivedEvent.timestamp*1000).toLocaleString(),
            action: 'Token received',
            amount: this.$store.state.web3.web3Instance().utils.fromWei(transferReceivedEvent.amountToken.toString()) + ' SIP' })
            newID++
          }
        )
        }

        if (Array.isArray(this.$store.state.userDetails.tokenClaimed)){
          
        this.$store.state.userDetails.tokenClaimed.forEach((tokenClaimedEvent) => { 
          tableData.push(
            {id:newID,
            date: new Date(tokenClaimedEvent.timestamp*1000).toLocaleString(),
            action: 'USD claimed',
            amount: this.$store.state.web3.web3Instance().utils.fromWei(tokenClaimedEvent.amountUSD.toString()) + ' USD' })
            newID++
          }
        )
        }
console.log("claimm");
 console.log(this.$store.state.userDetails.receivedClaims)
        if (Array.isArray(this.$store.state.userDetails.receivedClaims)){
          console.log("456")
        this.$store.state.userDetails.receivedClaims.forEach((receivedClaims) => { 
          tableData.push(
            {id:newID,
            date: new Date(receivedClaims.timestamp*1000).toLocaleString(),
            action: 'Beneficary payout',
            amount: 'Received '+  this.$store.state.web3.web3Instance().utils.fromWei(receivedClaims.claimableAmountUSD.toString()) + ' USD (Token: ' + this.$store.state.web3.web3Instance().utils.fromWei(receivedClaims.amountToken.toString()) + ', total Supply: ' + this.$store.state.web3.web3Instance().utils.fromWei(this.$store.state.tokenSupplyTotal.toString()) + ')'})
            newID++
          }
        )
        }

        return tableData
    }
  }
          
};
</script>
<style>
.table-transparent {
  background-color: transparent !important;
}
</style>
