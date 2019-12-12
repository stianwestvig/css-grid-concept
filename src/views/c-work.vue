<template>
  <div class="c-work">
    <c-context @updateContext="handleContext" />
    <c-form :context="context" @created="handleSave" />
    <c-activity-list :items="items" />
  </div>
</template>

<script>
import CContext from '@/components/c-context.vue'
import CForm from '@/components/c-form.vue'
import CActivityList from '@/components/c-activity-list.vue'

export default {
  name: 'CWork',
  components: { CActivityList, CContext, CForm },
  data () {
    return {
      context: {},
      items: []
    }
  },
  methods: {
    handleContext (context) {
      this.context = context
    },
    handleSave (item) {
      this.items.push(item)
    }
  }
}
</script>
