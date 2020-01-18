<template>
    <div id="properties-grid">
         <b-card no-body class="my-5">
            <b-tabs fill>
            <b-tab title="Apartments" active>
                <b-row>
                    <b-col class="my-3" cols="12" md="4" v-for="(property, id) in properties" :key="id">
                        <div class="property-grid-card">
                        <div class="wrap">
                            <img width="320" :src="property.img">
                            <span class="promoted-badge" v-if="property.promoted == 'Promoted'">{{ property.promoted }}</span>
                            <span class="type-badge">{{property.type }}</span>
                            <span class="contract-badge">{{property.contract }}</span>
                            <favorite 
                            :title="property.title"
                            :image="property.img"
                            :id="property.id"
                          />
                            <nuxt-link :to="`/properties/${property.id}`">
                            <h5 class="my-2 property-title">{{ property.title }}</h5>
                            </nuxt-link>
                            <h4 class="text-left pl-3"><b>{{ property.price }}</b></h4>
                            <hr>
                            <b-row class="promoted-property-info text-left">
                            <b-col class="ml-2">
                                <p v-b-tooltip.hover title="Property Type"><img class="mr-3" width="20" src="~/assets/images/icons/building.png" alt=""> <b>{{property.type }}</b></p>
                                <p v-b-tooltip.hover title="Property Floor"><img class="mr-3" width="20" src="~/assets/images/icons/floor.png" alt=""> <b>{{property.floor }}</b></p>
                            </b-col>
                            <b-col>
                                <p v-b-tooltip.hover title="Property Location"><img class="mr-3" width="20" src="~/assets/images/icons/location.png" alt=""> <b>{{property.location }}</b></p>
                                <p v-b-tooltip.hover title="Property Rooms"><img class="mr-3" width="20" src="~/assets/images/icons/rooms.png" alt=""> <b>{{property.rooms }}</b></p>
                            </b-col>
                            </b-row>
                            <b-button class="btn-outline-style1 mt-3" block type="submit" >More details</b-button>
                        </div>
                      </div>  
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title="Studios">
                 <b-row>
                    <b-col class="my-3" cols="12" md="4" v-for="(property, id) in properties" :key="id">
                        <div class="wrap">
                        <div class="property-grid-card">
                            <img width="320" :src="property.img">
                            <span class="promoted-badge" v-if="property.promoted == 'Promoted'">{{ property.promoted }}</span>
                            <span class="type-badge">{{property.type }}</span>
                            <span class="contract-badge">{{property.contract }}</span>
                            <favorite 
                              :title="property.title"
                              :image="property.img"
                              :id="property.id"
                            />
                            <nuxt-link :to="`/properties/${property.id}`">
                            <h5 class="my-2 property-title">{{ property.title }}</h5>
                            </nuxt-link>
                            <h4 class="text-left pl-3"><b>{{ property.price }}</b></h4>
                            <hr>
                            <b-row class="promoted-property-info text-left">
                            <b-col class="ml-2">
                                <p v-b-tooltip.hover title="Property Type"><img class="mr-3" width="20" src="~/assets/images/icons/building.png" alt=""> <b>{{property.type }}</b></p>
                                <p v-b-tooltip.hover title="Property Floor"><img class="mr-3" width="20" src="~/assets/images/icons/floor.png" alt=""> <b>{{property.floor }}</b></p>
                            </b-col>
                            <b-col>
                                <p v-b-tooltip.hover title="Property Location"><img class="mr-3" width="20" src="~/assets/images/icons/location.png" alt=""> <b>{{property.location }}</b></p>
                                <p v-b-tooltip.hover title="Property Rooms"><img class="mr-3" width="20" src="~/assets/images/icons/rooms.png" alt=""> <b>{{property.rooms }}</b></p>
                            </b-col>
                            </b-row>
                            <b-button class="btn-outline-style1 mt-3" block type="submit" >More details</b-button>
                        </div>
                      </div>  
                    </b-col>
                </b-row>
            </b-tab>
            <b-tab title="Houses">
                <b-row>
                    <b-col class="my-3" cols="12" md="4" v-for="(property, id) in properties" :key="id">
                        <div class="wrap">
                            <div class="property-grid-card">
                            <img width="320" :src="property.img">
                            <span class="promoted-badge" v-if="property.promoted == 'Promoted'">{{ property.promoted }}</span>
                            <span class="type-badge">{{property.type }}</span>
                            <span class="contract-badge">{{property.contract }}</span>
                            <favorite 
                              :title="property.title"
                              :image="property.img"
                              :id="property.id"
                            />
                            <nuxt-link :to="`/properties/${property.id}`">
                            <h5 class="my-2 property-title">{{ property.title }}</h5>
                            </nuxt-link>
                            <h4 class="text-left pl-3"><b>{{ property.price }}</b></h4>
                            <hr>
                            <b-row class="promoted-property-info text-left">
                            <b-col class="ml-2">
                                <p v-b-tooltip.hover title="Property Type"><img class="mr-3" width="20" src="~/assets/images/icons/building.png" alt=""> <b>{{property.type }}</b></p>
                                <p v-b-tooltip.hover title="Property Floor"><img class="mr-3" width="20" src="~/assets/images/icons/floor.png" alt=""> <b>{{property.floor }}</b></p>
                            </b-col>
                            <b-col>
                                <p v-b-tooltip.hover title="Property Location"><img class="mr-3" width="20" src="~/assets/images/icons/location.png" alt=""> <b>{{property.location }}</b></p>
                                <p v-b-tooltip.hover title="Property Rooms"><img class="mr-3" width="20" src="~/assets/images/icons/rooms.png" alt=""> <b>{{property.rooms }}</b></p>
                            </b-col>
                            </b-row>
                             <nuxt-link class="property-title" :to="`/properties/${property.id}`">
                            <b-button class="btn-outline-style1 mt-3" block type="submit" >More details</b-button>
                            </nuxt-link>
                        </div>
                      </div>  
                    </b-col>
                </b-row>
            </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
import favorite from '@/components/otherSections/favorite.vue';

    export default {
        components: {
        favorite,
        },
        data() {
            return {
        properties: [
          { 
            "id": "1",
            "img":"https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 1",
            "description": "Description 1",
            "promoted": "Normal",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "California",
            "rooms": "5"
          },

          { 
            "id": "2",
             "img": "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 2",
            "description": "Description 2",
            "promoted": "Promoted",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "New Jersey",
            "rooms": "5"
          },

          { 
            "id": "3",
             "img": "https://images.pexels.com/photos/2745093/pexels-photo-2745093.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 3",
            "description": "Description 3",
            "promoted": "Normal",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "New York",
            "rooms": "5"
          },

          { 
            "id": "4",
             "img": "https://images.pexels.com/photos/189293/pexels-photo-189293.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 4",
            "description": "Description 4",
            "promoted": "Normal",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "California",
            "rooms": "5"
          },

          { 
            "id": "5",
             "img": "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 5",
            "description": "Description 5",
            "promoted": "Normal",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "California",
            "rooms": "5"
          },

          { 
            "id": "6",
             "img": "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 6",
            "description": "Description 6",
            "promoted": "Promoted",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "California",
            "rooms": "5"
          },

        ],


        swiperOption: {
          loop: true,
          slidesPerView: '4',
          centeredSlides: false,
          spaceBetween: 5,
          autoplay: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
          },

          autoplay: {
            delay: 6000,
          },

            controller: {
            inverse: true,
          },
         
        }
    }
        }
    }
</script>

<style lang="scss" scoped>
    .property-grid-card {
        .wrap {
            padding: 10px;
        }
    }
</style>