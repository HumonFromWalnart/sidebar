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

// put your main program here, for example:
kara.turnLeft()
kara.turnLeft()
while (!kara.onLeaf()) {
  kara.move();
}
if (kara.onLeaf()){
    kara.removeLeaf()
}        