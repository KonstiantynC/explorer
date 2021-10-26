<template>
  <div>
    <div>
      Address: 
      <router-link to="/address">
        {{ transactionInput.prev_out.addr }}
      </router-link>
    </div>
    <div>
      Pkscript: {{ transactionInput.prev_out.script }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'transaction-input',
  props: {
    transactionInput: {
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
