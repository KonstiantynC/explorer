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
      <li 
        class="li__inputs" 
        v-for="(input, index) in inputs"
        :key="`input-${index}`"
      > 
        <div>
          Address: 
          <router-link to="/address">
            {{ input.prev_out.addr }}
          </router-link>
        </div>
        <!--<div>
          Witness: {{ input.script }}    
        </div>-->
        <div>
          Pkscript: {{ input.prev_out.script }}
        </div>
      </li>
      <li
        class="li__out"
        v-for="(itemOut, index) in out"
        :key="`itemOut-${index}`"
      > 
        <div>
          Address:
          <router-link to="address">
            {{ itemOut.addr }}
          </router-link>
        </div>
        <div>Value: {{ itemOut.value }}</div>
        <div>Index: {{ itemOut.n }}</div>
        <div>Pkscript: {{ itemOut.script }}</div>
      </li>
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
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.ul_list {

}

.li__inputs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1185pxpx;
}

.li__out {
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  width: 1185pxpx;
}

</style>
