<template>
  <div>

    <!--Main image section-->
    <div id="home-single-img">
      <div class="overlay-style1">

        <b-container>
          <b-row>
            <b-col md="7" class="my-auto">
              <h1>Your real estate template it's here.</h1>
            </b-col>
            <b-col md="5" class="search-form">
              <homeCardSearch />
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <!--End main image section-->

  <!--Promoted properties-->
  <b-container >
    <b-row>
      <promotedCarousel />
    </b-row>
  </b-container>


  <!--End promoted properties-->

  <!--Week deal-->
    <b-container>
      <b-row>
        <weekDeal />
      </b-row>
    </b-container>
  <!--End week deal-->

  <!--Benefits section-->

    <benefits />

  <!--End benefits section-->

  <!--Properties tabs-->
    <b-container>
      <propertiesTabs />
    </b-container>
  <!--End properties tabs-->

  <!--Add property CTA-->
  <addPropertyCta />
  <!--End add property CTA-->

  <!--Agents load more grid-->
    <agentsGrid />
  <!--End agents load more grid-->

  <!--Agencies grid-->
  <b-container>
    <agenciesGrid />
  </b-container>
  <!--End agencies grid-->


  </div>
</template>

<script>

import homeCardSearch from '@/components/searchForms/homeCardSearch.vue'
import promotedCarousel from '@/components/propertyCarousel/promotedCarousel.vue';
import weekDeal from '@/components/propertyCarousel/weekDeal.vue';
import benefits from '@/components/otherSections/benefits.vue';
import propertiesTabs from '@/components/propertyGrid/propertiesTabs.vue';
import addPropertyCta from '@/components/otherSections/addPropertyCta.vue';
import agentsGrid from '@/components/Agents/agentsGrid.vue';
import agenciesGrid from '@/components/Agencies/agenciesGrid.vue';
import Footer1 from '@/components/Footer/Footer1.vue';


export default {
  layout: 'default',
  components: {
    homeCardSearch,
    promotedCarousel,
    weekDeal,
    benefits,
    propertiesTabs,
    addPropertyCta,
    agentsGrid,
    agenciesGrid,
    Footer1,
  }
}
</script>

<style lang="scss" scoped>
  #home-single-img {
    background-image: url('~assets/images/home-main.jpg');
    width: 100%;
    height: 600px;
    background-size: cover;
    background-repeat: no-repeat;

    .overlay-style1 {
      height: 600px;

      .search-form {
        z-index: 100;
      }

      h1 {
        color: #fff;
      }
    }
  }
</style>
