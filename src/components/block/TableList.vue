<template>
  <table>
    <tbody>
      <tr class="table__list">
        <td>Hash: {{ hash }}</td>
        <td>No: {{ id }}</td>
        <td>Miner: {{ prevBlock }}</td>
        <td>Merkle root: {{ merkleRoot }}</td>
        <td>Timestamp: {{ timestamp }}</td>
        <td>Bits: {{ bits }}</td>
        <td>Height: {{ height }}</td>
        <td>Number of Transactions: {{ numberOfTransactions }}</td>
        <td>Nonce: {{ nonce }}</td>
        <td>Size: {{ size }}</td>
        <td>Block Reward: {{ blockReward }}</td>
        <td>blockTransactions: []</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'

export default {
  name: 'table-list',
  components: {
  },
  data: () => ({
    info: [],
    errored: true,
    hash: '',
    id: 0,
    prevBlock: '',
    merkleRoot: '',
    timestamp: '',
    bits: 0,
    height: 0,
    numberOfTransactions: 0,
    nonce: 0,
    size: 0,
    maihain: true,
    blockReward: 0,
    transactionVolume: '',
    blockTransactions: []
  }),
  mounted() {
    axios
      .get('https://blockchain.info/rawblock/0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103')
      .then(response => {
        this.info = response.data
        this.hash = this.info.hash
        this.id = this.info.ver
        this.prevBlock = this.info.prev_block
        this.merkleRoot = this.info.mrkl_root
        this.bits = this.info.bits
        this.timestamp = this.info.time
        this.nonce = this.info.nonce
        this.numberOfTransactions = this.info.n_tx
        this.size = this.info.size
        this.mainChain = this.info.main_chain
        this.height = this.info.height
        this.blockReward = this.info.block_index
        this.transactionVolume = this.info.relayed_by
        this.blockTransactions = this.info.tx
        console.log(this.blockTransactions)
      })
      .catch(error  => {
        console.log(error)
      })
  },
  metohds: {

  }


}

  
</script>


<style>
.table__list {
  display: flex;
  flex-direction: column;
  background-color: grey;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px;
  margin-top: 20px;
  width: 100%;
}

</style>
