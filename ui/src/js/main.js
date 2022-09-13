const todoapi = axios.create({
  baseURL: "/api/todoitems",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

todoapi.interceptors.response.use(
  (response) => response,
  async (error) => {
    switch (error.response?.status) {
      // case 400:
      // case 401:
      //   alert(error);
      //   console.log(error);
      //   break;
      default:
        alert(error);
        console.log(error);
    }
  }
);

const initdata = {
  appName: "TODO Application",
  todoitems: [],
  isComplete: false,
  isEdit: false,
  name: "",
};

const app = Vue.createApp({
  data() {
    return initdata;
  },
  created() {
    this.loadTodoitems(); // 読込
  },
  methods: {
    loadTodoitems() {
      this.isEdit = false; // 編集フラグを false に
      todoapi.get("/").then((res) => {
        console.log(res.data);
        this.todoitems = res.data;
      });
    },
    addTodo() {
      if (this.name.length <= 0) this.name = "-";
      this.isComplete = false;
      todoapi
        .post("/", {
          name: this.name,
        })
        .then((res) => {
          this.loadTodoitems();
        });
    },
    updateTodo(todo) {
      console.log("changeTodo:" + todo.id);
      todoapi
        .put("/" + todo.id, {
          name: todo.name,
          isComplete: todo.isComplete,
        })
        .then((res) => {
          this.loadTodoitems();
          alert(`番号${todo.id}を更新しました！`);
        });
    },
    deleteTodo(id) {
      console.log("deleteTodo:" + id);
      todoapi.delete("/" + id).then((res) => {
        this.loadTodoitems();
        alert(`番号${todo.id}を削除しました！`);
      });
    },
  },
  computed: {
    getTodoitems() {
      const arr = this.todoitems;
      arr.sort((a, b) => {
        return b.id - a.id;
      });
      return arr;
    },
  },
});
app.mount("#app");
