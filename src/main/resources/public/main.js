// TODOリスト
const todoitems = [
  {
    id: 1,
    done: false,
    name: "昼寝をする",
  },
  {
    id: 2,
    done: false,
    name: "勉強をする",
  },
  {
    id: 3,
    done: true,
    name: "ゲームをする",
  },
  {
    id: 4,
    done: true,
    name: "料理をする",
  },
];

const api = axios.create({
  baseURL: "/api",
  timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" },
});

// const ToDoApi = {
//   getUser(id) {
//     return base.get(`/todoitems/${id}`);
//   },
//   getUsers() {
//     return base.get(`/todoitems/`);
//   },
// };

// MyData
const mydata = {
  appName: "TODO Application",
  todoitems: todoitems, // TODOリスト
  done: false, // 選択中のリスト
  edit: 0, // 編集中のID
  name: "", // 追加する項目
};

const app = Vue.createApp({
  data() {
    return mydata;
  },
  created() {
    this.loadTodoitems(); // 読込
  },
  methods: {
    loadTodoitems() {
      console.log("loadTodoitems!!");
      const json = localStorage.getItem("todo"); // 読込
      if (json != null) this.todoitems = JSON.parse(json); // データ変換
      api
        .get("/todoitems")
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
        });
    },
    switchTodo() {
      console.log("switchTodo!!");
      this.done = !this.done; // true/falseの切替
      this.saveTodoitems(); // 保存
    },
    changeTodo(id) {
      console.log("changeTodo:" + id);
      this.todoitems.forEach((todo) => {
        if (todo.id == id) todo.done = !todo.done;
      }); // true/falseを切替える
      this.saveTodoitems(); // 保存
    },
    deleteTodo(id) {
      console.log("deleteTodo:" + id);
      this.todoitems = this.todoitems.filter((todo) => {
        return todo.id != id;
      }); // 配列から削除する
      this.saveTodoitems(); // 保存
    },
    editTodo(id) {
      console.log("editTodo:" + id);
      this.edit = id; // 編集中のID
    },
    pushTodo() {
      console.log("pushTodo:" + this.name);
      if (this.name.length <= 0) this.name = "-"; // タイトルが未入力の場合はキャンセル
      this.done = false; // doneをfalseに戻しておく
      const todo = {
        id: Number(Date.now()).toString(16), // 日付のタイムスタンプをIDにする
        done: false, // デフォルトはfalseにしておく
        name: this.name, // フォームに入力された値
      };
      this.todoitems.push(todo); // 配列に追加する
      this.saveTodoitems(); // 保存
    },
    saveTodoitems() {
      // console.log("saveTodoitems!!");
      const json = JSON.stringify(this.todoitems); // データ変換
      localStorage.setItem("todo", json); // 保存
    },
  },
  computed: {
    getTodoitems() {
      const arr = this.todoitems.filter((todo) => {
        return this.done == todo.done;
      }); // 配列を取り出す
      arr.sort((a, b) => {
        return b.id - a.id;
      }); // 降順に並び替える
      return arr;
    },
  },
});
app.mount("#app");
