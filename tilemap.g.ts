// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001040a0a0e0c0c0c0c0c0f0f0f0f0f1702050b0b090c0c0c0c0c0f0f0f0f0f0f03050b0b090c0c12120c0c0c0c0c0c0c0d060707080c0c0c0c0c0c0c0c130c0c0c0c0c0c0c0c0c0c0c0c0f0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c100c0c0c0c0c0c0c0c0c0c0c0c140c0c0f0f0f0f0f0f0c0c0c0c0c0c0c140c0c0f0f0f0f0f0f0c0c131313130c140c0c100f0f0f0f0f0c0c0c0c0c0c0c140c0c0c0c0c110f0f170c0c0c0c0c0c0c0c0c0c0c0c0f0f0f151515160c0c0c0c0c0c0c0c0c0f0f0f151515150c0c0c0c0c0c130c0c0f0f0f151515180c0c0c0c0c0c0c0c0c0f0f0f15151515151515150c0c0c0c0c0f0f0f17151515151515180c0c0c0c0c0f0f17`, img`
. . . . . . . . . . 2 2 2 2 2 2 
. 2 2 2 2 . . . . . 2 2 2 2 2 2 
. 2 2 2 2 . . 2 2 . . . . . . . 
. 2 2 2 2 . . . . . . . . 2 . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . 2 . . 2 2 2 2 2 2 
. . . . . . . 2 . . 2 2 2 2 2 2 
. . 2 2 2 2 . 2 . . 2 2 2 2 2 2 
. . . . . . . 2 . . . . . 2 2 2 
2 . . . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 2 . . . . . . 2 . . 2 2 2 
2 2 . . . . . . . . . . . 2 2 2 
2 2 . 2 2 2 2 2 . . . . . 2 2 2 
2 2 . . . . . . . . . . . 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.builtin.brick,sprites.dungeon.stairSouth,sprites.dungeon.stairWest,sprites.dungeon.floorDark0,sprites.castle.saplingOak,sprites.castle.shrub,sprites.castle.rock2,sprites.dungeon.floorDark3,sprites.castle.rock0,sprites.dungeon.darkGroundCenter,sprites.castle.saplingPine,sprites.dungeon.buttonOrange,sprites.dungeon.stairLadder], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
