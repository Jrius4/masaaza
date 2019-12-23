<template>
        <form action="" @submit="createPlayer(post)">
            <h4 class="text-center font-weight-bold">Post creation form</h4>
            <div class="form-group">
                <input type="text" placeholder="Player Name" v-model="player.name" class="form-control">

            </div>
            <div class="form-group">
                <textarea v-model="player.biography" placeholder="Player Biography" class="form-control">

                </textarea>
            </div>
            <div class="form-group">
                <button :disabled="!isValid" class="btn btn-block btn-primary" @click.prevent="createPlayer(player)">Submit
                </button>
            </div>
        </form>
    </template>

    <script>
        export default {
            name: "CreatePlayer",
            data() {
                return {
                    player: {
                        name: '',
                        biography: ''
                    }
                }
            },
            methods: {
                createPlayer(player) {
                    this.$store.dispatch('createPlayer', player)
                }
            },
            computed: {
                isValid() {
                    return this.player.name !== '' && this.player.biography !== ''
                }
            }
        }
    </script>

    <style scoped>

    </style>
