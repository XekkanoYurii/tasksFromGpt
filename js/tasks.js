const profile = {
    username: "Jacob",
    playTime: 300,
    // metodts
    changeUsername(newName) {
        this.username = newName;
    },
    updatePlayTime(hours) {
        this.playTime += hours 
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`
    }
   
};
profile.changeUsername("Marco");
console.log(profile.getInfo());

