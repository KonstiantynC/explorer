<template>
  <div class="ul_list">
    <ul>
      <li>Hash: {{ hash }}</li>
      <li>No: {{ id }}</li>
      <li>nTx: {{ nTx }}</li>
      <li>nUnredeemed: {{ nUnredeemed }}</li>
      <li>totalReceived: {{ totalReceived }}</li>
      <li>totalSent: {{ totalSent }}</li>
      <li>finalBalance: {{ finalBalance }}</li>
      <li>txs: {{ txs }}</li>
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
    id: 0,
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
        this.hash = this.info.hash
        this.id = this.info.ver
        this.nTx = this.info.nTx
        this.nUnredeemed = this.info.nUnredeemed
        this.totalReceived = this.info.totalReceived
        this.totalSent = this.info.totalSent
        this.finalBalance = this.info.finalBalance
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
  background-color: grey;
  /*display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;*/
}



</style>
