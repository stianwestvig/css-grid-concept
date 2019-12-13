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
import { saveActivity, getAllActivity } from '@/utils/api.js'

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
      saveActivity(item)
      this.items.push(item)
    }
  },
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      vm.items = await getAllActivity()
    })
  }
}
</script>
