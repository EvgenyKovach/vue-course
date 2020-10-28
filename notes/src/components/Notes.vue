<template>
    <div class="notes">
        <div class="note" :class="{ full: !grid }" v-for="(note, index) in notes" :key='index'>
    
            <div class="note-header">
                <h2> {{ note.title }}  </h2>
                <p class="remove-note" @click='removeNote(index)'>X</p>
            </div>
            <div class="note-body">
                <p>{{ note.descr  }}</p>
                <p class="note-data">{{ note.date }}</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true
        },
        grid: {
            type: Boolean,
            required: true
        }
    },

    methods: {
        removeNote (index) {
            console.log(`Note ${index} -- removed`)
            this.$emit('remove', index)
        }
    }
}
</script>

<style lang="scss" scoped>
    .notes {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 10px 15px;
    }

    .note {
      position: relative;
      margin: 15px 0;
      padding: 10px 15px;
      width: calc(100%/2 - 15px);
      height: auto;
      background: #F9DF9C;

      &.full {
        width: 100%
      }

    }

    h2 {
        color: #3c4294;
        font-weight: bold;
        padding: 5px 0;
    }

    p {
        padding: 5px 0;
    }

    .note-data {
      font-size: 12px;
      color: #dfdff;
    }

    .remove-note {
      cursor: pointer;
      position: absolute;
      right: 15px;
      top: 15px;
    }

    .note-header {
        display: flex;
        justify-content: space-between;
        color: #3c4294;
        font-weight: bold;
        font-size: 16px;
    }
</style>