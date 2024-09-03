class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = []; 
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
}

function breadthFirstTraversal(root) {
    if (!root) return;

    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift(); 
        console.log(node.value); 

        for (const child of node.children) {
            queue.push(child);
        }
    }
}

const root = new TreeNode(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
const grandchild1 = new TreeNode(4);
const grandchild2 = new TreeNode(5);

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandchild1);
child2.addChild(grandchild2);

breadthFirstTraversal(root);