// const heading = React.createElement("h1",{
//     id:"heading",
// },"Aslamu alikum");
// const  root  = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

//////////////////////////////////////////////////////////////////////////////////////
//nested structure
/**
 * <div id= parent>
 *     <div id=children>
 *          <h1>I am h1</h1>
 *          <h2> I am h2</h2>
 *      </div>
 * </div>
 * 
 * 
 */
// const parent = React.createElement("div", { id: 'parent' },
//     React.createElement('div', { id: 'children' },
//         [React.createElement("h1", {}, "Aslamu alikum, it is nested"),

//         React.createElement("h2", {}, "Aslamu alikum, it is nested sibling")
//         ]
//     )
// )
/////////////////////////////////////////////////////////////////////////////////////

/**
 * <div id= parent>
 *     <div id=children>
 *          <h1>I am h1</h1>
 *          <h2> I am h2</h2>
 *      </div>
 * <div id=children2>
 *          <h1>I am h1</h1>
 *          <h2> I am h2</h2>
 *      </div>
 * </div>
 * 
 * 
 * */
const parent = React.createElement("div", { id: 'parent' },
    [React.createElement('div', { id: 'children' },
        [React.createElement("h1", {}, "Aslamu alikum, it is nested"),

        React.createElement("h2", {}, "Aslamu alikum, it is nested sibling")
        ]
    ),
    React.createElement('div', { id: 'children2' },
        [React.createElement("h1", {}, "Aslamu alikum, it is nested"),

        React.createElement("h2", {}, "Aslamu alikum, it is nested sibling")
        ]
    )]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root)
root.render(parent);
