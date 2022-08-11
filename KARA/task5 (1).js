/*
 * COMMANDS:
 *   kara.move()           kara.turnRight()      kara.turnLeft()
 *   kara.putLeaf()        kara.removeLeaf()
 * SENSORS:
 *   kara.treeFront()      kara.treeLeft()       kara.treeRight()
 *   kara.mushroomFront()  kara.onLeaf()
 */

//
// you can define your methods here
//
while(!kara.onLeaf()){
    kara.move()
    kara.turnLeft()
    kara.move()
    kara.turnRight()
    kara.move()
    kara.move()
    kara.move()
    
    }