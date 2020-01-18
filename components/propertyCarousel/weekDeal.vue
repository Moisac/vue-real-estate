<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="my-5" id="week-deal" v-swiper:mySwiper="swiperOption">
    <h2 class="my-5">Deals of the week</h2>
    <div class="swiper-wrapper my-5">
      <div class="swiper-slide week-deal-card" v-for="(property, id) in properties" :key="id">
        <div class="wrap">
            <b-row>
                <b-col cols="12" md="6">
                    <img width="550" :src="property.img">
                    <span class="promoted-badge" v-if="property.promoted == 'Promoted'">{{ property.promoted }}</span>
                    <span class="type-badge">{{property.type }}</span>
                    <span class="contract-badge">{{property.contract }}</span>
                </b-col>
                <b-col cols="12" md="6">
                   <favorite 
                    :title="property.title"
                    :image="property.img"
                    :id="property.id"
                  />
                    <nuxt-link class="property-title" :to="`/properties/${property.id}`">
                      <h5 class="my-2">{{ property.title }}</h5>
                    </nuxt-link>
                    <h4 class="text-left pl-3 mb-3"><b>{{ property.price }}</b></h4>
                     <b-row class="promoted-property-info text-left">
                    <b-col class="ml-2">
                      <p v-b-tooltip.hover title="Property Type"><img class="mr-3" width="30" src="~/assets/images/icons/building.png" alt=""> <b>{{property.type }}</b></p>
                      <p v-b-tooltip.hover title="Property Floor"><img class="mr-3" width="30" src="~/assets/images/icons/floor.png" alt=""> <b>{{property.floor }}</b></p>
                    </b-col>
                    <b-col>
                       <p v-b-tooltip.hover title="Property Location"><img class="mr-3" width="30" src="~/assets/images/icons/location.png" alt=""> <b>{{property.location }}</b></p>
                      <p v-b-tooltip.hover title="Property Rooms"><img class="mr-3" width="30" src="~/assets/images/icons/rooms.png" alt=""> <b>{{property.rooms }}</b></p>
                    </b-col>
                </b-row>
                 <nuxt-link class="property-title" :to="`/properties/${property.id}`">
                <b-button class="btn-outline-style1 mt-5" block type="submit" >More details</b-button>
                </nuxt-link>
                </b-col>
            </b-row>
        </div>
      </div>
    </div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import favorite from '@/components/otherSections/favorite.vue';
  export default {
    components: {
      favorite,
    },

    data () {
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
            "promoted": "Normal",
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
            "promoted": "Promoted",
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
            "promoted": "Normal",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "California",
            "rooms": "5"
          },

          { 
            "id": "7",
             "img": "https://images.pexels.com/photos/209274/pexels-photo-209274.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 7",
            "description": "Description 7",
            "promoted": "Promoted",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "California",
            "rooms": "5"
          },

          { 
            "id": "8",
            "img": "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 8",
            "description": "Description 8",
            "promoted": "Normal",
            "type": "House",
            "contract": "Sale",
            "price": "2500$",
            "floor": "3/10",
            "location": "California",
            "rooms": "5"
          },

          { 
            "id": "9",
            "img": "https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 9",
            "description": "Description 9",
            "promoted": "Normal",
            "type": "Apartment",
            "contract": "Sale",
            "price": "2500$",
            "floor": "2/10",
            "location": "California",
            "rooms": "5"
          },

          { 
            "id": "10",
            "img": "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            "title": "Title 10",
            "description": "Description 10",
            "promoted": "Normal",
            "type": "Apartment",
            "contract": "Rent",
            "price": "800$",
            "floor": "5/10",
            "location": "California",
            "rooms": "5"
          },
        ],

        swiperOption: {
          loop: true,
          slidesPerView: '1',
          spaceBetween: 45,
          autoplay: false,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
            controller: {
            inverse: true,
          },
          breakpoints: {
              768: {
                  slidesPerView: 1,
                  spaceBetween: 10
              },
              675: {
                  slidesPerView: 1,
                  spaceBetween: 20
              }
          }
         
        }
      }
    },
  }
</script>


<style lang="scss" scoped>
    #week-deal {
        padding: 0 10px;
        margin: 0 20px;
    }
</style>