# Bootstrap 5 Offcanvas menu

Easily create a recursive n-level menu using this package. Requires

-   bootstrap >=5.2.0
-   fontawesome >= 5.0.0

A demo project is included with all available functionality.

## Installation

```shell
    npm install vue-bootstrap-offcanvas-menu
```

Include globally on your `app.js` file

```
import OffCanvasMenu from 'vue-bootstrap-offcanvas-menu';
Vue.component("OffCanvasMenu", OffCanvasMenu);
```

or locally

```
<script>
import OffCanvasMenu from "vue-bootstrap-offcanvas-menu";
export default {
    components: {
        OffCanvasMenu,
    },
}
</script>
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
                            label: "Level 1 Option 1",
                            icon: "fa fa-home",
                            url: "/",
                            children: [],
                        },
                        {
                            id: 2,
                            label: "Level 1 Option 2",
                            icon: "fa fa-star",
                            url: "",
                            children: [
                                {
                                    id: 3,
                                    label: "Level 2 Option 1",
                                    icon: "fa fa-star",
                                    url: "/adios",
                                    children: [
                                        {
                                            id: 30,
                                            label: "Level 3 Option 1",
                                            icon: "fa fa-star",
                                            url: "/adiossss",
                                        },
                                        {
                                            id: 31,
                                            label: "Level 3 Option 2",
                                            icon: "fa fa-star",
                                            url: "/holaaaa",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 4,
                            label: "Level 1 Option 3",
                            icon: "fa fa-user",
                            url: "",
                            children: [
                                {
                                    id: 5,
                                    label: "Level 2 Option 1",
                                    icon: "fa fa-star",
                                    url: "/talvez",
                                },
                            ],
                        },
                    ],
                },
                {
                    title: "User",
                    nodes: [
                        {
                            id: 9000,
                            label: "Profile",
                            icon: null,
                            url: "/profile",
                            children: [],
                        },
                        {
                            id: 9500,
                            label: "Logout",
                            icon: "fa fa-star",
                            url: "/logout",
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
