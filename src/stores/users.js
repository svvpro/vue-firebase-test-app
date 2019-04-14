import * as fbs from 'firebase'

class User {
    constructor(id) {
        this.id = id;
    }
}

export default {
    state: {
        user: null
    },
    getters: {
        user(state) {
            return state.user
        },
        isUserLoggedIn(state) {
            return state.user !== null
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        async registerUser({commit}, {email, password}) {
            commit('setLoading', true);
            commit('clearError');
            try {

                const user = await fbs.auth().createUserWithEmailAndPassword(email, password);
                commit('setUser', new User(user.id));
                commit('setLoading', false);
            } catch (e) {
                commit('setLoading', false);
                commit('setError', e.message);
                throw error
            }
        },
        async loginUser({commit}, {email, password}) {
            commit('setLoading', true);
            commit('clearError');
            try {

                const user = await fbs.auth().signInWithEmailAndPassword(email, password);
                commit('setUser', new User(user.id));
                commit('setLoading', false);
            } catch (e) {
                commit('setLoading', false);
                commit('setError', e.message);
                throw error
            }
        },
        autoLoginUser({commit}, payload) {
            commit('setUser', new User(payload.id))
        },
        async logoutUser({commit}) {
            await fbs.auth().signOut();
            commit('setUser', null);
        }
    }
}
