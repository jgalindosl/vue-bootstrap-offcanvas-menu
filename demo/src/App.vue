<template>
    <div id="app" class="bg-light pb-4">
        <OffCanvasMenu :menus="menus">
            <template v-slot:brand>
                <img
                    src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
                    alt=""
                    width="30"
                    height="24"
                    class="d-inline-block"
                />
                Menu demo
            </template>
            <template v-slot:header> Header content goes here </template>
        </OffCanvasMenu>
        <div class="container mt-5 pt-4">
            Vue Bootstrap Offcanvas Menu is using the following data:<br /><br />
            <div class="card">
                <div class="card-body">
                    <pre>{{ menus }}</pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OffCanvasMenu from "vue-bootstrap-offcanvas-menu";
export default {
    name: "App",
    components: {
        OffCanvasMenu,
    },
    data() {
        return {
            menus: [
                {
                    title: "Main Menu",
                    nodes: [
                        {
                            id: 1,
                            label: "First menu",
                            icon: "fa fa-star",
                            url: "/first",
                            children: [
                                {
                                    id: 11,
                                    label: "First child",
                                    icon: "fa fa-circle",
                                    url: "/firstchild",
                                    children: [],
                                },
                                {
                                    id: 12,
                                    label: "Second child",
                                    url: "/secondchild",
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    title: "User",
                    nodes: [
                        {
                            id: 2,
                            label: "Profile",
                            icon: "fa-solid fa-apple-whole",
                            url: "/first",
                            children: [
                                {
                                    id: 21,
                                    label: "Second subchild",
                                    url: "/firstchild",
                                    children: [],
                                },
                                {
                                    id: 22,
                                    label: "third subchild",
                                    url: "/secondchild",
                                    children: [],
                                },
                            ],
                        },
                        {
                            id: 3,
                            label: "Logout",
                            icon: "fa-solid fa-arrow-right-from-bracket",
                            url: "#",
                            children: [],
                        },
                    ],
                },
            ],
        };
    },
};
</script>
<style src="bootstrap/dist/css/bootstrap.min.css"></style>
<style src="@fortawesome/fontawesome-free/css/all.min.css"></style>
