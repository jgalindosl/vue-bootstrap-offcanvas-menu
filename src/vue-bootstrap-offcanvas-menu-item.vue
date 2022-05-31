<template>
    <div :class="`ms-` + level">
        <button
            :class="buttonClass"
            data-bs-toggle="collapse"
            :data-bs-target="`#node` + node.id"
            aria-expanded="false"
            :aria-controls="`node` + node.id"
            @click="selectNode"
        >
            <i :class="node.icon" v-if="node.icon"></i>
            {{ node.label }}
            <span v-if="hasChildren" class="fas fa-solid fa-angle-down float-end mt-1" />
        </button>
        <div :class="{ collapse: !selected }" v-if="hasChildren" :id="`node` + node.id">
            <off-canvas-menu-item
                v-for="child in node.children"
                :key="child.id"
                :node="child"
                :level="level + 2"
                :bus="bus"
                :selectedNode="selectedNode"
            />
        </div>
    </div>
</template>
<script>
export default {
    name: "off-canvas-menu-item",
    props: {
        node: {
            type: Object,
            required: true,
        },
        level: {
            type: Number,
            default: 0,
        },
        selectedNode: {
            type: Object,
            default: null,
        },
        bus: {
            type: Object,
            required: true,
        },
    },
    computed: {
        hasChildren() {
            const { children } = this.node;
            return children && children.length > 0;
        },
        buttonClass() {
            return {
                btn: true,
                "text-opacity-75": true,
                "text-light": !this.selected || (this.selected && this.level == 0),
                "btn-primary": this.selected && this.level == 0,
                "btn-light": this.selected && this.level > 0,
                "text-start": true,
                "mb-1": true,
                "w-100": true,
                collapsed: !this.selected && this.hasChildren,
            };
        },
        selected() {
            console.log("selected function en " + this.node.label);
            if (!this.selectedNode) {
                console.log("selectedNode es nulo, abort " + this.node.label);
                return false;
            }
            if (this.selectedNode.id == this.node.id) {
                return true;
            }
            let ret = this.checkChildren(this.node.children);
            console.log("Ret value de checkChildren: " + ret + " " + this.node.label);
            return ret;
        },
    },
    methods: {
        selectNode() {
            if (this.hasChildren) {
                return;
            }
            console.log("select emitido al papa " + this.node.label);
            this.bus.$emit("selectNode", this.node);
            window.location = this.node.url;
        },

        checkChildren: function (children) {
            console.log("checkChildren en " + this.node.label);
            if (children && children.length > 0) {
                console.log("si tiene children " + this.node.label);
                for (const child of children) {
                    console.log("foreach children " + this.node.label);
                    console.log("child: " + JSON.stringify(child));
                    console.log("selectedNode: " + JSON.stringify(this.selectedNode));
                    if (child.id == this.selectedNode.id) {
                        console.log("si es igual el child al selected " + this.node.label);
                        return true;
                    }
                    console.log("ninguno es igual, buscando nietos " + this.node.label);
                    if (this.checkChildren(child.children)) {
                        return true;
                    }
                }
            }
            console.log("no tiene children " + this.node.label);
            return false;
        },
    },
};
</script>
<style scoped>
.btn span {
    transition: 0.3s transform ease-in-out;
}
.collapsed span {
    transform: rotate(90deg);
}
</style>
