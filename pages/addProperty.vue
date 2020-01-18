<template>
    <div>
      <b-container id="add-property">
        <b-row>
          <!--Form Steps-->
          <div class="add-property-steps">
            <p :class="this.step === 1 ? 'active-step' : ''">Main Informations</p>
            <p :class="this.step === 2 ? 'active-step' : ''">Details</p>
            <p :class="this.step === 3 ? 'active-step' : ''">Media</p>
            <p :class="this.step === 4 ? 'active-step' : ''">Final details</p>
          </div>
          <!--End Form Steps-->
        </b-row>
        <b-row>
         <b-form @submit="onSubmit">
           <!--Step 1-->
           <div v-show="step === 1">
             <b-row>
               <b-col cols="12" md="6">

                    <b-form-input
                      id="input-1"
                      type="text"
                      placeholder="Title"
                       v-model="title"
                      :state="title.length >= 10"
                    ></b-form-input>

                    <b-form-input
                      id="input-2"
                      type="text"
                      placeholder="Address"
                      required
                    ></b-form-input>

                    <b-form-select
                      id="input-3"
                      :options="areas"
                      required
                    ></b-form-select>
               </b-col>
               <b-col cols="12" md="6">

                  <b-form-select
                    id="input-4"
                    :options="types"
                    required
                  ></b-form-select>

                  <b-form-select
                    id="input-5"
                    :options="contract"
                    required>
                  </b-form-select>

                  <b-form-input
                    id="input-6"
                    type="number"
                    placeholder="Price"
                    required>
                  </b-form-input>

               </b-col>
               <b-form-textarea
                id="input-6"
                v-model="description"
                :state="description.length >= 20"
                placeholder="Description..."
                rows="4"
              ></b-form-textarea>
             </b-row>
              <b-button class="btn-style1" @click.prevent="next()">Next <i class="fa fa-chevron-right ml-2"></i></b-button>
           </div>
           <!--End Step 1-->

           <!--Step 2-->
            <div v-show="step === 2">
               <b-row>
                 <b-col cols="12" md="6">
                    <b-form-checkbox-group id="checkboxes-7">
                      <b-form-checkbox value="parking">Parking</b-form-checkbox>
                      <b-form-checkbox value="garage">Garage</b-form-checkbox>
                      <b-form-checkbox value="yard">Yard</b-form-checkbox>
                      <b-form-checkbox value="barbeque">Barbeque</b-form-checkbox>
                      <b-form-checkbox value="airconditioning">Air conditioning</b-form-checkbox>
                      <b-form-checkbox value="videosurveillance">Video surveilance</b-form-checkbox>
                      <b-form-checkbox value="terrace">Terrace</b-form-checkbox>
                      <b-form-checkbox value="centralheating">Central Heating</b-form-checkbox>
                    </b-form-checkbox-group>
                 </b-col>
                 <b-col cols="12" md="6">

                    <b-form-select
                      id="input-8"
                      :options="floors">
                    </b-form-select>

                    <b-form-select
                      id="input-9"
                      :options="rooms">
                    </b-form-select>

                    <b-form-input
                      id="input-10"
                      type="number"
                      placeholder="Total Built Area (sq m)"
                      min="0"
                      >
                    </b-form-input>

                     <b-form-input
                      id="input-11"
                      type="number"
                      placeholder="Used Area (sq m)"
                      required>
                    </b-form-input>

                 </b-col>
               </b-row>
              <b-button class="btn-style1" @click.prevent="prev()"><i class="fa fa-chevron-left mr-2"></i> Previous</b-button>
              <b-button class="btn-style1" @click.prevent="next()">Next <i class="fa fa-chevron-right ml-2"></i></b-button>
            </div>
           <!--End Step 2-->

           <!--Step 3-->
            <div v-show="step === 3">
              <b-row>
                <!--Images Upload-->
                <b-col cols="12" md="6">
                  <h5>Add property image(s)</h5>
                   <b-form-file class="mt-3" ref="images-input" multiple accept="image/jpeg, image/png, image/gif">
                    <template slot="file-name" slot-scope="{ names }">
                      <b-badge variant="dark">{{ names[0] }}</b-badge>
                      <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
                        + {{ names.length - 1 }} More images
                      </b-badge>
                    </template>
                </b-form-file>
                <b-button @click="clearFiles" variant="outline-danger" class="mb-5 mt-1">Delete images</b-button>
                <!--End Images Upload-->

                <!--PDF Upload-->
                <h5>Add property PDF file(s)</h5>
                <b-form-file class="mt-3" ref="pdf-input" multiple accept=".pdf">
                    <template slot="file-name" slot-scope="{ names }">
                      <b-badge variant="dark">{{ names[0] }}</b-badge>
                      <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
                        + {{ names.length - 1 }} More pdf files
                      </b-badge>
                    </template>
                </b-form-file>
                <b-button @click="clearPdf" variant="outline-danger" class="mb-5 mt-1">Delete PDF</b-button>
                <!--End PDF Upload-->


                </b-col>
                <b-col cols="12" md="6">
                  <!--Property Video Link-->
                  <h5>Property video link</h5>
                    <b-form-input
                    id="input-url"
                    v-model="url"
                    :state="url.length >= 5"
                    placeholder="Property video link"
                  ></b-form-input>
                  <!--End Property Video Link-->
                </b-col>
              </b-row>
              <b-button class="btn-style1" @click.prevent="prev()"><i class="fa fa-chevron-left mr-2"></i> Previous</b-button>
              <b-button class="btn-style1" @click.prevent="next()">Next <i class="fa fa-chevron-right ml-2"></i></b-button>
            </div>
           <!--End Step 3-->

           <!--Step 4-->
            <div v-show="step === 4">
              <b-row class="mb-5">
                <b-col cols="12" md="6">
                  <h5 class="mb-3">Promoted property status</h5>
                  <b-form-checkbox v-model="status"
                    name="checkbox-promote"
                    value="Promoted"
                    unchecked-value="Not Promoted" switch>
                    <b>{{ status }}</b>
                  </b-form-checkbox>
                </b-col>

                <b-col cols="12" md="6">
                  <h5 class="mb-3">Choose post property date & hour</h5>
                   <date-pick
                        v-model="date"
                        :pickTime="true"
                        :format="'YYYY-MM-DD HH:mm'">
                    </date-pick>
                </b-col>
              </b-row>
              <b-button class="btn-style1" @click.prevent="prev()"><i class="fa fa-chevron-left mr-2"></i> Previous</b-button>
              <b-button class="btn-outline-style1 mt-3" block type="submit" >Post Property</b-button>
            </div>
           <!--End Step 4-->
          </b-form>
        </b-row>
      </b-container>
          
    </div>
