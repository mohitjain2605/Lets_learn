/**
 * What are the components?
 * 
 * React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
 * 
 */


function MyButton (){
    return <button>I am a Button!</button>
}

export default function MyApp(){
return (
  <div>
    <h1>Welcome the my Application</h1>
    <MyButton />
  </div>
);
}


/**
 * 
 * Adding Styles to Components
 * 
 * In React, you specify a CSS class with className. It works the same way as the HTML class attribute:
 * 
 * <img className="avatar" />
 */

/**
 * Displaying Data in Components
 * 
 * 
 * 
  return (
  <h1>
    {user.name}
  </h1>
  );

 * 
 */