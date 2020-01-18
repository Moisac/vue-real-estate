<template>
    <div>
        <b-container fluid class="single-property-slide">
            <b-row>
                <b-col cols="12" md="6">
                    <div class="my-5" v-swiper:mySwiper="swiperOption">
                        <div class="swiper-wrapper" >
                            <div class="swiper-slide" v-for="(img, id) in property.images" :key="id">
                                <div class="wrap">
                                    <img :src="img.image" alt="" height="500" width="100%">
                                </div>
                            </div>
                        </div>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                    </div>
                    
                    <div class="property-info">

                        <h1>{{ property.title }}</h1>
                        <h4>{{ property.price }}</h4>  
                    </div>  
                </b-col>

                <b-col cols="12" md="6" class="mt-5">
                    <b-row class="property-main-info">
                        <div class="quick-features">
                            <a href="#request-tour" class="btn-outline-style1">Request tour</a>
                            <a href="#more-info" class="btn-outline-style1">More info</a>
                            <a href="#similar-properties" class="btn-outline-style1">Similar properties</a>
                            <favorite 
                             :title="property.title"
                            :image="property.img"
                            :id="property.id"
                            />
                        </div>
                    </b-row>
                    <b-row class="property-main-info mt-5">
                        <b-col cols="12" md="6">
                            <div class="property-details">
                                <p v-b-tooltip.hover title="Property Type"><img class="mr-3" width="40" src="~/assets/images/icons/building.png" alt=""> <b>{{property.type }}</b></p>
                                <p v-b-tooltip.hover title="Property Floor"><img class="mr-3" width="40" src="~/assets/images/icons/floor.png" alt=""> <b>{{property.floor }}</b></p>
                                <p v-b-tooltip.hover title="Property Location"><img class="mr-3" width="40" src="~/assets/images/icons/location.png" alt=""> <b>{{property.location }}</b></p>
                                <p v-b-tooltip.hover title="Property Rooms"><img class="mr-3" width="40" src="~/assets/images/icons/rooms.png" alt=""> <b>{{property.rooms }}</b></p>
                                <p v-b-tooltip.hover title="Property Agency"><img class="mr-3" width="40" src="~/assets/images/icons/agency.png" alt=""> <b>{{property.agency }}</b></p>
                            </div>
                        </b-col>
                        <b-col cols="12" md="6">
                            <h5 class="mb-5">Property Extra Features</h5>
                            <div v-for="(singleFeature, id) in property.features" :key="id">
                                <p><img class="mr-3" width="30" src="~/assets/images/icons/check.png" alt=""><b>{{ singleFeature }}</b></p>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
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

               swiperOption: {
                loop: true,
                slidesPerView: '1',
                spaceBetween: 25,
                autoplay: true,

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },

            

                    controller: {
                    inverse: true,
                },
                
            },

                id: this.$route.params.id,
                properties: [
                    {   
                       "id": "1",
                        "images": [
                            {"image": "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
                        ],
                        "title": "Title 1",
                        "description": "Description 1",
                        "promoted": "Normal",
                        "type": "Apartment",
                        "contract": "Sale",
                        "price": "2500$",
                        "floor": "3/10",
                        "location": "New York",
                        "rooms": "5",
                        "agency": "Nuxt Agency",
                        "features": ["Parking", "Yard", "Central Heating", "Terrace", "Air Conditioning"]
                    },

                    {   
                       "id": "2",
                       "images": [
                            {"image": "https://images.pexels.com/photos/2343466/pexels-photo-2343466.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                        ],
                        "title": "Title 2",
                        "description": "Description 2",
                        "promoted": "Normal",
                        "type": "Apartment",
                        "contract": "Sale",
                        "price": "2500$",
                        "floor": "3/10",
                        "location": "New York",
                        "rooms": "5",
                        "agency": "Vue Agency",
                        "features": ["Parking", "Yard", "Central Heating", "Terrace", "Air Conditioning"]
                    },

                    {   
                        "id": "3",
                        "images": [
                            {"image": "https://images.pexels.com/photos/2745093/pexels-photo-2745093.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                        ],
                        "title": "Title 3",
                        "description": "Description 3",
                        "promoted": "Normal",
                        "type": "Apartment",
                        "contract": "Sale",
                        "price": "2500$",
                        "floor": "3/10",
                        "location": "New York",
                        "rooms": "5",
                        "agency": "Nuxt Agency",
                        "features": ["Parking", "Yard", "Central Heating", "Terrace", "Air Conditioning"]
                    },

                    {   
                        "id": "4",
                        "images": [
                            {"image": "https://images.pexels.com/photos/189293/pexels-photo-189293.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/2806350/pexels-photo-2806350.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                        ],
                        "title": "Title 4",
                        "description": "Description 4",
                        "promoted": "Normal",
                        "type": "Apartment",
                        "contract": "Sale",
                        "price": "2500$",
                        "floor": "3/10",
                        "location": "California",
                        "rooms": "5",
                        "agency": "JS Agency",
                        "features": ["Parking", "Yard", "Central Heating", "Terrace", "Air Conditioning"]
                    },

                    {   
                        "id": "5",
                        "images": [
                            {"image": "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/2499969/pexels-photo-2499969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                        ],
                        "title": "Title 5",
                        "description": "Description 4",
                        "promoted": "Normal",
                        "type": "Apartment",
                        "contract": "Sale",
                        "price": "2500$",
                        "floor": "3/10",
                        "location": "California",
                        "rooms": "5",
                        "agency": "Nuxt Agency",
                        "features": ["Parking", "Yard", "Central Heating", "Terrace", "Air Conditioning"]
                    },

                    {   
                        "id": "6",
                       "images": [
                            {"image": "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                        ],
                        "title": "Title 6",
                        "description": "Description 4",
                        "promoted": "Normal",
                        "type": "Apartment",
                        "contract": "Sale",
                        "price": "2500$",
                        "floor": "3/10",
                        "location": "California",
                        "rooms": "5",
                        "agency": "Nuxt Agency",
                        "features": ["Parking", "Yard", "Central Heating", "Terrace", "Air Conditioning"]
                    },

                     {   
                        "id": "7",
                       "images": [
                            {"image": "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                        ],
                        "title": "Title 7",
                        "description": "Description 7",
                        "promoted": "Normal",
                        "type": "Apartment",
                        "contract": "Sale",
                        "price": "2500$",
                        "floor": "3/10",
                        "location": "California",
                        "rooms": "5",
                        "agency": "Nuxt Agency",
                        "features": ["Parking", "Yard", "Central Heating", "Terrace", "Air Conditioning"]
                    },

                     {   
                        "id": "8",
                       "images": [
                            {"image": "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                        ],
                        "title": "Title 8",
                        "description": "Description 8",
                        "promoted": "Normal",
                        "type": "Apartment",
                        "contract": "Sale",
                        "price": "2500$",
                        "floor": "3/10",
                        "location": "California",
                        "rooms": "5",
                        "agency": "Nuxt Agency",
                        "features": ["Parking", "Yard", "Central Heating", "Terrace", "Air Conditioning"]
                    },

                     {   
                        "id": "9",
                       "images": [
                            {"image": "https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                        ],
                        "title": "Title 9",
                        "description": "Description 9",
                        "promoted": "Normal",
                        "type": "Apartment",
                        "contract": "Sale",
                        "price": "2500$",
                        "floor": "3/10",
                        "location": "California",
                        "rooms": "5",
                        "agency": "Nuxt Agency",
                        "features": ["Parking", "Yard", "Central Heating", "Terrace", "Air Conditioning"]
                    },

                     {   
                        "id": "10",
                       "images": [
                            {"image": "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                            {"image": "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
                        ],
                        "title": "Title 10",
                        "description": "Description 10",
                        "promoted": "Normal",
                        "type": "Apartment",
                        "contract": "Sale",
                        "price": "2500$",
                        "floor": "3/10",
                        "location": "California",
                        "rooms": "5",
                        "agency": "Nuxt Agency",
                        "features": ["Parking", "Yard", "Central Heating", "Terrace", "Air Conditioning"]
                    },
         
                ],

            }
        },

        computed: {
            property() {
                return this.properties.find(property => property.id == this.id);
            }
        },
    }
</script>

<style lang="scss" scoped>

/*Carousel*/
  .swiper-slide {
    background-size: cover;
    background-position: center;
    
  }
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }

  /*End Carousel*/

  /*Property Info*/
    .property-info {
        border-bottom: 1px dotted $color1-light;
        display: flex;
        justify-content: space-between;
        align-items: center;
        }

  .property-main-info {
      background: $color1-light;
      padding: 20px;
      margin: 0 30px;
      box-shadow: -1px 2px 10px 0 rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: -1px 2px 10px 0 rgba(0, 0, 0, 0.2);
      -moz-box-shadow: -1px 2px 10px 0 rgba(0, 0, 0, 0.2);

      .quick-features {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .btn-outline-style1 {
              margin: auto 20px;
              &:hover {
                  text-decoration: none;
              }
          }
      }
    .property-details {
        border-right: 2px dotted #fff;


        p {
            margin: 30px 0;
        }
    }
  } 
 /*End Property Info*/
 
 @media(max-width: 768px) {
     .property-main-info {
         margin-bottom: 20px!important;
         .property-details {
         border-right: 0!important;
        }
     }
     
     .quick-features {
         flex-direction: column!important;
         width: 100%!important;
         a {
             margin: 10px auto!important;
         }
     }
 }
</style>