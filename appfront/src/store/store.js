import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            isAuthenticate: false
        }
    },
    mutations: {
        setAuthentication(state, status){
            state.isAuthenticate = status
        }
    }
});

export default store