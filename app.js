const app = Vue.createApp({
    data() {
        return {
            title: 'The final empire',
            author: 'J.R.R. Tolkien',
            age: 45
        }
    },
    methods:{
        changeTitle(title) {
          this.title = title

        }
    }
    })
app.mount('#app')