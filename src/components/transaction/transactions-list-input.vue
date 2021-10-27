<template>
  <div>
    <div>
      Address: 
      <router-link
        class="transact_link" 
        :to="{ name: 'address', params: { addr: this.transactionInput.prev_out.addr  }}"
      >
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
.transact_link {
  text-decoration: none;
}

</style>
