<template>
  <div class="error_title">
    <div class="error_circle">
      <div>!</div>
    </div>
    <div class="error_text">
      TI EBLAN  
    </div>
  </div>
  <spinner />
</template>

<script>
import spinner from '../spinner.vue'

export default {
  name: 'error',
  components: {
    spinner
  },
  props: {
    erroredInput: {
      type: Object,
      default: () => ({
      }),
      required: true
    }
  },
  data: () => ({

  }),
  mounted () {
    console.log(this.erroredInput)
  }
}
</script>


<style>
.error_title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 45px;
  background-color: #ffcccc;
  margin-top: 10px;
  width: 100%;
}

.error_circle{
  width: 30px;
  height: 30px;
  line-height: 30px;
  background: #990000;
  border-radius: 50%;
  color: white;
  font-size: 25px;
  font-family: verdana;
  text-align: center;
  margin-right: 10px;
}

.error_text {
  font-size: 20px;
  font-weight: 500;
}
</style>
