class GraphNode {
    constructor(value) {
        this.value = value;
        this.neighbors = []; 
    }

    addNeighbor(neighborNode) {
        this.neighbors.push(neighborNode);
    }
}

function breadthFirstSearch(startNode) {
    if (!startNode) return;

    const queue = [startNode];
    const visited = new Set();

    while (queue.length > 0) {
        const node = queue.shift(); 

        if (visited.has(node)) continue; 

        console.log(node.value); 
        visited.add(node);

        for (const neighbor of node.neighbors) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
            }
        }
    }
}

const a = new GraphNode('A');
const b = new GraphNode('B');
const c = new GraphNode('C');
const d = new GraphNode('D');
const e = new GraphNode('E');

a.addNeighbor(b);
a.addNeighbor(c);
b.addNeighbor(d);
b.addNeighbor(e);
c.addNeighbor(e);
d.addNeighbor(e);

breadthFirstSearch(a); 