<template>
   <div class="flex items-center justify-center" >
      <div class="fixed w-full h-full bg-gray-500 opacity-50"></div>
      <div class="relative z-2 w-3/12 xs:w-2/3 sm:w-1/3 bg-white p-8 mx-auto rounded-xl flex flex-col items-center">
        <h2 class="super">Super!</h2>
         <img
        src="@/assets/img/konfetti.png"
        alt="glückwunsch"
        class="luck"
        />
        <h4>Du hast das Lern-Memory-Game in {{ turns }} Versuchen gelöst!</h4>
        <h4> Zeitaufwand: {{min}} Minuten und {{sek}} Sekunden</h4>
      </div>
    </div>
</template>

<script>
export default {
  name : 'Modal',
  props : ['turns','min','sek'],
}
</script>

<style scoped>
.luck{
  width: 20% ;
  height: auto;
  margin-left: 35%;
}
 .super{
    margin-top: 40px;
 }
</style>