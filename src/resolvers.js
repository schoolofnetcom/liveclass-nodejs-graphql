import store from './store';
// let id = 1;

export default {
    tasks() {
        return store.tasks;
    },   
    createTask({ title }) {
        const task = {
            // id: id++,
            id: Math.random().toString(24).substr(2, 8),
            title
        }
        return store.tasks.push(task);
    }

    // users() {

    // },
    // createUser() {

    // }
}