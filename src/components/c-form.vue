<template>
  <div class="c-form">
    <h2>Make items</h2>
    <label>Activity
      <input
        v-model="activity"
        type="text"
        ref="first"
      />
    </label>
    <input
      type="submit"
      value="Save"
      @click="saveActivity"
    >
  </div>
</template>

<script>
import { uuidv4 } from '@/utils'

export default {
  name: 'CForm',
  props: {
    context: Object
  },
  data () {
    return {
      activity: ''
    }
  },
  mounted () {
    this.$refs.first.focus()
  },
  methods: {
    saveActivity () {
      const item = {
        id: uuidv4(),
        activity: this.activity,
        created: new Date(),
        context: this.context
      }
      this.$emit('created', item)
      this.activity = ''
      this.$refs.first.focus()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .c-form
    padding-bottom: 20px
  h2
    padding-bottom: 10px
  input, label
    display: block
</style>
