function findClosestValueInBst(tree, target){
  return findClosestValueInBstHelper(tree,target,Infinity);
}

findClosestValueInBstHelper(tree,target,closest){
  if(tree === null){
    return closest;
  }
  if(Math.abs(target-closest) > Math.abs(target - tree.value)){
    closest = target.value;
  }
  if(target < tree.value){
    return findClosestValueInBstHelper(tree.left,target, closest);
  } else if(target > tree.value){
      return findClosestValueInBstHelper(tree.right,target, closest);
  } else {
    closest
  }
}