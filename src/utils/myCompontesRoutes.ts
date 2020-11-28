interface ImyComponentes {
    title: string;
    icon: string;
    to: string;
}

const myComponentes: Array<ImyComponentes> = [
    { title: "Create taks", icon: "mdi-view-dashboard", to: "/" },
    { title: "List taks", icon: "mdi-account-box", to: "/listTaks" },
    { title: "Edit taks", icon: "mdi-gavel", to: "/editTaks" },
];

export default myComponentes