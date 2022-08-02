<template>
  <ul>
    <li>
      <div class="item__wrapper">
        <div>
          <IconFile v-show="item.type === 'file'"/>
          <IconFolder v-show="item.type === 'folder'"/>
          <input v-model="item.name" v-if="isEdit">
          <span v-else>{{ item.name }}</span>
        </div>
        <div>
          <button @click="isEdit = !isEdit">
            <IconPencil/>
          </button>
          <button @click="removeItem(item)">
            <IconTrash/>
          </button>
        </div>
      </div>

      <!-- Recursive component call by it's name-->
      <item
          class="item"
          v-for="children in item.children"
          :key="children.name"
          :item="children"
      />
    </li>
  </ul>
</template>

<script>
import IconFile from './icons/IconFile.vue'
import IconFolder from './icons/IconFolder.vue'
import IconPencil from './icons/IconPencil.vue'
import IconTrash from './icons/IconTrash.vue'
import { mapState } from 'vuex'
import { store } from '../store'

export default {
  name: 'item',
  components: { mapState, store, IconFile, IconFolder, IconPencil, IconTrash },
  props: {
    item: Object
  },
  data() {
    return {
      isEdit: false,
      oldValue: ''
    }
  },
  methods: {
    removeItem(item) {
      store.commit('removeItem', {data: item})
    }
  }
}
</script>
