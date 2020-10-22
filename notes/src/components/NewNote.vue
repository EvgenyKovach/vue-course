<template>
    <div class="new-note">
    <input v-model='note.title' type="text">
    <textarea v-model='note.descr'></textarea>
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

<style>
    .new-note {
        text-align: center;
    }

    .btn {
        margin-top: 10px;
    }
</style>