<template>
    <v-card>
    <h2>Details zur Bestellung</h2>
    <br>
    <br>
    <h5>Name:      {{name}}</h5>
    <h5>Datum der Bestellung:      {{date}}</h5>
    <h5>Zeitpunkt der Bestellung:      {{time}}  Uhr</h5>
    <h5>Termin:      {{day}}</h5>
    <h5>Menuwahl:    {{menu}}</h5>
    <h5>Salat:       {{salat}}</h5>
    <h5>Dessert:     {{dessert}}</h5>
    </v-card>
</template>
<script>
export default {
  name : 'Bestellung',
  props : ['day','salat','dessert', 'menu','date', 'time', 'name'],
}
</script>