
<template>
<v-container>
  <h3>Verfügbare Lernspiele</h3>
 <v-btn to="/memorie/add"
  depressed
  outlined
  plain
  raised
  rounded
  small
  x-large
>Memory hinzufügen</v-btn>
<v-btn to="/memorie/add"
  depressed
  outlined
  plain
  raised
  rounded
  small
  x-large
>Meine Memorys bearbeiten</v-btn>
 <v-card v-for="memorys in memory" 
    :key="memorys.id" 
    :val="memorys.path"
    :to="{ path: memorys.path }"
    >
       <h3>{{memorys.title}} Memory {{memorys.classes}}</h3>
       <h6>Beschreibung:</h6> <p> {{memorys.describe}}</p>
       <h6>Schwierigkeitsgrad:</h6><p class= "lvl1"><b> {{memorys.level}}</b></p>
     </v-card>
     </v-container>
</template>
<script>
export default {
  name: "Memory",
  components: {
  },
  data() {
    return {
      memory: [
        {
        id: "1",
        title: "Vokabel",
        describe: "Hier einfache Englisch Vokabeln",
        level:"leicht",
        classes: "6c",
        type: "memory",
        lvlcolor: "lvl1",
        path: "/memorie/",
      },
      {
        id: "2",
        title: "Mathe",
        describe: "Hier einfache Mathe Formeln",
        level:"mittel",
        classes: "9a",
        type: "memory",
        lvlcolor: "lvl2",
        path: "/memorielvl2/",
      },
      {
        id: "3",
        title: "Geschichts",
        describe: " Hier Geschichtliche Ereignisse und Jahreszahlen ",
        level:"Schwer",
        classes: "7a",
        type: "memory",
        lvlcolor: "lvl2",
        path: "/memorielvl3/",
      },
      ],
    };
  },
  computed:{
    
},

  mounted() {
   
  },
  methods: {
  }
};
</script>

<style>
.lvl1{
  color: green; 
}
.lvl2{
  color: orange; 
}
.lvl3{
  color: red; 
}
.blackcard{
  background-color: cadetblue;
}
.totalTime {
  display: inline;
}
</style>



