function opn() {
    try {
        window.open('http://127.0.0.1:3000');
    } catch (error) {
        console.log("Error in run.js file.");
    }
};