<template>
  <div class="ul_list">
    <ul>
      <li>Hash: {{ hash }}</li>
      <li>No: {{ id }}</li>
      <li>vinSz: {{ vinSz }}</li>
      <li>voutSz: {{ voutSz }}</li>
      <li>lockTime: {{ lockTime }}</li>
      <li>relayedBy: {{ relayedBy }}</li>
      <li>Height: {{ blockHeight }}</li>
      <li>Size: {{ size }}</li>
      <li>txIndex: {{ txIndex }}</li>
      <li>inputs: {{ inputs }}</li>
      <li>out: {{ out }}</li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'transaction',
  data: () => ({
    info: [],
    errored: true ,
    hash: '',
    id: 0,
    vinSz: 0,
    voutSz: 0,
    lockTime: '',
    size: 0, 
    relayedBy: '',
    blockHeight: 0,
    txIndex: 0,
    inputs: [],
    out: [],
  }),
  mounted() {
    axios
      .get('https://blockchain.info/rawtx/b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da')
      .then(response => {
        this.info = response.data
        this.hash = this.info.hash
        this.id = this.info.ver
        this.vinSz = this.info.vin_sz
        this.voutSz = this.info.vout_sz
        this.lockTime = this.info.lock_time
        this.size = this.info.size
        this.relayedBy = this.info.relayed_by
        this.blockHeight = this.info.block_height
        this.txIndex = this.info.tx_index
        this.inputs = this.info.inputs
        this.out = this.info.out
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
