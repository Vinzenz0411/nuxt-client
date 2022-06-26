<template>

<div>
        <h3>Mensaplan</h3>

        <img 

		src="@assets/img/Speiseplan.jpeg"

		alt="Mensaplan"
	/>
        
        <div class="container">
	<div class="row">
			<h1>contact us</h1>
	</div>

	<div class="row">
			<h3>Mensa Anmeldung</h3>
	</div>
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<label id="black"><h5>Name:</h5><b>{{name}}</b></label> 
				</div>
			</div>
       <div class="col-md-6 col-sm-12">
             <div><h5>Datum:</h5><b>{{date}}</b></div>
				</div>
        <div class="col-md-6 col-sm-12">
             <div><h5>Uhrzeit:</h5><b>{{time}}</b></div>
				</div>
			<div class="col-md-6 col-sm-12">
                <div><h5>Menü:</h5></div>

                <select v-model="menu" >
                <option value="Menü">Menü:</option>
                <option>Menü 1</option>
                <option>Menü 2</option>
                </select>
			</div>
            <div class="col-md-6 col-sm-12">
              <div><h5>Salat:</h5></div>

                <select v-model="salat" >
                <option value="">Salat:</option>
                <option>Ja</option>
                <option>Nein</option>
                </select>
			</div>
            <div class="col-md-6 col-sm-12">
                <div><h5>Dessert:</h5></div>

                <select v-model="dessert" >
                <option  value="">Dessert:</option>
                <option>Ja</option>
                <option>Nein</option>
                </select>
			</div>
            <div class="col-md-6 col-sm-12">
                 <div><h5>Wochentag:</h5></div>

                <select v-model="day">
                <option disabled value="">Wochentag:</option>
                <option>Mo</option>
                <option>Di</option>
                <option>Mi</option>
                <option>Do</option>
                <option>Fr</option>
                </select>
                <br>
			</div>
			</div>
			</div>
        <div class="col-xs-12 col-sx-6">
                <v-btn to="/mensa/greeting"
                class="submit btn-lrg submit-btn"
                depressed
                outlined
                plain
                raised
                rounded
                x-large
                @click="handleClick">
                
                Jetzt Bestellen</v-btn>
			</div>
      <bestellung 
                :day="day"
                :salat="salat"
                :dessert="dessert"
                :menu="menu"
                :date="date"
                :time="time"
                :name="name"
                />
	</div>
</template>
<style scoped>
select{
    width: 200px;
    height: 35px;
    background-color: #93A7CA;
    color: #ffffff;
}
.submit {
    background-color: #93A7CA;
    color: #ffffff;
}
/*point the arrow upwards when the select box is open (active):*/
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}
/*style the items (options), including the selected item:*/
.select-items div,.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  user-select: none;
}
/*style items (options):*/
.select-items {
  position: absolute;
  background-color: #93A7CA;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}
/*hide the items when the select box is closed:*/
.select-hide {
  display: none;
}
.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
h1 {
    font-family: 'Poppins', sans-serif, 'arial';
    font-weight: 600;
    font-size: 72px;
    color: white;
    text-align: center;
}
h4 {
    font-family: 'Roboto', sans-serif, 'arial';
    font-weight: 400;
    font-size: 20px;
    color: #9b9b9b;
    line-height: 1.5;
}
/* ///// inputs /////*/
input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
    font-size: 0.75em;
    color: #999;
    top: -5px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
}
.styled-input {
    float: left;
    width: 293px;
    margin: 1rem 0;
    position: relative;
    border-radius: 4px;
}
@media only screen and (max-width: 768px){
    .styled-input {
        width:100%;
    }
}
.styled-input label select #black{
    color: #999;
    padding: 1.3rem 30px 1rem 30px;
    position: absolute;
    top: 10px;
    left: 0;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    pointer-events: none;
}
.styled-input.wide select  #black { 
    width: 650px;
    max-width: 100%;
}
input,
textarea select  #black {
    padding: 30px;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #93A7CA;
    color: white;
    border-radius: 4px;
}
input:focus, select:focus,
textarea:focus { outline: 0; }
input:focus ~ span,
select:focus ~ span,
textarea:focus ~ span {
    width: 100%;
    -webkit-transition: all 0.075s ease;
    transition: all 0.075s ease;
}
textarea {
    width: 100%;
    min-height: 15em;
}
.input-container {
    width: 650px;
    max-width: 100%;
    margin: 20px auto 25px auto;
}
.submit-btn {
    margin-left: 30%;
    padding: 7px 35px;
    background-color: #5672A1;
    color: white;
    font-size: 18px;
    cursor: pointer;
   
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
              0 2px 10px 0 rgba(0,0,0,0.07);
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
}
.submit-btn:hover {
    transform: translateY(1px);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
              0 1px 1px 0 rgba(0,0,0,0.09);
}
@media (max-width: 768px) {
    .submit-btn {
        margin-top: 50px;
        margin-left: 8%;
        float: none;
        text-align:center;
    }
}
input[type=checkbox] + label {
  color: #ccc;
  font-style: italic;
} 
input[type=checkbox]:checked + label {
  color: #f00;
  font-style: normal;
}
h3 {

  margin-bottom: 25px;

}
</style>
<script>
import Bestellung from "@/components/organisms/mensa/Bestellung.vue";
export default {
   name: "App",
  components: {
    Bestellung,
  },
  data() {
    return {
      name: "Schüler Walterichschule",
      day: '',
      menu: '',
      salat: '',
       dessert: '',
       date: '',
       time: '',
       year: '',
       timestamp: '',
       fulldatetime: ''
    };
  },
  mounted: function () {
          this.date = this.printDate();
          this.time = this.printTime();
          this.timestamp = this.printTimestamp();
          this.year = this.printYear();
          this.fulldatetime = this.printFullDate();
        },
  methods: {
    handleClick() { 
    },
    printDate: function () {
            return new Date().toLocaleDateString();
          },
          printTime: function () {
            return new Date().toLocaleTimeString();
          },
          printYear: function () {
            return new Date().getFullYear();
          },          
          printTimestamp: function () {
            return Date.now();
          },
          printFullDate: function(){
            return new Date();
          }
  },
}
</script>
