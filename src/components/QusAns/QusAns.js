import React from 'react';

const QusAns = () => {
    return (
        <div className='qus-ans text-start p-5'>
            <h4>Props vs State</h4>
            <p>
            Props:<br></br>
•	cannot be changed
•	allowing React to perform fast reference checks.
•	are used to transmit data from the view-controller to the client
•	Component at the very top
•	have a higher level of success
•	this is the mechanism should use to communicate data to the child components. <br></br>       
State:<br></br>
•	View-controllers are an ideal place to keep this information.
•	Component at the pinnacle
•	has the ability to be changed
•	has a poorer track record
•	child components should not be able to access
•	use props instead of handing it down

            </p>
            <br></br>
            <h4>How react works</h4><br></br>
            <p>
            We can think of React as a declarative programming language, which makes it easier to think about our application. When our data changes, React automatically updates and renders the appropriate component. It creates simple views for each state of our app. Our code will be more predictable and easier to troubleshoot when using the declarative view.
Each component in a React app is in charge of rendering a small, reusable chunk of HTML. To build complex applications out of simple building blocks, components can be nested within each other. It is possible for a component to store a variable corresponding to the currently open tab in its internal state.

            </p>
        </div>
    );
};

export default QusAns;