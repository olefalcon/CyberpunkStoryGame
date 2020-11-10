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


class Combat {
    
    //Constructor
    constructor(attackers, defenders) {
        
        //Combat variables
        this._attackers = attackers;
        this._defenders = defenders;
        this._turnChar = attackers[0];
        this._turnTeam = attackers;
        this._round = null;
        //Reference to location
        this._location = null;
        
    }
    
    //Methods
    cycleTurn() {
        //Get Index of current char in team array
        let teamIndex = this._turnTeam.indexOf(this._turnChar);
        if (this._turnTeam[teamIndex + 1] !== null) {
            this._turnChar = this._turnTeam[teamIndex+1];
        } else {
            //Swap to the first character on the other team
            if (this._turnTeam === this._attackers) {
                this._turnTeam = this._defenders;
                this._turnChar = this._defenders[0];
            } else if (this._turnTeam === this._defenders) {
                this._turnTeam = this._attackers;
                this._turnChar = this._attackers[0];
            }
        }
    }
    
    killCombatant(combatant) {
        //Check if combatant is on either team using index of
        //If so remove them from thats team list
        let isAttacker = this._attackers.indexOf(combatant);
        if (isAttacker !== null) {
            this._attackers.pop(isAttacker);
        }
        let isDefender = this._defenders.indexOf(combatant);
        if (isDefender !== null) {
            this._defenders.pop(isDefender);
        }
    }
    
    checkForEnd() {
        if (this._attackers === []) {
            endCombat("defenders");
        } else if (this._defenders === []) {
            endCombat("attackers");
        }
    }
    
    endCombat(winner) {
        
    }
    
}