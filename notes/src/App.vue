<template>
  <div class="wrapper">

    <div class="wrapper-content">
      <section>
        <div class="container">
          
          <h1> {{ title }} </h1>

          <message v-if='message' :message='message'  />

          <newNote :note='note' @addNote='addNote' />
          
          <notes :notes='notes' @remove='removeNote' />

        </div>
      </section>
    </div>

  </div>
</template>

<script>
import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'

export default {
  components: {
    message,
    newNote,
    notes
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
      },
      removeNote(index) {
        this.notes.splice(index, 1)
      } 
  }
}
</script>
<style>
</style>
