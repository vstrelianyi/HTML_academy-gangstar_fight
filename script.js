"use strict";
(function() {
    var startFirefight = function(gang) {
        console.log(gang);
        do {
            var random = Math.floor(Math.random() * gang.length);
            var gangster = gang.splice(random, 1)[0];
            console.log("Убит: " + gangster.nickname);
        } while (gang.length > 1);
        console.log("Выжил: " + gang[0].nickname);
    };

    var PISTOL = "\u{1F52B}";
    var createGangster = function(nickname, weapon) {
        return {
            nickname: nickname,
            weapon: PISTOL,
            check: function() {
                return this.weapon;
            }
        };
    };

    var mrBlonde = createGangster("Мистер Блондин");
    var mrPink = createGangster("Мистер Розовый");
    var mrOrange = createGangster("Мистер Оранжевый");
    var mrWhite = createGangster("Мистер Белый");
    var mrBlue = createGangster("Мистер Синий");

    startFirefight([mrBlonde, mrPink, mrOrange, mrWhite, mrBlue]);
})();
