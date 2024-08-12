/**
 *2. <div id="parent">
 *    <div id="child">
 *       <h1>I'm h1 tag</h1>
 *    </div>
 * </div>
 *
 *
 * 3.<div id="parent">
 *    <div id="child">
 *       <h1>I'm h1 tag</h1>
 *       <h1>I'm h2 tag</h1>
 *    </div>
 * </div>
 *
 * 4.<div id="parent">
 *    <div id="child">
 *       <h1>I'm h1 tag</h1>
 *       <h1>I'm h2 tag</h1>
 *    </div>
 * <div id="child">
 *       <h1>I'm h1 tag</h1>
 *       <h1>I'm h2 tag</h1>
 *    </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

// 1.Single structure
// const heading = React.createElement("h1",{id:"heading", xyz:"abc"},"Hello world from React!");

// 2.Nested structure
// const parent =  React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement('h1', {}, "I'm an h1 tah")
//     )
// )

// // 3.Nested structure with siblings
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an h1 tah"),
//     React.createElement("h2", {}, "I'm an h2 tah"),
//   ])
// );


// 4.
const parent = React.createElement(
  "div",
  { id: "parent" },[
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm an h1 tah"),
        React.createElement("h2", {}, "I'm an h2 tah"),
      ]),
      React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm an h1 tah"),
        React.createElement("h2", {}, "I'm an h2 tah"),
      ])
  ]
  
);



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
root.render(parent);
