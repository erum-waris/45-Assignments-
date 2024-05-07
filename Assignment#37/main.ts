// Assignment  # 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Answer

function make_shirt( size:string ="large",message:string="I love Typescript"){
    console.log(`Making "${size}" size T-shirt with message "${message}" printed on it.`);
    
};
make_shirt(); // default size and message

make_shirt("medium");  //customized size and message default

make_shirt("small","I love python")  //custom size and message