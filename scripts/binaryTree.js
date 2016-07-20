/**
 * Created by xaleth on 6/13/2016.
 */
/**
 * Created by xaleth on 6/12/2016.
 *
 *  // Recursively traverse the tree, printing out the keys, one per line; by changing order
 //    of statements, can get all 6 traversals:
 //
 //    Preorder          V L R
 //    Inorder           L V R
 //    Postorder         L R V
 //    Reverse Preorder  V R L
 //    ReverseInorder    R V L
 //    ReversePostorder  R L V
 *
 */
class Node{
    constructor(config){
        this.left = null;
        this.right = null;
        this.key = 0;
        this.value;

        Object.assign(this,config);
    }

    //Generator-Iteration InOrder
    /*
     for(let x of tree){
     console.log(x)
     }
     */
    *[Symbol.iterator](){
        if(this.left){
            yield* this.left;
        }
        yield this.key;
        if(this.right){
            yield* this.right;
        }
    }

}

class Tree{
    constructor(config){
        this.root = null;

        Object.assign(this,config);
    }

    insert(k, t = this.root){
        if(t === null){
            return new Node({key: k});
        }else if(k < t.key){
            t.left = this.insert(k, t.left);
            return t;
        }else if(k > t.key){
            t.right = this.insert(k, t.right);
            return t;
        }else{
            return t;
        }
    }

    remove(){

    }

    printIndentedTree(t = this.root){
        console.log("");
        this.printIndentedTreeAux(t,"");
        console.log("");
    }

    printIndentedTreeAux(t, str){
        if(t != null){
            this.printIndentedTreeAux(t.right, str + "   ");
            console.log(str +""+t.key);
            this.printIndentedTreeAux(t.left, str + "   ");
        }
    }

    inOrder(current = this.root){
        if(current != null){
            this.inOrder(current.left);
            console.log(current.key+": "+current.value);
            this.inOrder(current.right);
        }
    }

}

/*
/    myTree = new Tree();
/
/    myTree.root = myTree.insert(14, myTree.insert(20, myTree.insert(12, myTree.insert(2, myTree.insert(5, myTree.insert(3, myTree.insert(8,null)))))));
/
/    myTree.printIndentedTree();
/
/    for(let x of myTree.root){
/        console.log(x);
/    }
/
/    console.log("");
/    myTree.inOrder();
*/