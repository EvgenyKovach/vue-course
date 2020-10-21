<template>
  <div class="wrapper">

    <div class="wrapper-content">
      <section>
        <div class="container">
          
        <h1> {{ title }} </h1>

          <message v-if='message' :message='message'/>

          <div class="new-note">
            <input v-model='note.title' type="text">
            <textarea v-model='note.descr' ></textarea>
            <button @click="addNote">Push</button>
          </div>

          <div class="notes">

            <div class="note" v-for="(note, index) in notes" :key='index'>
              
              <div class="note-header">
                <h2> {{ note.title }}  </h2>
              </div>
              <div class="note-body">
                <p>{{ note.descr  }}</p>
                <p>{{ note.date }}</p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>

  </div>
</template>

<script>
import message from '@/components/Message.vue'

export default {
  components: {
    message
  },
  data () {
      return {
        title: 'Notes App',
        message: null,
        note: {
          title: '',
          descr: ''
        },
        notes: [
          {
            title: 'first note',
            descr: 'desr for first note',
            date: new Date(Date.now()).toLocaleString()
          },
          {
            title: 'second note',
            descr: 'desr for second note',
            date: new Date(Date.now()).toLocaleString()
          },
          {
            title: 'third note',
            descr: 'desr for third note',
            date: new Date(Date.now()).toLocaleString()
          }
        ]
      }
    },
    methods: {
      addNote() {
        // console.log(this.note)
        let {title, descr} = this.note

        if (title === '') return this.message = 'need title'

        this.notes.push({
          title: title,
          descr: descr,
          date: new Date(Date.now()).toLocaleString()
        })
        this.note.title =''
        this.note.descr =''
        this.message = null
      }
  }
}
</script>
<style>
</style>
