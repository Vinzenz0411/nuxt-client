<template>

  <div class="memory">
    <h3>Geschichts Memory 7a</h3>
      <div class="d-flex flex-row justify-content-center py-3">
            <div class="turns p-3"><span class="btn btn-info">Versuche : <span class="badge" :class="finish ? 'badge-success' : 'badge-light'">{{turns}}</span> </span></div>
            <div class="totalTime p-3"><span class="btn btn-info">Timer : <span class="badge" :class="finish ? 'badge-success' : 'badge-light'">{{min}} : {{sec}}</span></span></div>
            <div class="totalTime p-3"><button class="btn btn-info" @click="resetGame">Neustart</button></div>
        </div>
        <modal v-show="done" 
        :turns="turns"
        :min="endTime.minutes"
        :sek="endTime.seconds"
        @click="resetGame" />
      <div class="container">
      <div class="cards">
      <card v-for="villager in villagers" :key="villager.id" class="card" 
        :card="villager"
        :name="villager.name"
        :trans="villager.translation"
        :active="
          firstPick === villager || secondPick === villager || villager.matched
        "
        @click="handleClick"
      />
    </div>
    </div>
    <div
      class="w-full flex justify-center items-center z-0 text-2xl text-gray font-bold ">
    </div>
  </div>
</template>
<script>
import Modal from "@/components/organisms/Memory/Modal.vue";
import Card from '@/components/organisms/Memory/Card.vue';
export default {
  name: "App",
  components: {
    Card,
    Modal,
  },
  data() {
    return {
      images: [
        { 
        img: "zweiterweltkrieg.jpg",
        name: "2. Weltkrieg Beginn:",
        translation: "1. September 1939"
        },
        {
         img: "endekrieg.jpg",
         name: "2. Weltkrieg Ende:",
         translation: "2. September 1945"
        },
        { 
            img: "mauerbau.jpg",
            name: "Bau Berliner Mauer:",
            translation: "13. August 1961"
        },
        { 
            img: "fallmauer.jpg",
            name: "Fall Berliner Mauer",
            translation: "9. November 1989"
        },
         { 
            img: "sowjet.jpg",
            name: "Zerfall der Sowjetunion:",
            translation: "26. Dezember 1991"
        },
         { 
            img: "ersterkrieg.jpg",
            name: "1. Weltkrieg Beginn:",
            translation: "28. Juli 1914"
        },
      ],
      villagers: [],
      firstPick: null,
      secondPick: null,
      turns: 0,
      timeChecker: 0,
      start:false,
      done: false,
      totalTime: {
                minutes: 0,
                seconds: 0,
                },
      endTime:{
              minutes: 0,
              seconds: 0,
      },
    };
  },
  computed:{
    sec(){
        if (this.totalTime.seconds < 10){
            return '0'+this.totalTime.seconds;
        }
        return this.totalTime.seconds;
    },
    min(){
        if (this.totalTime.minutes < 10){
            return '0'+this.totalTime.minutes;
        }
        return this.totalTime.minutes;
    }
},

  mounted() {
   
    this.villagers = [...this.images, ...this.images].map(
      (villager, index) => ({
        ...villager,
        matched: false,
        id: index,
      })
    );
    this.villagers = _.shuffle(this.villagers);
  },
  methods: {
    handleClick(card) {
     this.start = true;
     if (this.timeChecker <= 0){
        this.startTime();
        this.timeChecker++;
     }
      this.firstPick ? (this.secondPick = card) : (this.firstPick = card);
      if (this.firstPick && this.secondPick) {
        if (this.firstPick.img === this.secondPick.img) {
          const ind1 = this.villagers.indexOf(card);
          const ind2 = this.villagers.indexOf(this.firstPick);
          this.villagers[ind1].matched = true;
          this.villagers[ind2].matched = true;
          this.resetActive();
        } else {
          this.resetActive();
        }
        this.turns++;

      }
      this.checkIfCompleted();
    },
    startTime(){
        if ( this.start === true ){
        this.interval = setInterval(this.tick,1000);
        this.tick();
        }
    },
    tick(){
    if (this.totalTime.seconds !== 59){
         this.totalTime.seconds++;
         return
     }
     this.totalTime.minutes++;
     this.totalTime.seconds = 0;
    },
    resetActive() {
      setTimeout(() => {
        this.firstPick = null;
        this.secondPick = null;
      }, 500);
    },

    checkIfCompleted(){
      if (this.villagers.every(villager => villager.matched)){
            this.done = true;
            this.start = false;
            if (this.start === false && this.done === true ){
                this.interval = clearInterval(this.interval);
                this.endTime.seconds = this.totalTime.seconds;
                this.endTime.minutes = this.totalTime.minutes;
                return
     }
        
      }
    },
    resetGame(){
      this.done = false,
      this.firstPick = null;
      this.secondPick = null;
      this.totalTime.seconds = 0;
      this.totalTime.minutes = 0;
      this.turns = 0;
      this.start = false;
      this.villagers.forEach(v => v.matched = false);
      setTimeout(() => {
        this.villagers = _.shuffle(this.villagers);
      }, 500);
    }
  },
};
</script>

<style scoped>
.container {
  display: grid;
  place-items: center;
  margin-top: 80px;
  margin-bottom: 250px;
}

.heading {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 500;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
}

.card {
  height: 160px;
  width: 120px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: 0.3s all ease;
}

.card:hover {
  transform: scale(1.03);
}

.card img {
  width: 80%;
  max-height: 90px;
  opacity: 0;
  transition: 0.3s all ease;
}
.card.clicked img,
.card.checked img {
  opacity: 1;
}
img{
  max-width: auto;
  max-height: 60px;
}
span{
  margin: 10px;
  padding: 10px;

}
button{
  margin-top: -10px;
  padding: 10px;
  margin-left: 10px
}


@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
.turns span{
  background-color: black;
  color: whitesmoke;
}
.totalTime span{
  background-color: black;
  color: whitesmoke;
}
.totalTime .btn {
  background-color: black;
  color: whitesmoke;
}
h3{
  margin-bottom: 80px;
}

</style>
