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


let weapon1;
//TEST FUNCTIONS
function testWeaponSpawn() {
    weapon1 = new Melee(1);
    console.log(weapon1);
}