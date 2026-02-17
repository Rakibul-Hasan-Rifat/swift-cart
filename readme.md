# The difference between `null` and `undefined`
    - The null is a variable that has been intentionally kept empty. On the other hand, undefined is a variable where no value does exist.
    - Type of null is object ( it is awkward and unexpected) but the type of undefined is undefined.
    - A variable can never be null by default but a can be undefined where no value is stored.


# Use of `map` and `forEach` method
    - Both are used on array elements.
    - Map method is used when we need to return an array of something but forEach method is used when we need to do something on array or iterable elements.


# The difference between `==` and `===`
    - Double equals check just the values of both right and left sides. But the triple equals check weather the type and and value of both sides are same.


# Significance of `async/await` in JS
    - Doing something like asynchronous tasks in JavaScript such as data fetching etc., we use fetch. But to handle promises we should use either then/catch or async/await under try/catch blocks. Using 'then/catch' is ok, but sometimes it creates callback hell and beside that its syntax is a bit eye-hastle. On the contrary, 'async/await' is more readable and easy to use and in recent times it is used mostly.


# Block vs Function vs Global scopes
    - Block scopes is nothing but a place under any curly braces `{}` such as if block, switch block or just a curly braces
    - Funtional scope is a land under function. In a traditional function, we can get access of this, but in arrow function no access of `this` keyword.
    - When javascript engine runs in browser or in any other run times, it create a scope where all outer functions and variables are accessible and this is called Functional scope.