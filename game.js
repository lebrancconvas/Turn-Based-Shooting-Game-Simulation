let shooter = require('./shooter.json')

let player = n => {
    return shooter[n - 1]
}

let player_information = n => {
    player_name = player(n).name 
    player_point = player(n).point 
    player_atk = player(n).atk 
    player_agi = player(n).agi
    console.log(
        `Name: ${player_name}\nPoint: ${player_point}\nAttack: ${player_atk}\nAgility: ${player_agi}\n`
    )
}

let gamematch = (turnplayer, enemy) => {
    charname = turnplayer.name
    enemyname = enemy.name
    mindmg = turnplayer.atk - (turnplayer.atk / 2)
    maxdmg = turnplayer.atk + (turnplayer.atk / 2)
    dmgrange = Math.floor(Math.random() * (maxdmg - mindmg + 1)) + mindmg
    evadepoint = Math.floor(Math.random() * 99)
    if(evadepoint >= 0 && evadepoint <= enemy.agi - 1) {
        console.log(`${charname} [attacked] missed.\n`)
    } else {
        if(dmgrange < enemy.point) {
            enemy.point -= dmgrange
            console.log(`${charname} [attack]=> ${enemyname} for ${dmgrange} damages.`)
            console.log(`||${enemyname} have ${enemy.point} point left.||\n`)
        }
        else {
            enemy.point = 0
            console.log(`${charname} [attack]=> ${enemyname} for ${dmgrange} damages.`)
            console.log(`${enemyname} is defeated !!\n`)
            console.log((`>> ${charname} win <<`))
        }
    } 
}

let match = (a, b) => {
    console.log("MATCH :")
    console.log(`${player(a).name} VS ${player(b).name}`)
    console.log("\n-- MATCH START --\n")

    while(player(a).point > 0 && player(b).point > 0) {
        console.log(`# ${player(a).name} Turn #`)
        gamematch(player(a), player(b))

        if(player(b).point <= 0) {break}

        console.log(`# ${player(b).name} Turn #`)
        gamematch(player(b), player(a))
    }

    console.log("-- MATCH END --\n")
}

match(5, 7)






// let shooting = (attacker, attacked) => {
//     shooter = attacker.name
//     enemy = attacked.name
//     mindmg = attacker.atk - (attacker.atk / 2)
//     maxdmg = attacker.atk + (attacker.atk / 2)
//     dmgrange = Math.floor(Math.random() * (maxdmg - mindmg + 1)) + mindmg
//     evadepoint = Math.floor(Math.random() * 99)
//     if(evadepoint >= 0 && evadepoint <= attacked.agi - 1) {
//         console.log(`${shooter} attacked missed.\n`)
//     } else {
//         if(dmgrange < attacked.point) {
//             attacked.point -= dmgrange
//             console.log(`${shooter} attack ${enemy} for ${dmgrange} damages.`)
//             console.log(`${enemy} have ${attacked.point} point left.\n`)
//         }
//         else {
//             attacked.point = 0
//             console.log(`${shooter} attack ${enemy} for ${dmgrange} damages.`)
//             console.log(`${enemy} is defeated !!\n`)
//             console.log((`>> ${shooter} win <<`))
//         }

        
//     }
// }

// console.log("\n-- MATCH START --\n")

// while(player(1).point > 0 && player(2).point > 0) {
//     console.log(`# ${player(1).name} Turn #`)
//     shooting(player(1), player(2))

//     if(player(2).point <= 0) {break}

//     console.log(`# ${player(2).name} Turn #`)
//     shooting(player(2), player(1))
// }

// console.log("-- MATCH END --\n")


