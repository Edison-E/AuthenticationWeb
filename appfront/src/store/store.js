import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            isAuthenticate: false,
            username: "",
            email: ""
        }
    },
    mutations: {
        setAuthentication(state, status){
            state.isAuthenticate = status
        },
        setUsername(state, name){
            state.username = name
        },
        setEmail(state, email){
            state.email = email
        }
    }
});

export default store