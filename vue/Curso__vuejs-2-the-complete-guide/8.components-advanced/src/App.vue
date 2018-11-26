<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>

                <button @click="changeComponent('appBlue', 'blue')" class="btn btn-primary">Load Blue Template</button>
                <button @click="changeComponent('appGreen', 'green')" class="btn btn-success">Load Green Template</button>
                <button @click="changeComponent('appRed', 'red')" class="btn btn-danger">Load Red Template</button>

                <hr>

                <component :is="selectedComponent">
                    <h2 slot="title">{{ color }}</h2>
                    <p slot="content">This is the {{ color }} component :D</p>
                </component>

            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selectedComponent: 'appBlue',
                color: 'blue'
            }
        },

        methods: {
            changeComponent(componentName, color) {
                this.selectedComponent = componentName
                this.color = color
            }
        },

        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
