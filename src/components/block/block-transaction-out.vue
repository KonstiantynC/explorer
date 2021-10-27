<template>
  <div>
    <router-link 
    :to="{ name: 'address', params: { addr: this.transactionOut.addr }}"
    class="block_out"
    >
      {{ transactionOut.addr }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'transaction-out',
  props: {
    transactionOut: {
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
.block_out {
  text-decoration: none;
}

</style>
