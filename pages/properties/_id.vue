<template>
    <div>
      <singleProperty />

      <!--Property Description and Agent form-->
      <b-container>
        <b-row>
          <b-col cols="12" md="7">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus animi eum, sequi obcaecati non ducimus saepe ab corporis quod iure autem laboriosam soluta unde dolores dolore commodi molestias natus nobis incidunt. Voluptas vero earum exercitationem natus eos corporis porro a excepturi maxime nostrum sapiente, vel cum qui quasi sed aliquam, modi adipisci aspernatur illum odio? Minima quam rerum ipsam deleniti necessitatibus exercitationem maxime animi a est autem quod, libero odio accusamus tenetur assumenda explicabo ratione commodi minus? Illo et possimus porro dolorem perferendis excepturi asperiores qui soluta, atque unde. Corrupti, minima odio distinctio, animi dolorum fugiat, alias voluptas dolor iure quae aliquid a fugit provident recusandae nisi quasi molestiae ducimus quia. Voluptatem possimus obcaecati odit, delectus ducimus et cum voluptas ut quidem officia debitis quam iusto dolore eligendi aspernatur non rerum aperiam recusandae voluptates, veritatis labore! Temporibus obcaecati veniam officia voluptate earum repellendus itaque aperiam officiis? Repellat, sapiente? Minus repellendus exercitationem, vel sapiente possimus dolor rem similique cupiditate sint, velit eius aut cumque! Ullam porro illum consequatur ad provident, necessitatibus alias eum repellat culpa rerum voluptate. Fugit eos quibusdam explicabo reprehenderit ad, facilis voluptatibus sint cum soluta obcaecati impedit dolorum quae minima illum odit? Pariatur excepturi eveniet id nostrum?
            </p>
             <!--Info Buttons Panel-->
             <b-container>
               <infoPanel />
             </b-container>
            <!--Info Buttons Panel-->

            <!--Similar Properties-->
              <b-container fluid>
                <similarProperties />
              </b-container>
            <!--End Similar Properties-->
           

          </b-col>
          <b-col cols="12" md="5" class="agent-form">
            <propertyForm />
          </b-col>
        </b-row>
      </b-container>
      <!--End Property Description and Agent form-->

      <b-container fluid>
        <promotedCarousel />
      </b-container>
    </div>
</template>

<script>
import singleProperty from '@/components/propertyCarousel/singleProperty.vue';
import propertyForm from '@/components/Agents/propertyForm.vue';
import promotedCarousel from '@/components/propertyCarousel/promotedCarousel.vue';
import infoPanel from '@/components/singleProperty/infoPanel.vue';
import charts from '@/components/singleProperty/charts.vue';
import similarProperties from '@/components/propertyCarousel/similarProperties.vue';
    export default {
      components: {
        singleProperty,
        propertyForm,
        promotedCarousel,
        infoPanel,
        charts,
        similarProperties
      }
    }
</script>

<style lang="scss" scoped>
    .agent-form {
      position: sticky;
      top: 0;
      z-index: 2;
    }
</style>