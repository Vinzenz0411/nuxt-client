<template>
  <div
    class="col-auto mb-4 flip-container"
    :class="{'flipped': active}"
    @click="clickHandler"
  >
  <div id="card" class="imgcon h-full w-full custom-green front shadow-lg flex items-center justify-center">
      <h6>{{name}}</h6>
      <h6>->{{trans}}</h6>
    <img
      :src="require(`@/assets/card/${card.img}`)"
      alt="ac"
      class="h-full w-full object-full xs:h-4/5 xs:w-4/5"
    />
  </div>
    <img
      src="@/assets/cartback.jpg"
      alt="back"
      class="cardback"
    />
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: ['card','active','name','trans' ],
  methods : {
    clickHandler(){
      if (!this.active){
        this.$emit('click', this.card);
      }
    }
  }
};
</script>

<style scoped>
.front {
  transform: rotateY(90deg);
  transition: all ease-in 0.2s;
  position: absolute;
}
.flipped .front {
  transform: rotateY(0deg);
  transition-delay: 0.2s;
}
.cardback {
  height: 130px;
  width: 90px;
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
}
.flipped .cardback {
  transform: rotateY(90deg);
  transition-delay: 0s;
}
#card{
  height: 110px;
  width: 100px;
}
h6{
  margin-top: -10px;
}
</style>
