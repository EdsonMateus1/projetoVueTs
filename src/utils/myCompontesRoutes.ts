interface ImyComponentes {
    title: string;
    icon: string;
    to: string;
}

const myComponentes: Array<ImyComponentes> = [
    { title: "Create taks", icon: "mdi-plus", to: "/" },
    { title: "List taks", icon: "mdi-view-list", to: "/listTaks" },
    { title: "Edit taks", icon: "mdi-tooltip-edit-outline", to: "/editTaks" },
];

export default myComponentes