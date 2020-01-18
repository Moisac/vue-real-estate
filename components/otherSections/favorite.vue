<template>
    <div>
        <span class="to-favorite" v-b-tooltip.hover title="Add to favorite" @click="addToFav"><img width="20" src="~/assets/images/icons/heart.png" alt=""></span>
    </div>
</template>

<script>
import { createStore } from '@/store/index.js';

    export default {
        props: {
                title: String,
                image: String,
                id: String,
        },

        data() {
            return {
                favItems: [],
                item: {
                    propertyId: this.id,
                    propertyTitle: this.title,
                    propertyImage: this.image,
                }
            }
        },

        methods: {
            addToFav() {
                this.$store.commit('addToFav', this.item)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .to-favorite {
        position: absolute;
        top:5px;
        right: 5px;
        cursor: pointer;
    }
</style>