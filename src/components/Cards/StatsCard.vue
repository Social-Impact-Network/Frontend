<template>
  <card class="card-stats" :show-footer-line="true">
    <div class="row">
      <div class="col-5" v-if="$slots.icon || icon">
        <div class="info-icon text-center" :class="`icon-${type}`">
          <slot name="icon"> <i :class="icon"></i> </slot>
        </div>
      </div>
      <div class="col-7" v-if="$slots.content || title || subTitle">

        <div class="numbers">
          <slot>
            <div v-if="buyToken">
            <button class="btn btn-primary btn-round" v-if="buyToken">Buy Tokens</button>
            </div>
            <div v-else>
            <p v-if="subTitle" class="card-category">{{ subTitle }}</p>
            <h3 v-if="title" class="card-title">{{ title }} <button class="btn btn-primary btn-sm" v-if="claimButtonShow" @click="claim" :disabled="!claimButtonDisable">Claim</button>
</h3>
            <!--<h3 v-if="buyToken" class="card-title">test</h3>-->
            </div>
          </slot>
        </div>
      </div>
    </div>
    <div class="stats" slot="footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </card>

</template>
<script>
import Card from './Card.vue';

export default {
  name: 'stats-card',
  components: {
    Card
  },
  methods: {
    claim(){
      this.$parent.claim();
    }

  },
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    icon: String,
    title: String,
    subTitle: String,
    claimButtonShow: Boolean,
    claimButtonDisable: Boolean,
    buyToken: Boolean

  }
};
</script>
<style></style>
