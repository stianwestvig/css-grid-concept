<template>
  <div class="c-context">
    <h2>Set context</h2>
    <p>todo: dynamisk legge til og fjerne flere context</p>
    <label>Coupon code
      <input
        v-model="code"
        type="text"
        ref="first"
        @blur="updateContext"
      />
    </label>
    <label>Name
      <input
        v-model="name"
        type="text"
        ref="first"
        @blur="updateContext"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'CContext',
  data () {
    return {
      code: '',
      name: '',
      org: ''
    }
  },
  methods: {
    updateContext () {
      if (this.code === 'RTX2080') {
        this.org = 'Nvidia'
      }
      if (this.code === 'PS4') {
        this.org = 'Sony'
      }
      if (this.code === 'PDP5080') {
        this.org = 'Pioneer'
      }
      this.$emit('updateContext', this.$data)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .c-context
    padding-bottom: 20px
  h2
    padding-bottom: 10px
  input, label
    display: block
</style>
