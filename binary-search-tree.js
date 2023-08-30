class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // create new node
    const newNode = new Node(val);

    // empty tree, insert at root
    if(this.root === null){
      this.root = newNode;
      return this;
    } 
    // find insert position

    // pointer to current node
    let currNode = this.root;

    while(currNode){
      // traverse LEFT subtree
      if(val < currNode.val){
        // insert newNode at left child or keep trasversing
        if(currNode.left){
          currNode = currNode.left;
        } else {
          currNode.left = newNode;
          return this;
        }
      // traverse RIGHT subtree
      } else if(val > currNode.val){
        // insert newNode at right child or keep trasversing
        if(currNode.right){
          currNode = currNode.right;
        } else {
          currNode.right = newNode;
          return this;
        }
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    // tree is empty, insert at root
    if(!node){
      this.root = new Node(val);
      return this;
    }

    // traverse LEFT subtree
    if(val < node.val){
      // continue down left child, or insert at left child
      if(node.left){
        return this.insertRecursively(val, node.left);
      }

      node.left = new Node(val);
      return this;
    // traverse RIGHT subtree
    } else if(val > node.val){
      // continue down right child, or insert at right child
      if(node.right){
        return this.insertRecursively(val, node.right);
      }

      node.right = new Node(val);
      return this;
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    // tree is empty
    if(!this.root) return;

    // current Node
    let currNode = this.root;
    
    while(currNode){

      // check if found or continue down left or right child
      if(currNode.val === val){
        // node found
        return currNode;
      } else if(val < currNode.val){
        // traverse LEFT subtree
        currNode = currNode.left;
      } else if(val > currNode.val){
        // traverse RIGHT subtree
        currNode = currNode.right;
      }
    }

    // node not found in tree
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    // tree is empty
    if(!node) return undefined;

    // check if found or continue down left or right child
    if(val === node.val) {
      // node found
      return node;
    } else if(val < node.val){
      // if left child exists, continue
      if(node.left) return this.findRecursively(val, node.left);
    } else if(val > node.val){
      // if right child exists, continue
      if(node.right) return this.findRecursively(val, node.right);
    }

    // node NOT found
    return undefined;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const resArray = [];

    const DFS = (node) => {
      // push current node value to array
      resArray.push(node.val);

      // continue down left child
      if(node.left) DFS(node.left);
      // continue down right child
      if(node.right) DFS(node.right);
    }

    DFS(this.root);

    return resArray;
  }

  /** DFSInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const resArray = [];

    const DFS = (node) => {
      // continue down left child
      if(node.left) DFS(node.left);

      // push current node value to array
      resArray.push(node.val);

      // continue down right child
      if(node.right) DFS(node.right);
    }

    DFS(this.root);

    return resArray;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const resArray = [];

    const DFS = (node) => {
      // continue down left child
      if(node.left) DFS(node.left);

      // continue down right child
      if(node.right) DFS(node.right);
      
      // push current node value to array
      resArray.push(node.val);
    }

    DFS(this.root);

    return resArray;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    // empty tree
    if(!this.root) return;

    const queue = [this.root];
    const res = [];

    while(queue.length){
      let temp = queue.shift();
      res.push(temp.val);

      if(temp.left) queue.push(temp.left);
      if(temp.right) queue.push(temp.right);
    }

    return res;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    const DFS = (node) => {
      // node is null
      if(!node) return null;
  
      // node found
      if(node.val === val) {
        if(!node.left) return node.right;
        if(!node.right) return node.left;
  
        let curr = node.right;
  
        while(curr.left) curr = curr.left;
        curr.left = node.left;
        return node.right;
      }
  
      if(val > node.val) {
        node.right = DFS(node.right);
      } else {
        node.left = DFS(node.left);
      }
  
      return node;
    }
  
    return DFS(this.root);
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
