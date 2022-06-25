<template>
    <v-container>
    <v-row>
    <v-col>
    <v-card to="/calendar/">
    <div class="sc-card">
      <div class="sc-card-header" style="background-color: #5672a1">
        <span class="sc-card-title">
          <div>
            <span style="white-space: normal;" class="title"> Stundenplan</span>
          </div>
        </span>
        <small class="d-block"></small>
      </div>
      <div class="sc-card-body ckcontent">
        <p>Hier findest du alles zu deinem Stundenplan und wichtigen Terminen</p>
      </div>
    </div>
    </v-card>
    </v-col>
    </v-row>

    <v-row>
    <v-col>
    <v-card to="/vertretung/">
      <div class="sc-card">
         <div class="sc-card-header" style="background-color: #93A7CA">
        <span class="sc-card-title">
          <div>
            <span style="white-space: normal;" class="title"> Vertretungsplan</span>
          </div>
        </span>
        <small class="d-block"></small>
      </div>
        <div class="sc-card-body ckcontent">
          <p>Hier findest du alles zu ausfallenden Stunden</p>
        </div>
      </div>
    </v-card>
    </v-col>
    </v-row>
 
    <v-row>
    <v-col>
    <v-card to="/mensa/">
    <div class="sc-card">
       <div class="sc-card-header" style="background-color: #5672a1">
        <span class="sc-card-title">
          <div>
            <span style="white-space: normal;" class="title"> Mensaplan</span>
          </div>
        </span>
        <small class="d-block"></small>
      </div>
      <div class="sc-card-body ckcontent">
        <p>Du möchtest schauen was es diese Woche in der Mensa zu essen gibt? <br> dann bist du hier genau richtig!</p>
      </div>
    </div>
    </v-card>
    </v-col>
    </v-row>
    </v-container>
</template>
    
<style lang="scss" scoped>
.sc-card {
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 100% !important;
    height: 100%;
    margin: 0;
    border-radius: 2px;
    overflow: hidden;
    transition: 0.3s;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
   
    .rss-icon {
        color: rgba(255, 255, 255, 0.7);
        pointer-events: none;
        position: absolute;
        bottom: 8px;
        right: 8px;
        z-index: 10;
        font-weight: bold;
    }

    .tag {
        background: white;
        color: black;
        margin: .5rem 0 0 0;
        text-shadow: none;
        padding: 4px 8px;
    }

    .sc-card-header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        position: relative;
        min-height: 6rem;
        padding: 1rem 1rem .5rem;
        color: white !important;
        text-decoration: none !important;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        &::before {
            content: " ";
            display: block;
            position: absolute;
            z-index: 5;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
        .sc-card-title {
            .title {
              color: inherit;
              font-size: 3rem;
            }
            small {
                font-size: 0.9rem;
                margin: .75rem 0 .5rem 0;
            }
            overflow: hidden;
            z-index: 10;
            padding-right: 5px;
            word-break: break-word;
        }
        .sc-card-menu {
            position: absolute;
            bottom: 8px;
            right: 8px;
            z-index: 10;
            font-size: 0;
            .sc-card-menu-action {
                display: inline-block;
                width: 32px;
                height: 32px;
                padding: 0;
                margin: 0;
                border-radius: 50%;
                background: none;
                border: none;
                color: #fff;
                font-size: 20px;
                text-decoration: none;
                text-align: center;
                vertical-align: middle;
                line-height: 32px;
                overflow: hidden;
                opacity: .5;
                transition: all .1s ease-in-out;
                &:hover {
                    background: rgba(0,0,0,.2);
                }
            }
            .sc-card-menu-info {
                display: inline-block;
                padding: 0;
                margin: 0;
                color: #fff;
                font-size: 14px;
                overflow: hidden;
            }
        }
        &:hover{
            .sc-card-menu-action{
                opacity: 1;
            }
        }
    }
    .sc-card-body {
        padding: .5rem .5rem 0rem;
        margin: 0;
        flex: 1 1 0;
        width: 100%;
        border: 1px solid rgba(0,0,0,.125);
        border-top-width: 0;
        border-bottom-width: 0;
        p{
            word-break: break-all;
            word-break: break-word;
        }
        &:first-of-type{
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
            border-top-width: 1px;
        }
        &:last-of-type{
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
            border-bottom-width: 1px;
        }
    }
     &:hover{
        .sc-card-header{
            .sc-card-menu{
                opacity: 1;
            }
        }
        box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12),0 3px 5px -1px rgba(0,0,0,0.2);
    }
}

</style>
