class Character {
    constructor(name, race,) {
        this.name = name;
        this.race = race;
        
        
    }

    describe() {
        return `${this.name} is an ${this.race} ${this.job}`;
    }
}


class Party {
    constructor(name) {
        this.name = name    
        this.players = [];
    }


createCharacter(player) {
    if(player instanceof Character){
        this.players.push(player);
    } else {
        throw new Error(` You can only add an instance of Player. Argument isnt a player: ${player}`)
    }
}
describe() {
    return  `${this.name} has ${this.players.length} party members`;
}

}


class Menu {
    constructor() {
        this.party = [];
        this.partySelected = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case `1`: 
                this.createParty();
                break;
                case `2`:
                this.viewParty();
                break;
                case `3`:
                this.deleteParty();
                break;
                case `4`:
                 this.displayParty();
                break;
                default:
                    selection = 0;
            }
            
            selection = this.showMainMenuOptions();
        }
        alert(`Farewell travelers!`);
    }

    showMainMenuOptions()  {
        return prompt(`
        0) exit
        1) create new party
        2) view party
        3) delete party
        4) display parties
        `);
    }

    showPartyMenuOptions(partyInfo){
        return prompt(`
        0) back
        1) create character
        2) delete character
        
        ${partyInfo}
        `);

    }




    displayParty() {
        let partyString = ``;
        for (let i = 0; i < this.party.length; i ++){
            partyString += i + ') ' + this.party[i].name + '\n'
        }
        alert(partyString); 
    }

    createParty() {
        let name = prompt('Enter name for party:')
        this.party.push(new Party(name));
    }

    viewParty() {
        let index =  prompt('Enter which party you want to view:');
        if(index > -1 && index < this.party.length) {
            this.partySelected = this.party[index];
            let description = 'Party name: ' + this.partySelected.name +  '\n';
            for (let i = 0; i < this.partySelected.players.length; i++) {
                description += i + ') ' + this.partySelected.players[i].name + ' - '  + this.partySelected.players[i] + '\n';
            }
            let selection = this.showPartyMenuOptions(description) 
                switch (selection) {
                    case '1':
                        this.createCharacter();
                        break;
                    case '2':
                    this.deleteCharacter();
        }
    }
                }

                
                createCharacter() {
                    let name = prompt('Enter name for new player:');
                    let race = prompt(' Enter race for new player:');
                    this.partySelected.players.push(new Character(name, race));


                
                deleteParty();{
                    let index = prompt('Enter the index of the party you want to delete: ')
                    if (index > -1 && index < this.party.length) {
                        this.teams.splice(index, 1);
                }
            deleteCharacter(); {
                let index = prompt('Enter the index of the character you want to delete:')
                if (index > -1 && index < this.selectedTeam.players.length) {
                    this.partySelected.players.splice(index, 1);
            }
        }
    }
}
}
let menu =  new Menu();
menu.start();





















































