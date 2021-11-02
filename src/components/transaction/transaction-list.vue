<template>
  <div class="transaction_list">
    <table>
      <tbody>
        <tr>
          <td>
            <span>Hash: </span>
            <span>{{ transactionList.hash }}</span>            
          </td>
          <hr/>
          <td>
            <span>No: </span>
            <span>{{ transactionList.ver }}</span>
          </td>
          <hr/>
          <td>
            <span>vinSz: </span>
            <span>{{ transactionList.vin_sz }}</span>
          </td>
          <hr/>
          <td>
            <span>voutSz: </span> 
            <span>{{ transactionList.vout_sz }}</span>
          </td>
          <hr/>
          <td>
            <span>lockTime: </span> 
            <span>{{ transactionList.lock_time }}</span>
          </td>
          <hr/>
          <td>
            <span>relayedBy: </span> 
            <span>{{ transactionList.relayed_by }}</span>
          </td>
          <hr/>
          <td>
            <span>NHeight: </span> 
            <span>{{ transactionList.block_height }}</span>
          </td>
          <hr/>
          <td>
            <span>Size: </span>
            <span>{{ transactionList.size }}</span>
          </td>
          <hr/>
          <td>
            <span>txIndex: </span>
            <span>{{ transactionList.tx_index }}</span>
          </td>
          <hr/>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'transaction-list',
  props: {
    transactionList: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({

  })
}
</script>


<style>
.transaction_list {
  padding-bottom: 25px;
  padding-top: 25px;
  width: 1200px;
  margin: 0 0 10px 50px;
}
tr {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

tbody {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1000px;
  padding-left: 15px;
}


td {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
}

hr {
  width: 1100px;
}

</style>
