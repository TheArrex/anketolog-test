<template>
  <main>
    <item v-for="item in tree" :item="item"/>
  </main>
</template>

<script>
import Item from './components/Item.vue'
import { store } from './store'

export default {
  components: { Item, store },
  computed: {
    tree() {
      return store.state.tree
    }
  }
}
</script>