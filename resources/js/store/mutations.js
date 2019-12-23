let mutations = {
    CREATE_PLAYER(state,player){
        state.players.unshift(player)
    },
    FETCH_PLAYERS(state,players){
        return state.players = players
    },
    DELETE_PLAYER(state,player){
        let index = state.players.findIndex(item=>item.id === player.identifer)
        state.players.splice(index,1)
    },
}

export default mutations;
