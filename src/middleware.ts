export function onRequest (req, next) {
    console.log(req);
    // // intercept data from a request
    // // optionally, modify the properties in `locals`
    // context.locals.user.name = "John Wick";
    // context.locals.welcomeTitle = () => {
    //     return "Welcome back " + locals.user.name;
    // };

    // return a Response or the result of calling `next()`
    return next();
}