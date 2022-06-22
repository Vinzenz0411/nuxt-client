<template>
    <v-card>
       <h3>{{title}} Memory {{Memorys.class}}</h3>
       <h6>Beschreibung:</h6> <p> {{Memorys.description}}</p>
       <h6>Schwierigkeitsgrad:</h6><p class="lvl1"><b> {{Memorys.level}}</b></p>
     </v-card>
</template>
<script>

export default {
  name: 'Game',
   props: {
    memory: Object
  }
  
};
</script>
