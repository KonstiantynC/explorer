<template>
  <div class="content">
    <h2>Block: {{ height }}</h2>
    <table>
      <tbody>
        <tr>
          <td>
            <span>Hash:</span>
            <span>{{ hash }}</span>            
          </td>
          <hr/>
          <td>
            <span>No:</span>
            <span>{{ id }}</span>
          </td>
          <hr/>
          <td>
            <span>Miner:</span>
            <span>{{ prevBlock }}</span>
          </td>
          <hr/>
          <td>
            <span>Merkle root:</span> 
            <span>{{ merkleRoot }}</span>
          </td>
          <hr/>
          <td>
            <span>Timestamp:</span> 
            <span>{{ timestamp }}</span>
          </td>
          <hr/>
          <td>
            <span>Bits:</span> 
            <span>{{ bits }}</span>
          </td>
          <hr/>
          <td>
            <span>Height:</span> 
            <span>{{ height }}</span>
          </td>
          <hr/>
          <td>
            <span>Number of Transactions:</span> 
            <span>{{ numberOfTransactions }}</span>
          </td>
          <hr/>
          <td>
            <span>Nonce:</span>
            <span>{{ nonce }}</span>
          </td>
          <hr/>
          <td>
            <span>Size:</span>
            <span>{{ size }}</span>
          </td>
          <hr/>
          <td>
            <span>Block Reward:</span>
            <span>{{ blockReward }}</span>
          </td>
          <hr/>
        </tr>
      </tbody>
    </table>
  </div>
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
        this.blockTransactions = this.info.tx
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
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1200px;
}

h2 {
  margin-left: 15px;
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
  width: 1200px;
  padding-left: 15px;
}


.title_block {
  padding-right: 200px;
}

td {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 800px;
}

hr {
  width: 1200px;
}

</style>
