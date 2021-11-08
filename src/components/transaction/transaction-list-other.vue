<template>
  <div class="transaction_list_other">
    <button @click="showList" class="button_details">
      Advanced Details
      <b class="caret"></b>
    </button>
    <table v-if="isShow">
      <tbody>
        <tr>
          <hr/>
          <td>
            <span>Block Hash</span> 
            <span></span>
          </td>
          <hr/>
          <td>
            <span>Block Height</span> 
            <span>{{ transactionListOther.block_height }}</span>
          </td>
          <hr/>
          <td>
            <span>Block Size (bytes)</span>
            <span>{{ transactionListOther.size }} bytes</span>
          </td>
          <hr/>
          <td>
            <span>Block Virtual Size (vbytes) </span>
            <span>{{ transactionListOther.weight }}</span>
          </td>
          <hr/>
          <td>
            <span>Lock Time</span> 
            <span>{{ transactionListOther.lock_time }}</span>
          </td>
          <hr/>
          <td>
            <span>Version</span> 
            <span>{{ transactionListOther.ver }}</span>
          </td>
          <hr/>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'transaction-list-other',
  props: {
    transactionListOther: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({
    isShow: false
  }),
  methods: {
    showList() {
      this.isShow = !this.isShow
    }
  }
}
</script>


<style>

tr {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 50px;
}

tbody {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1100px;

}


td {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 900px;
}

hr {
  width: 1100px;
  color: #dedede;
}

.transaction_list_other {
  margin-top: 25px;
}

.button_details {
  padding: 8px 15px;
  font-size: 16px;
  margin-bottom: 10px;
  background-color: #5799d4;
  color: #ffffff;
  border-radius: 5px;
  border-color: #5799d4;
}

.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}



</style>
