//npm -global command comes with node
//npm --version
//local dependency -use only in this particular project
// npm i <package name> eg bootstrap
//global dependencies-use any project
//npm install -g <package name> 
// sudo npm install -g <package name> 
//package.json -manifest file(stores important info about project/package)
//manual approch (create package.json in the root ,ctreate properties etc)
//npm init (step by step ,press enter to skip) 
//npm init -y(everything default )
const _=require("lodash")
const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems);
