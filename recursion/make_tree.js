//https://vasco3.gitbooks.io/hacks-n-notes/content/javascript/functional-programming/recursion.html

let categories = [
  {id: 'animals', 'parent': null },
  {id: 'mammals', 'parent': 'animals' },
  {id: 'horses', 'parent': 'mammals' },
  {id: 'dogs', 'parent': 'mammals' },
  {id: 'jack russell', 'parent': 'dogs' },
  {id: 'rottweiler', 'parent': 'dogs' },
  {id: 'appaloosa', 'parent': 'horses' },
  {id: 'shetland', 'parent': 'horses' }
];

let makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter(c => c.parent === parent)
        .forEach(c =>
            node[c.id] = makeTree(categories, c.id))
    return node
}

console.log(
    JSON.stringify(
        makeTree(categories, null), 
        null, 2)
)