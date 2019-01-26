(function() {
    "use strict";
    var OFFICER = "\u{1F46E}";
    var PISTOL = "\u{1F52B}";

    var Gangster = function(nickname) {
        this.nickname = nickname;
        this.weapon = PISTOL;
        this.check = function() {
            return this.weapon;
        };
    };

    // var isPoliceman = function(gangster) {
    //     return gangster.check() === OFFICER;
    // };

    var isPoliceman = function(gangster) {
        return !(gangster instanceof Gangster);
    };

    var startFirefight = function(gang) {
        // console.log(gang);
        do {
            var random = Math.floor(Math.random() * gang.length);
            var gangster = gang.splice(random, 1)[0];

            if (isPoliceman(gangster)) {
                console.log(gangster.nickname + " turned out to be a cop!");
                return;
            }
            console.log(
                "Checking: " + gangster.nickname + " " + gangster.check()
            );
        } while (gang.length > 1);
        console.log("Cop was not discovered, gangsters lost!");
    };

    var createGangster = function(nickname, weapon) {
        return {
            nickname: nickname,
            weapon: PISTOL,
            check: function() {
                return this.weapon;
            }
        };
    };

    var mrBlonde = new Gangster("Mister Blond");
    var mrPink = new Gangster("Mister Pink");
    var mrOrange = new Gangster("Mister Orange");
    var mrWhite = new Gangster("Mister White");
    var mrBlue = new Gangster("Mister Blue");

    var mrRed = {
        nickname: "Mister Red",
        weapon: OFFICER,
        check: function() {
            // throw new Error("Everybody stand still! Nobody move!");
            return PISTOL;
        }
    };

    startFirefight([mrBlonde, mrPink, mrOrange, mrWhite, mrBlue, mrRed]);
})();
