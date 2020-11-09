/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//GLOBAL VARIABLES
global = {};
global.player = {};
global.perkTree = {};
global.base = {};
//Lib is for JSON data
lib = {};

//Call the start function when the document is fully loaded
$(document).ready(function(){
   start(); 
});

//All functions to call to start the game
function start() {
    testWeaponSpawn();
}

//Function to save data
function save() {
    
}

//Function to recall data
function load() {
    
}

//Function to init variables to starting values
function init() {
    
}


//Function to compile all json files
function compileAllJSON() {
    compileJSON("lib/adj.json", "adj");
    compileJSON("lib/weapons/melee.json", "melee");
}

//Generic function used to compile all JSON data into the global lib object
function compileJSON(JSONfile, obj) {
    $.ajax({
        type: "Get",
        url: JSONfile,
        dataType: "json",
        success: function(data) {
            lib[obj] = data[obj];
        },
        error: function(){
            alert("Cannot connect to server's json library!");
        }
    });
}

let weapon1;
//TEST FUNCTIONS
function testWeaponSpawn() {
    weapon1 = new Melee(1);
    console.log(weapon1);
}