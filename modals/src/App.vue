<template>
  <div class="wrapper">

    <div class="wrapper-content">
      <section>
        <div class="container">
          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">First modal</button>

          <modals 
            title='first modal'
            v-if='modalFirst'
            @close="modalFirst = !modalFirst"
            >Yop</modals>
        </div>
      </section>
    </div>

  </div>
</template>

<script>

import modals from '@/components/Modal.vue'
export default {
  components: { modals },
  data () {
    return {
      modalFirst: false
    }
  }
}

</script>
  
<style>
</style>
