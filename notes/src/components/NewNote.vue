<template>
    <div class="new-note">
    <input v-model='note.title' type="text">
    <textarea v-model='note.descr'></textarea>
    <select v-model='note.priority' class="new-note__select">
        <option value="hot">Важная</option>
        <option value="middle" selected>Обычная</option>
        <option value="cold">Не важная</option>
    </select>
    <button class="btn btnPrimary" @click="addNote">Push</button>
    </div>
</template>

<script>

  export default {
      props: {
          note: {
              type: Object,
              required: true,
          }
      },
      methods: {
          addNote () {
              this.$emit('addNote', this.note)
          }
      }
  }
</script>

<style lang="scss">
  .new-note {
      text-align: center;

      &__select {
          width: 100%;
          margin: 15px 0;
          padding: 10px 15px;
          border-radius: 5px;
      }
  }

  .btn {
      margin-top: 10px;
  }
</style>