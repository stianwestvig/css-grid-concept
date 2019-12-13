<template>
  <div class="c-context">
    <h2>Set context</h2>
    <!-- <p>todo: dynamisk legge til og fjerne flere context</p> -->

    <div class="flex">
      <label>Product
        <input
          v-model="code"
          type="text"
          @blur="updateContext"
        />
      </label>
      <label>Producer
        <input
          v-model="org"
          type="text"
          tabindex="-1"
        />
      </label>
    </div>
    <label>Name
      <input
        v-model="name"
        type="text"
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
  .flex
    display: flex
    margin-bottom: 10px
  .c-context
    padding-bottom: 20px
  h2
    padding-bottom: 10px
  input, label
    display: block
</style>
