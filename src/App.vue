<template>
    <div id="app">
        <h1>Just a completely unstyled Todo List</h1>
        <form @submit.prevent="addNewTodo()">
            <input v-model="todo" placeholder="Add new todo" />
            <input type="submit" />
        </form>
        <div class="todo" v-for="(todo, i) in todos" v-bind:key="todo">
            <p :class="{ isDone: todo.done }">{{ todo.title }}</p>
            <div>
                <button @click="deleteTodo(i)">Delete</button>
                <button @click="markDone(todo)" v-if="!todo.done">Done</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            todo: "",
            todos: []
        };
    },
    methods: {
        addNewTodo() {
            this.todos.push({ title: this.todo, done: false });
            this.todo = "";
        },
        markDone(todo) {
            todo.done = true;
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 20rem;
    margin: 4rem auto;
}

.todo {
    display: flex;
    justify-content: space-between;
    background-color: #999999;
    margin: 2rem 0;
    padding: 1rem 1rem;
}

.todo div {
    display: flex;
}

.isDone {
    text-decoration: line-through;
}
</style>
