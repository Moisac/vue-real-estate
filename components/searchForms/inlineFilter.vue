<template>
    <div>
        <div id="search-card">
          <b-container>
             <b-form @submit="onSubmit" @reset="onReset">
               <b-row align-v="center" class="mb-3">
                 <b-col cols="12" md="4">
                         <b-form-group label="Contract Type" id="input-group-4">
                            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                            <b-form-checkbox value="rent">Rent</b-form-checkbox>
                            <b-form-checkbox value="sale">Sale</b-form-checkbox>
                            </b-form-checkbox-group>
                        </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6">

                  </b-col>

                  <b-col cols="12" md="2">
                      <b-button class="float-right" variant="light" v-b-tooltip.hover title="Reset filter" small type="reset" ><img width="30" src="~assets/images/reset.png"></b-button>
                      <b-button variant="light" v-b-tooltip.hover title="Advance filter" small @click="openFilter"><img width="30" src="~assets/images/filter.png"></b-button>
                  </b-col>
               </b-row>
                <b-row align-v="center">
                    <b-col cols="12" md="4">
                        <b-form-group
                            id="input-group-1">
                            <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Search by keyword"
                            v-model="form.keyword"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" md="4">
                        <b-form-group id="input-group-3">
                            <b-form-select
                            id="input-3"
                            v-model="form.area"
                            :options="areas"
                            required
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" md="4">
                        <b-form-group id="input-group-4">
                <b-form-select
                  id="input-4"
                  v-model="form.type"
                  :options="types"
                  required
                ></b-form-select>
              </b-form-group>
                    </b-col>
                    
                </b-row>

                
              
              <transition name="fade" mode="out-in">
                  <div class="advance-filter" v-if="filterOpen">
                      <label for="range-2">Price range: <b>0 - {{form.price}}</b></label>
              <b-form-input class="my-3" id="range-2" v-model="form.price" type="range" min="0" max="50000" step="100"></b-form-input>
                      
                         <b-row>
                           <b-col cols="12" md="6">
                             <b-form-group id="input-group-5">
                               <b-form-select
                                id="input-5"
                                v-model="form.floor"
                                :options="floors"
                              ></b-form-select>
                            </b-form-group>
                           </b-col>
                           <b-col cols="12" md="6">
                              <b-form-group id="input-group-6">
                                <b-form-select
                                  id="input-6"
                                  v-model="form.room"
                                  :options="rooms"
                                ></b-form-select>
                              </b-form-group>
                           </b-col>
                         </b-row>

                        <b-row>
                          <b-col cols="12" md="6">
                            <b-form-group id="input-group-7">
                              <b-form-select
                                id="input-7"
                                v-model="form.agency"
                                :options="agencies"
                              ></b-form-select>
                            </b-form-group>
                          </b-col>
                          <b-col cols="12" md="6">
                            <b-form-group id="input-group-8">
                              <b-form-select
                                id="input-8"
                                v-model="form.agent"
                                :options="agents"
                              ></b-form-select>
                            </b-form-group>
                          </b-col>
                        </b-row> 
              
                      <b-form-group label="Property features" id="input-group-9">
                        <b-form-checkbox-group v-model="form.features" id="checkboxes-9">
                          <b-form-checkbox value="parking">Parking</b-form-checkbox>
                          <b-form-checkbox value="garage">Garage</b-form-checkbox>
                          <b-form-checkbox value="yard">Yard</b-form-checkbox>
                          <b-form-checkbox value="barbeque">Barbeque</b-form-checkbox>
                          <b-form-checkbox value="airconditioning">Air conditioning</b-form-checkbox>
                          <b-form-checkbox value="videosurveillance">Video surveilance</b-form-checkbox>
                          <b-form-checkbox value="terrace">Terrace</b-form-checkbox>
                          <b-form-checkbox value="centralheating">Central Heating</b-form-checkbox>
                        </b-form-checkbox-group>
                      </b-form-group>
                    </div>
              </transition>       
              <!--End Advance Filter-->
            </b-form>
          </b-container>
        </div>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        filterOpen: false,
        
        form: {
          keyword: '',
          area: null,
          type: null,
          floor: null,
          room: null,
          agency: null,
          agent: null,
          checked: [],
          features: [],
          price: '200',
        },
        areas: [{ text: 'Select area', value: null }, 'California', 'New York', 'New Jersey', 'Colorado', 'Los Angeles'],
        types: [{ text: 'Select property type', value: null }, 'Apartment', 'Studio', 'House', 'Commercial', 'Land', 'Office'],
        floors: [{ text: 'Select floor', value: null }, 'Ground floor', '1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10', '8/10', '9/10', '10/10'],
        rooms: [{ text: 'Select rooms number', value: null }, '1', '2', '3', '4', '5', '6', '7', '8', 'more than 8'],
        agencies: [{ text: 'Select agency', value: null }, 'Nuxt Agency', 'Vue Agency', 'JS Agency', 'Bootstratp Agency'],
        agents: [{ text: 'Select agent', value: null }, 'James', 'Martin', 'Maria', 'Andrew'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.area = null
        this.form.type = null
        this.form.floor = null
        this.form.room = null
        this.form.agency = null
        this.form.agent = null
        this.form.checked = []
        this.form.features = []
        this.form.price = 0

        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      openFilter() {
        this.filterOpen = !this.filterOpen
      }
    }
  }
</script>


<style lang="scss" scoped>
  #search-card {
    margin: 65px 0;
    background: $color1-light;
    padding: 30px 0;
  }

 .fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
  }
.fade-enter, .fade-leave-to {
  opacity: .4;
}
</style>