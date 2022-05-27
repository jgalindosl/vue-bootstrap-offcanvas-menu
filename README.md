# Bootstrap 5 Offcanvas menu

## Installation

```shell
    npm install vue-bootstrap-offcanvas-menu
```

## Usage

```vue
<template>
    <OffCanvasMenu :menus="menus">
            <template v-slot:brand>
                <img
                    src="logo.svg"
                    alt=""
                    width="30"
                    height="24"
                    class="d-inline-block"
                />
                Title
            </template>
            <template v-slot:header>
                User and icon
            </template>
        </menu-offcanvas>
</template>
<script>
import OffCanvasMenu from "vue-bootstrap-offcanvas-menu"
export default {
    components: ["OffCanvasMenu"],
    data() {
        return {
            menus: [
                {
                    title: null,
                    nodes: [
                        {
                            id: 1,
                            label: "Hola",
                            icon: "fa fa-home",
                            url: "/",
                            children: [],
                        },
                        {
                            id: 2,
                            label: "Otro boton",
                            icon: "fa fa-star",
                            url: "",
                            children: [
                                {
                                    id: 3,
                                    label: "adios",
                                    icon: "fa fa-star",
                                    url: "/adios",
                                    children: [
                                        {
                                            id: 30,
                                            label: "adiossss",
                                            icon: "fa fa-star",
                                            url: "/adiossss",
                                        },
                                        {
                                            id: 31,
                                            label: "holllaaaa",
                                            icon: "fa fa-star",
                                            url: "/holaaaa",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 4,
                            label: "LEVEL1",
                            icon: "fa fa-user",
                            url: "",
                            children: [
                                {
                                    id: 5,
                                    label: "LEVEL2",
                                    icon: "fa fa-star",
                                    url: "/talvez",
                                },
                            ],
                        },
                    ],
                },
                {
                    title: "USUARIO",
                    nodes: [
                        {
                            id: 9000,
                            label: "Perfil",
                            icon: null,
                            url: "/",
                            children: [],
                        },
                        {
                            id: 9500,
                            label: "Logout",
                            icon: "fa fa-star",
                            url: "/",
                            children: [],
                        },
                    ],
                },
            ],
        }
    }
}
</script>
```
