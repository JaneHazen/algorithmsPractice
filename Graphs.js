//SETUP:

let pc = {
    type: "pc",
    children: [{
        type: "outline",
        children: [{
            type: "image",
            children: []
        }]
    }, {
        type: "outline",
        children: [{
            type: "paragraph",
            children: []
        }, {
            type: "paragraph",
            children: []
        }]
    }]
};

let ps = {
    type: "paragraphstyle",
    children: []
};

pc.children[1].children[0].children.push(ps);
pc.children[1].children[1].children.push(ps);

/// TEST

function testStringify() {
    let expectedOutcome = [{
        "type": "pc",
        "children": [{
            "type": "outline",
            "children": [{
                "type": "image",
                "children": []
            }]
        }, {
            "type": "outline",
            "children": [{
                "type": "paragraph",
                "children": [{
                    "type": "paragraphstyle",
                    "children": []
                }]
            }, {
                "type": "paragraph",
                "children": [{
                    "type": "paragraphstyle",
                    "children": []
                }]
            }]
        }]
    }];

    let actualOutcome = stringify(pc);

    return expectedOutcome === actualOutcome;
}


// THERE HAS TO BE A WAY TO DO THIS RECURSIVELY:

// let json = []
// function stringify(ps){
//   if(!ps){
//     return;
//   }
//   if(!ps.children){
//     json.push({
//       "type":ps.type,
//       "children": ps.children
//     })
//   } else {
//     for(child of ps.children){
//       json.push({
//       "type":ps.type,
//       "children": stringify(child.children)
//       })
//     }
//   }
// }


// THIS IS STILL KIND OF RECURSIVE...
function stringify(pc) {
    if (!pc.children) {
        return [{
            "type": pc.type,
            "children": "undefined"
        }];
    }

    let parent = [];
    let children = [];
    let grandChildren = [];
    let greatGrandChildren = [];

    for (let i = 0; i < pc.children.length; i++) {
        if (pc.children[i].children.length > 0) {
            for (let j = 0; j < pc.children[i].children.length; j++) {
                let childrenWrapper = {};
                childrenWrapper[i] = pc.children[i].children[j];
                grandChildren.push(childrenWrapper);
                if (pc.children[i].children[j].children.length > 0) {
                    for (let k = 0; k < pc.children[i].children[j].children.length; k++) {
                        let grandChildrenWrapper = {};
                        grandChildrenWrapper[j] = pc.children[i].children[j].children[k];
                        greatGrandChildren.push(grandChildrenWrapper);
                    }
                }
            }
        }
        if (!!pc.children[i].type) {
            children.push(pc.children[i]);
        }
    }
    if (!!pc.type) {
        parent.push({
            type: pc.type,
            children: [],
        })
    }

    for (let i = 0; i < grandChildren.length; i++) {
        let key = Object.keys(grandChildren[i]);
        for (let j = 0; j < greatGrandChildren.length; j++) {
            let grandKey = Object.keys(greatGrandChildren[j]);
            if (key === grandKey) {
                grandChildren[i].children.push(greatGrandChildren);
            }
        }
    }

    for (let i = 0; i < children.length - 1; i++) {
        let target = undefined;
        for (let j = 0; j < grandChildren.length; j++) {
            target = grandChildren[j][i];
        }
        if (!!target) {
            children[i].children.push(target);
        }
    }

    parent[0].children.push(children);

    return parent;
}
