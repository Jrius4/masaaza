<template>
        <div>
            <h4 class="text-center font-weight-bold"><span>{{players && players.meta?players.meta.total:'Loading...'}}</span> Players</h4>
            <table class="table table-striped table-success text-primary">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Biography</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="player in players.data">
                    <td>{{player.name}} <span class="badge badge-dark">{{player.identifer}}</span></td>
                    <td>{{player.biography}}</td>
                    <td>
                        <button class="btn btn-danger" @click="deletePlayer(player)"><i style="color:white" class="fa fa-trash"></i></button>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>


    </template>

    <script>
        import {mapGetters} from 'vuex'

        export default {
            name: "Players",
            mounted() {
                this.$store.dispatch('fetchPlayers')
            },
            methods: {
                deletePlayer(player) {
                    this.$store.dispatch('deletePlayer',player)
                }
            },
            computed: {
                ...mapGetters([
                    'players'
                ])
            }
        }
    </script>

    <style scoped>

    </style>
