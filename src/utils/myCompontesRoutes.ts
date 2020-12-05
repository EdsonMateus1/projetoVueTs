interface ImyComponentes {
  title: string;
  icon: string;
  to: string;
}

const myComponentes: Array<ImyComponentes> = [
  { title: "Create taks", icon: "mdi-plus", to: "/home/createTaks" },
  { title: "List taks", icon: "mdi-view-list", to: "/home" },
  { title: "Edit taks", icon: "mdi-tooltip-edit-outline", to: "/home/editTaks" }
];

export default myComponentes;
