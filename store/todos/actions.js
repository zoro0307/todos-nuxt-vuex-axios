export default {
    async getTodos({ commit }) {
        const todos = await this.$axios.$get('/todos?_limit=5')
        commit('SET_TODOS', todos)
    },

    async getATodo({ commit }, todoID) {
        const todo = await this.$axios.$get(`/todos/${todoID}`)
        commit('SET_TODOS', todo)
    },

    async addTodos({ commit }, newTodo) {
        await this.$axios.$post('/todos', newTodo)
        commit('ADD_TODO', newTodo)
    },

    async deleteTodo({ commit }, todoId) {
        await this.$axios.$delete(`/todos/${todoId}`)
        commit('DELETE_TODO', todoId)
    },
}
