<template>
  <div class="ul_list">
    <ul>
      <li>Hash: {{ hash }}</li>
      <li>Address: {{ address }}</li>
      <li>nTx: {{ nTx }}</li>
      <li>nUnredeemed: {{ nUnredeemed }}</li>
      <li>totalReceived: {{ totalReceived }}</li>
      <li>totalSent: {{ totalSent }}</li>
      <li>finalBalance: {{ finalBalance }}</li>
      <li
        class="address__transaction"
        v-for="(item, index) in txs"
        :key="`item-${index}`"
      >
        hash: {{ item.hash }}
        fee: {{ item.fee }}
        size: {{ item.size }}
        weight: {{ item.weight }}
        <!--xinputs: {{ item.inputs }}
        out: {{ item.out }}-->
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'address',
  data: () => ({
    info: [],
    errored: true ,
    hash: '',
    address: '',
    nTx: 0,
    nUnredeemed: 0,
    totalReceived: '',
    totalSent: 0, 
    finalBalance: 0,
    txs: [],
  }),
  mounted() {
    axios
      .get('https://blockchain.info/rawaddr/1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F')
      .then(response => {
        this.info = response.data
        this.hash = this.info.hash160
        this.address = this.info.address
        this.nTx = this.info.n_tx
        this.nUnredeemed = this.info.n_unredeemed
        this.totalReceived = this.info.total_received
        this.totalSent = this.info.total_sent
        this.finalBalance = this.info.final_balance
        this.txs = this.info.txs
      })
      .catch(error  => {
        console.log(error)
      })
  }
}

  

</script>


<style>
ul {
  list-style-type: none;
}

.address__transaction {
  width: 800px;
}

</style>
