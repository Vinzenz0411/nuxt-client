<template>
<div>
        <h3>Mein Vertretungsplan</h3>

        <embed class="pdfreader" src="/pdf/Dok1.pdf" />
        
        <form action="/action_page.php">
        <label for="cars">Menü wählen</label>
        <select id="cars" name="cars">
        <option value="volvo">Menu 1</option>
        <option value="saab">Menu 2</option>
        </select>
        <label for="fname">Vorname:</label><br>
        <input id="fname" type="text" name="fname" value="Vorname"><br>
        <label for="lname">Nachname:</label><br>
        <input id="lname" type="text" name="lname" value="Nachname"><br><br>
        <input type="submit" value="Submit">
</form>

  


</div>
       

</template>
<style scoped>
.pdfreader{
  margin-left: -200px;
}
@media only screen and (min-width: 300px) {
  .pdfreader {
    width: 340px;
    height: 900px;
    margin-left: -20px;
  }
}
@media only screen and (min-width: 400px) {
  .pdfreader {
    width: 380px;
    height: 900px;
    margin-left: -20px;
  }
}
@media only screen and (min-width: 765px) {
  .pdfreader {
    width: 680px;
    height: 900px;
    margin-left: -25px;
  }
}
@media only screen and (min-width: 900px) {
  .pdfreader {
    width: 720px;
    height: 900px;
    margin-left: -100px;
  }
}
@media only screen and (min-width: 1000px) {
  .pdfreader {
    width: 750px;
    height: 900px;
    margin-left: -75px;
  }
}
@media only screen and (min-width: 1300px) {
  .pdfreader {
    width: 900px;
    height: 900px;
    margin-left: -130px;
  }
}
h3{
  margin-left: -200px;
  margin-bottom: 25px;
}
@media only screen and (min-width: 300px) {
  h3 {
    margin-left: -20px;
  }
}
@media only screen and (min-width: 765px) {
  h3 {
    margin-left: -25px;
  }
}
@media only screen and (min-width: 900px) {
  h3 {
    margin-left: -100px;
  }
}
@media only screen and (min-width: 1000px) {
  h3 {
    margin-left: -75px;
  }
}
@media only screen and (min-width: 1300px) {
  h3 {
    margin-left: -130px;
  }
}
</style>
