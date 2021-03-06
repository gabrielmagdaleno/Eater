controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 0 && level == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, goodGuy, 200, 0)
    }
    if (direction == 1 && level == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, goodGuy, -200, 0)
    }
})
function nivel_3 () {
    tiles.setTilemap(tilemap`level4`)
    level3 = sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 9 9 9 9 9 9 b b . . . 
        . . b b 9 9 9 9 9 9 9 9 b b . . 
        . b b 9 d 9 9 9 9 9 9 9 9 b b . 
        . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
        b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
        b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
        b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
        b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
        . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `, SpriteKind.Food)
    level3.setPosition(224, 208)
    goodGuy.destroy()
    level2.destroy()
    goodGuy = sprites.create(img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 5 5 5 5 5 8 8 5 5 5 5 5 8 8 
        8 8 5 5 5 5 5 8 8 5 5 5 5 5 8 8 
        8 8 5 5 f f f 8 8 5 5 f f f 8 8 
        8 8 5 5 f f f 8 8 5 5 f f f 8 8 
        8 8 5 5 f f f 8 8 5 5 f f f 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 
        8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 
        8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `, SpriteKind.Player)
    goodGuy.setPosition(8, 8)
    controller.moveSprite(goodGuy, 100, 100)
    badGuy = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 5 5 5 5 5 2 2 5 5 5 5 5 2 2 
        2 2 5 5 5 5 5 2 2 5 5 5 5 5 2 2 
        2 2 5 5 f f f 2 2 5 5 f f f 2 2 
        2 2 5 5 f f f 2 2 5 5 f f f 2 2 
        2 2 5 5 f f f 2 2 5 5 f f f 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 a a 3 2 2 2 2 2 2 
        2 2 2 2 2 2 2 a a 3 2 2 2 2 2 2 
        2 2 2 2 2 2 2 3 3 3 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Enemy)
    badGuy.setPosition(150, 110)
    badGuy.follow(goodGuy, 50)
    badGuy = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 5 5 5 5 5 2 2 5 5 5 5 5 2 2 
        2 2 5 5 5 5 5 2 2 5 5 5 5 5 2 2 
        2 2 5 5 f f f 2 2 5 5 f f f 2 2 
        2 2 5 5 f f f 2 2 5 5 f f f 2 2 
        2 2 5 5 f f f 2 2 5 5 f f f 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 a a 3 2 2 2 2 2 2 
        2 2 2 2 2 2 2 a a 3 2 2 2 2 2 2 
        2 2 2 2 2 2 2 3 3 3 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Enemy)
    badGuy.setPosition(200, 240)
    badGuy.follow(goodGuy, 50)
    scene.cameraFollowSprite(goodGuy)
    info.stopCountdown()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.hazardLava0)
    game.over(false, effects.melt)
    music.wawawawaa.play()
})
function nivel_2 () {
    treasure.destroy()
    treasure1.destroy()
    treasure2.destroy()
    treasure3.destroy()
    tiles.setTilemap(tilemap`level2`)
    level2 = sprites.create(img`
        .eeee..............eeee.
        eeddee............eeddee
        edbbde............edbbde
        edbbdeeeeeeeeeeeeeedbbde
        feddeebbbbbbbbbbbbfeddee
        feeeefbbbbbbbbbbbbfeeeef
        feeeefeebbbbbbbbeefeeeef
        eeddeffeeeeeeeeeeffeddee
        edbbdeffeeeeeeeeffedbbde
        edbbdebbbbbbbbbbbbedbbde
        feddeebbbbbbbbbbbbfeddee
        feeeefeebbbbbbbbeefeeeef
        feeeeffeeeeeeeeeeffeeeef
        eeddeeffeeeeeeeeffeeddee
        edbbdebbbbbbbbbbbbedbbde
        edbbdebbbbbbbbbbbbedbbde
        feddeeeebbbbbbbbeefeddee
        feeeeffeeeeeeeeeeffeeeef
        feeeefffeeeeeeeefffeeeef
        eeddeebbbbbbbbbbbbeeddee
        edbbdebbbbbbbbbbbbedbbde
        edbbdeeebbbbbbbbeeedbbde
        feddeefeeeeeeeeeeffeddee
        feeeefffeeeeeeeefffeeeef
        feeeefbbbbbbbbbbbbfeeeef
        eeddeebbbbbbbbbbbbeeddee
        edbbdeeebbbbbbbbeeedbbde
        edbbdefeeeeeeeeeefedbbde
        feddeeffeeeeeeeefffeddee
        feeeefbbbbbbbbbbbbfeeeef
        feeeefbbbbbbbbbbbbfeeeef
        eeddeeeebbbbbbbbeeeeddee
        edbbdefeeeeeeeeeefedbbde
        edbbdeffeeeeeeeeffedbbde
        feddeebbbbbbbbbbbbfeddee
        feeeefbbbbbbbbbbbbfeeeef
        fbeeefeebbbbbbbbeefbeeef
        fbbffffeeeeeeeeeeffbbfff
        febbbefffffffffffffebbbe
        feefff666666666666feefff
        feeeef666666666666feeeef
        eeeeef............eeeeef
        .eeff..............eeff.
        `, SpriteKind.Food)
    level2.setPosition(1016, 216)
    colorFondo(randint(0, 14))
    goodGuy.ay = 200
    badGuy.setPosition(1024, 8)
    level = 2
    info.startCountdown(10)
}
function Puntos () {
    game.setDialogTextColor(4)
    game.setDialogFrame(img`
        111111111111111111111111111111111111111111111111
        111199911111111111119991111111111111999111111111
        119999999111999911999999911199991199999991119991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199999999999999999999999999999999999999999999991
        199699999999999999999999999999999999999996999991
        199699999999699999999999999999999969999966999991
        199669999999669999999999999999999969999996999691
        166699999999699999999999999699999966999966699691
        196669999996669999699999999699999669999966996691
        199666999999699999699999996669999966999666699691
        166699999966666999669999996699999966699966996661
        196666999966669996666999966666996669999666696691
        196666999966669999669999996699999666999666666661
        166669999666666996666999966666996666966666666669
        196699996666669996666999666669996666666666666669
        966666699666666666666666666666666666666666666669
        966666996666666666666666666666666666666666666669
        966666666666666666666666666666666666666666666669
        999999999999999999999999999999999999999999999999
        `)
    game.setDialogCursor(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ..........888888888888..........
        ........8887777777777888........
        ......88877666666666677888......
        .....8877666667777666667788.....
        ....887666667788887766666788....
        ....866666677888888996666678....
        ...88666667788877889976666688...
        ...88666677888677688877666688...
        ...88666778888888888887766688...
        ...88667788888888888888776688...
        ..cc866788866777777668887668cc..
        .ccbc8668866666666666688668cbcc.
        .fcbcc86666666666666666668ccbcf.
        .fcbbcc886666666666666688ccbdcf.
        .f8bbbccc88888888888888cccbddcf.
        .f8cbbbbccccccccccccccccbdddbcf.
        .f8ccbbbbbccccccccccccb11dddccf.
        .f6ccccbbbdddddddddddd111ddcccf.
        .f6ccccccbbddddddddddd11dbbcccf.
        .f6cccccccccccccbbbbbbbbbdbcccf.
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..f6cccccccccbbbbbbbbbbbddbccf..
        ..ff6ccccccccbbbbbbbbbbbddbcff..
        ...ff6cccccccbbbbbbbbbbbddbff...
        ....ffcccccccbbbbbbbbbbbdbff....
        ......ffccccbbbbbbbbbbbbff......
        ........ffffffffffffffff........
        `)
    game.showLongText("Tus puntos obtenidos son:" + info.score(), DialogLayout.Full)
}
info.onCountdownEnd(function () {
    info.startCountdown(10)
    colorFondo(randint(0, 14))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `)
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    music.wawawawaa.play()
    Puntos()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.hazardWater)
    game.over(false, effects.bubbles)
    music.wawawawaa.play()
})
function colorFondo (codigoColor: number) {
    if (codigoColor == 0) {
        scene.setBackgroundColor(0)
    }
    if (codigoColor == 1) {
        scene.setBackgroundColor(1)
    }
    if (codigoColor == 2) {
        scene.setBackgroundColor(2)
    }
    if (codigoColor == 3) {
        scene.setBackgroundColor(3)
    }
    if (codigoColor == 4) {
        scene.setBackgroundColor(4)
    }
    if (codigoColor == 5) {
        scene.setBackgroundColor(5)
    }
    if (codigoColor == 6) {
        scene.setBackgroundColor(6)
    }
    if (codigoColor == 7) {
        scene.setBackgroundColor(7)
    }
    if (codigoColor == 8) {
        scene.setBackgroundColor(8)
    }
    if (codigoColor == 9) {
        scene.setBackgroundColor(9)
    }
    if (codigoColor == 10) {
        scene.setBackgroundColor(10)
    }
    if (codigoColor == 11) {
        scene.setBackgroundColor(11)
    }
    if (codigoColor == 12) {
        scene.setBackgroundColor(12)
    }
    if (codigoColor == 13) {
        scene.setBackgroundColor(13)
    }
    if (codigoColor == 14) {
        scene.setBackgroundColor(14)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (goodGuy.overlapsWith(treasure)) {
        info.changeScoreBy(1)
        treasure.destroy()
        music.baDing.play()
    }
    if (goodGuy.overlapsWith(treasure1)) {
        info.changeScoreBy(1)
        treasure1.destroy()
        music.baDing.play()
    }
    if (goodGuy.overlapsWith(treasure2)) {
        info.changeScoreBy(1)
        treasure2.destroy()
        music.baDing.play()
    }
    if (goodGuy.overlapsWith(treasure3)) {
        info.changeScoreBy(1)
        treasure3.destroy()
        music.baDing.play()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    badGuy.destroy()
    badGuy = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 5 5 5 5 5 2 2 5 5 5 5 5 2 2 
        2 2 5 5 5 5 5 2 2 5 5 5 5 5 2 2 
        2 2 5 5 f f f 2 2 5 5 f f f 2 2 
        2 2 5 5 f f f 2 2 5 5 f f f 2 2 
        2 2 5 5 f f f 2 2 5 5 f f f 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 a a 3 2 2 2 2 2 2 
        2 2 2 2 2 2 2 a a 3 2 2 2 2 2 2 
        2 2 2 2 2 2 2 3 3 3 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Enemy)
    badGuy.setPosition(1024, 8)
    badGuy.follow(goodGuy, 25)
})
let level2: Sprite = null
let level3: Sprite = null
let projectile: Sprite = null
let direction = 0
let level = 0
let badGuy: Sprite = null
let goodGuy: Sprite = null
let treasure3: Sprite = null
let treasure2: Sprite = null
let treasure1: Sprite = null
let treasure: Sprite = null
game.splash("Come - Come", "Autor: Gabriel Magdaleno")
game.setDialogTextColor(4)
game.setDialogFrame(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("Tienes que recoger los 4 tesoros e impedir que el malo te detenga", DialogLayout.Center)
info.setScore(0)
tiles.setTilemap(tilemap`level1`)
treasure = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
treasure.setPosition(128, 24)
treasure1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
treasure1.setPosition(232, 56)
treasure2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
treasure2.setPosition(40, 120)
treasure3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
treasure3.setPosition(168, 216)
let level1 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Food)
level1.setPosition(88, 120)
goodGuy = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 5 5 5 5 5 8 8 5 5 5 5 5 8 8 
    8 8 5 5 5 5 5 8 8 5 5 5 5 5 8 8 
    8 8 5 5 f f f 8 8 5 5 f f f 8 8 
    8 8 5 5 f f f 8 8 5 5 f f f 8 8 
    8 8 5 5 f f f 8 8 5 5 f f f 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 
    8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 
    8 8 8 8 8 8 5 5 5 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Player)
