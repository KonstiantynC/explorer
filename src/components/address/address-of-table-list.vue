<template>
  <div>
    <ul>
      <li>Hash: {{ addressList.hash160 }}</li>
      <li>Address: {{ addressList.address }}</li>
      <li>nTx: {{ addressList.n_tx }}</li>
      <li>nUnredeemed: {{ addressList.n_unredeemed }}</li>
      <li>totalReceived: {{ addressList.total_received }}</li>
      <li>totalSent: {{ addressList.total_sent }}</li>
      <li>finalBalance: {{ addressList.final_balance }}</li>
      <li
        class="address__transaction"
        v-for="(item, index) in addressList.txs"
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
export default {
  name: 'address-list',
  props: {
    addressList: {
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


</style>
