<template>
   <div class="flex items-center justify-center" >
      <div class="fixed w-full h-full bg-gray-500 opacity-50"></div>
      <div class="relative z-2 w-3/12 xs:w-2/3 sm:w-1/3 bg-white p-8 mx-auto rounded-xl flex flex-col items-center">
        <h3>Super!</h3>
        <p>Du hast das Lern-Memory-Game in {{ turns }} Versuchen gelöst!</p>
        <p> Zeitaufwand: {{min}} Minuten und {{sek}} Sekunden</p>

        <button
          @click="$emit('click')"
        >
          Play Again
        </button>
      </div>
    </div>
</template>

<script>
export default {
  name : 'Modal',
  props : ['turns','min','sek'],
}
</script>

<style>