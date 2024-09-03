class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = []; 
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
}

function depthFirstTraversal(root) {
    if (!root) return;

    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        console.log(node.value); 

        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
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

depthFirstTraversal(root); 