goodGuy.setPosition(8, 8)
badGuy = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 5 5 5 5 5 2 2 5 5 5 5 5 2 2 
    2 2 5 5 5 5 5 2 2 5 5 5 5 5 2 2 
    2 2 5 5 f f f 2 2 5 5 f f f 2 2 
    2 2 5 5 f f f 2 2 5 5 f f f 2 2 
    2 2 5 5 f f f 2 2 5 5 f f f 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 a a 3 2 2 2 2 2 2 
    2 2 2 2 2 2 2 a a 3 2 2 2 2 2 2 
    2 2 2 2 2 2 2 3 3 3 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Enemy)
badGuy.setPosition(150, 110)
badGuy.follow(goodGuy, 25)
controller.moveSprite(goodGuy, 100, 100)
scene.cameraFollowSprite(goodGuy)
level = 1
direction = 0
forever(function () {
    if (info.score() == 4 && goodGuy.overlapsWith(level1)) {
        info.changeScoreBy(10)
        level1.destroy()
        music.magicWand.play()
        nivel_2()
    }
    if (info.score() == 28 && goodGuy.overlapsWith(level2)) {
        info.changeScoreBy(10)
        level2.destroy()
        music.magicWand.play()
        nivel_3()
    }
    if (info.score() == 38 && goodGuy.overlapsWith(level3)) {
        game.over(true, effects.starField)
        music.powerUp.play()
    }
    if (controller.right.isPressed() && level == 2) {
        direction = 0
    }
    if (controller.left.isPressed() && level == 2) {
        direction = 1
    }
})
