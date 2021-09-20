//callbacks,promises and asyc/await
// All the functionalities is for asynchronous programming 
//mimicing a blog post to clear concepts 


/* callback function : Passing a function over another function
 function x(y){
 }
 x(function y(){
 })
 */
const posts =[
    {title:'#1 Post',body:"Hi this is #1 Body Post"},
    {title:'#2 Post',body:"Hi this is #2 Body Post"}
]
function getPosts() {
    setTimeout(()=>{
        let output=" ";
        posts.forEach((post)=>{
            output+= `<li>${post.title}</li>`
        });
        document.body.innerHTML=output;
    },1000)
}
// This createPosts doesn't execute because getPosts took less time 
/*
function createPosts(){
    setTimeout( ()=> {
        posts.push({title:"#3 Post",body:"Hi this is #3 Body Post"})
    },2000 )
}
getPosts();

createPosts()
*/
// getPosts is now a callback function it means it'll only execute after createPosts work
/*
function createPosts(post,callback){
    setTimeout( ()=> {
        posts.push(post);
        callback()
    },2000)
}
createPosts({title:"#3 Post",body:"Hi this is #3 Body Post"},getPosts)
*/
//using promises 
// Promise is a better way of using callback 
//It is a place holder for eventually happening functions

function createPosts(post){
    return new Promise((resolve,reject) => {
        setTimeout( ()=> {
            posts.push(post);
            const error = true; 
            if(!error){
                resolve()
            }
            else{
                reject("Error:rejected")
            }
        },2000)
    })
}
/*
createPosts({title:"#3 Post",body:"Hi this is #3 Body Post"})
.then(getPosts)
.catch((err)=>{console.log(err)});
*/




const Promise1 = Promise.resolve("Resolved");
const Promise2 = 10;
const Promise3 = new Promise((resolve,reject)=>
setTimeout(resolve,2000,"Done")
);
const Promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
Promise.all([Promise1,Promise2,Promise3,Promise4]).then((values)=>{
    console.log(values)
})

//Async and await - It is a way to work with promises in a more clear way 
async  function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
fetchUsers()
