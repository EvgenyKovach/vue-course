<template>
  <div class="wrapper">

    <div class="wrapper-content">
      <section>
        <div class="container">
          

          <message v-if='message' :message='message'  />

          <newNote :note='note' @addNote='addNote' />

          <div class="note-title" style="margin: 36px 0">

            <h1> {{ title }} </h1> 

            <search  :value='search' 
                      placeholder='find ur note' 
                      @search='search = $event'/>

            <div class="icons">
              <svg :class="{ active: grid }" @click="grid = true" xmlns="http://www.w3.org/2000/svg" style='cursor: pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="grid = false"  xmlns="http://www.w3.org/2000/svg" style='cursor: pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>

          <notes :notes='notesFilter' :grid="grid" @remove='removeNote' />

        </div>
      </section>
    </div>

  </div>
</template>

<script>
import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'
import search from '@/components/Search.vue'

export default {
  components: {
    message,
    newNote,
    notes,
    search
  },
  data () {
      return {
        title: 'Notes App',
        search: '',
        message: null,
        grid: true,
        note: {
          title: '',
          descr: ''
        },
        notes: [
          {
            title: 'first note',
            descr: 'desr for first note',
            date: new Date(Date.now()).toLocaleString(),
            priority: "hot"
          },
          {
            title: 'second note',
            descr: 'desr for second note',
            priority: 'middle',
            date: new Date(Date.now()).toLocaleString()
          },
          {
            title: 'third note',
            descr: 'desr for third note',
            priority: 'cold',
            date: new Date(Date.now()).toLocaleString()
          }
        ]
      }
    },
    computed: {
      notesFilter () {
        let array = this.notes,
            search = this.search
        
        if (!search) return array

        search = search.trim().toLowerCase()

        array = array.filter(function (item) {
          if (item.title.toLowerCase().indexOf(search) !== -1) {
            return item
          }
        })

        return array
      }
    },
    methods: {
      addNote() {
        // console.log(this.note)
        let {title, descr, priority} = this.note

        if (title === '') return this.message = 'need title'

        this.notes.push({
          title: title,
          descr: descr,
          priority: priority,
          date: new Date(Date.now()).toLocaleString()
        })
        this.note.title =''
        this.note.descr =''
        this.note.priority = ''
        this.message = null
      },
      removeNote(index) {
        this.notes.splice(index, 1)
      }
  }
}
</script>
<style lang="scss">
  .note-title {
    display: flex;
    justify-content: space-between;

    margin-top: 15px;
    font-size: 26px;
    font-weight: 500;
    color: #494ce8;
  }

  svg {
    color: rgb(102, 102, 102);
    margin: 0 5px;
    cursor: pointer;

    &.active {
      color: #494ce8
    }
  }
</style>