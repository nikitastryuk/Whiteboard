<template>
    <div class="historyBox">
        <div @click.prevent.stop="undo()" class="undo">
            <font-awesome-icon icon="undo" />
        </div>
        <div @click.prevent.stop="redo()" class="redo">
            <font-awesome-icon icon="redo" />
        </div>
    </div>
</template>


<script>
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
    import history from '../../../tools/history';
    export default {
        components: {
            FontAwesomeIcon
        },
        methods: {
            undo() {
                history.undo();
            },
            redo() {
                history.redo();
            }
        }
    }
</script>

<style lang="scss" scoped>
    //HistoryBox
    .historyBox {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        padding: 10px 5px;
        border-radius: 5px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.12);
        border: 1px solid #e6e9f0;
        position: absolute;
        top: 265px;
        left: 10px;
        div {
            padding: 10px;
            margin: 5px;
            &:not(.active):hover {
                background: #e6e9f0;
                border-radius: 5px;
            }
        }
    } //HistoryBox end
</style>