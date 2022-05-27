# Bootstrap 5 Offcanvas menu

Easily create a recursive n-level menu using this package. Requires

-   bootstrap >=5.2.0
-   fontawesome >= 5.0.0

A demo project is included with all available functionality.

## Installation

```shell
    npm install vue-bootstrap-offcanvas-menu
```

## Usage

Import the package in your vue component. There are 2 optional slots that can be personalized.

-   The first one is the logo and title on the right of the top nav
-   The other is the top of the menu, that may be used for user information or title

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
