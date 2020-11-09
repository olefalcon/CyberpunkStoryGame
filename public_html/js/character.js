/* 
 * Copyright (C) 2020 olefa
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


class Character {
    
    //Constructor
    constructor() {
        
        //Character generic variables
        this._name = "";
        this._level = 1;
        this._hp = 0;
        
        //Character equipment
        this._melee = null;
        this._pistol = null;
        this._stim = null;
        this._elemental = null;
        this._throwable = null;
        this._sniper = null;
        this._mg = null;
        
    }
    
    //Setter methods
    set hp(x) {
        this._hp = x;
    }
    set level(x) {
        this._level = x;
    }
    //Getter methods
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get hp() {
        return this._hp;
    }
    
    takeDamage(damage) {
        
        //Modify damage incoming
        
        
        //Final result
        this.hp = hp-damage;
        
    }
    
    use(itemIndex, target) {
        
        switch(itemIndex) {
            //Use items native methods for attacking passing the attacker and victim
            case 1:
                this._melee.attack(this,target);
                break;
            case 2:
                this.pistol.attack(this,target);
                break;
            case 3: //Special case for stim isntaed call native method buff
                this.stim.buff(this,target);
                break;
            case 4:
                this.elemental.attack(this,target);
                break;
            case 5:
                this.throwable.attack(this,target);
                break;
            case 6:
                this.sniper.attack(this,target);
                break;
            case 7:
                this.mg.attack(this,target);
                break;
            
        }
        
    }
    
    counter(attacker) {
        //If no melee then no counter occurs
        if (this._melee === null) {
            return false;
        }
        //Perform a random check
        if (getRndCheck(this._melee.counterChance) === false) {
            return false;
        }
        //If still running then send to weapons counter method
        this._melee.counter(this, attacker);
    }
    
    
}

class Player extends Character {
    
    //Constructor
    constructor() {
        super();
        
        //Player specific variables
        this._cybernetic1 = null;
        this._cybernetic2 = null;
        
    }
    
    
    
}

class NPC extends Character {
    
    //Constructor
    constructor() {
        super();
    }
    
}