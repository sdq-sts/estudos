<template>
    <div class="container"  ref="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <input v-onEvent:click="executeEvent" type="button" value="Click to change background color">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'onEvent': {
                bind(el, binding, vnode) {
                    if (binding.arg) {
                        el.addEventListener(binding.arg, binding.value)
                    }
                }
            }
        },

        methods: {
            executeEvent() {
                if(this.$el.style.background !== 'aquamarine') {
                    this.$el.style.background = 'aquamarine'
                } else {
                    this.$el.style.background = 'cyan'
                }
            }
        }
    }
</script>

<style>
</style>
