let actions = {
    createPlayer({commit}, player) {
        axios.post('/api/players', player)
            .then(res => {
                commit('CREATE_PLAYER', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    fetchPlayers({commit}) {
        axios.get('/api/players')
            .then(res => {
                commit('FETCH_PLAYERS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deletePlayer({commit}, player) {
        axios.delete(`/api/players/${player.identifer}`)
            .then(res => {
                if (res.data === 'OK')
                    commit('DELETE_PLAYER', player)
            }).catch(err => {
            console.log(err)
        })
    }
}

export default actions
