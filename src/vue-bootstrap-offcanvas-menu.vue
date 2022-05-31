<template>
    <nav class="navbar bg-light fixed-top shadow">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">
                <slot name="brand"></slot>
            </a>

            <div
                class="offcanvas offcanvas-start offcanvas-dark text-light"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div class="offcanvas-header">
                    <slot name="header"></slot>
                    <button
                        type="button"
                        class="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body">
                    <div v-for="(menu, i) in menus" :key="i">
                        <h6 class="offcanvas-title text-light">
                            {{ menu.title }}
                        </h6>
                        <nav class="d-grid gap-1 mb-3">
                            <off-canvas-menu-item
                                v-for="node in menu.nodes"
                                :key="node.id"
                                :node="node"
                                :bus="bus"
                                :selectedNode="selectedNode"
                            />
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import Vue from "vue";
import OffCanvasMenuItem from "./vue-bootstrap-offcanvas-menu-item";
export default {
    name: "off-canvas-menu",
    props: ["menus"],
    components: { OffCanvasMenuItem },
    mounted() {
        if (localStorage.getItem("csgtmenuselected")) {
            try {
                this.selectedNode = JSON.parse(localStorage.getItem("csgtmenuselected"));
            } catch (e) {
                localStorage.removeItem("csgtmenuselected");
            }
        }
        this.bus.$on("selectNode", (node) => {
            const parsed = JSON.stringify(node);
            localStorage.setItem("csgtmenuselected", parsed);
            this.selectedNode = node;
        });
    },
    data() {
        return {
            bus: new Vue(),
            selectedNode: null,
        };
    },
};
</script>
<style scoped>
.offcanvas-dark {
    background: #343a40;
}

.offcanvas {
    width: 300px;
}
</style>
