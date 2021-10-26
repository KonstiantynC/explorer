<template>
  <div>
    <div>
      Address:
      <router-link to="/address">
        {{ transactionOut.addr }}
      </router-link>
    </div>
    <div>
      Value: {{ transactionOut.value }}
    </div>
    <div>
      Index: {{ transactionOut.n }}
    </div>
    <div>
      Pkscript: {{ transactionOut.script }}
    </div>
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


</style>
