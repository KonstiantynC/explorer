<template>
  <div>
    {{ addressTableListsOut.prev_out }}
  </div>
</template>

<script>
export default {
  name: 'address-table-lists-out',
  props: {
    addressTableListsOut: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({

  }),
  mounted() {
    console.log(this.addressTableListsOut)
  }
}
</script>


<style>


</style>