</template>

<script>
  import DatePick from 'vue-date-pick';

    export default {
       components: {
             DatePick,
           },

         data() {
            return {
            step:1,
            title: '',
            description: '',
            url: '',
            status: 'Not Promoted',
            date: '2020-01-01 14:30',

            areas: [{ text: 'Select area', value: null }, 'California', 'New York', 'New Jersey', 'Colorado', 'Los Angeles'],
            types: [{ text: 'Select property type', value: null }, 'Apartment', 'Studio', 'House', 'Commercial', 'Land', 'Office'],
            contract: [{text: 'Select contract type', value: null}, 'Sale', 'Rent'],
            floors: [{ text: 'Select floor', value: null }, 'Ground floor', '1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10', '8/10', '9/10', '10/10'],
            rooms: [{ text: 'Select rooms number', value: null }, '1', '2', '3', '4', '5', '6', '7', '8', 'more than 8'],
            }
        },
        methods:{
            prev() {
            this.step--;
            },
            next() {
            this.step++;
            },
            onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
            },
            clearFiles() {
              this.$refs['images-input'].reset();
            },
            clearPdf() {
              this.$refs['pdf-input'].reset();
            }
        }
    }
</script>

<style lang="scss" scoped>
#add-property {
  padding: 60px 0;
  .add-property-steps {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 60px;

    p {
      font-size: 18px;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid $color1;
      width: 200px;
      text-align: center;
      margin-bottom: 35px;
    }

    .active-step {
      border: 1px dashed $color1;
      background: $color1-light;
      color: #000;
      box-shadow: 0 2px 15px 0 $color1-light;
    }
  }

  form {
    width: 100%;

    input, select, textarea {
      margin: 20px 0;
    }

    .custom-checkbox {
      display: block;
      text-align: left;
      margin: 5px 0;
    }
  }
}

@media(max-width: 768px) {
  #add-property {
    padding: 30px;
    .add-property-steps {
      flex-direction: column;
      p {
        margin: 10px auto;
        width: 100%;
      }
    }
  }
}
</style>