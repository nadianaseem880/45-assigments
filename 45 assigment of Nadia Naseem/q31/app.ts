// //q31

// let users: string[]=[]
// if(users.length>0){
//     console.log("we have enough user")
// }
// else{
//     console.log("we need to find some users!")
// }
// //32 
// let current_users: string[]=[`ali`,`nida`,`nimra`,`rida`,`sonia`]
// let new_users:string[]=[`ali`]
// new_users.forEach((new_users)=>{
//     if(
//         current_users.some(
//             (current_users)=>current_users.toLowerCase() === new_users.toLowerCase()
//         )
//     ){
//     console.log(`${new_users}will need to entre new user name `)
//     }
// else{
//     console .log(`${new_users}is availble `)
// }
// });

// //q33
// let number:number[]=[1,2,3,4,5,6,7,8,9];
// let numbers=8;
// let ordinal:string;

// {
//     if( numbers  ===1){
//         ordinal=number+"st"
//     }
//     else if(numbers===2){
//         ordinal=number+"nd";
//     }
//     else if(numbers===3){
//         ordinal =numbers+"rd";
//     }
//     else {
//         ordinal =number+"th"
//     }
//     console.log(ordinal)
// }

// //34
// let pizza:string[]=[`supreme`,`pepproni`,`fajita`];
//     console.log("pizza names:")
    
//     for(let i=0;i<pizza.length;i++){
//         console.log(pizza[i])
//         console.log("i like "+pizza[i]+"pizza")
        
//     }
//     console.log("\nl really like pizza\n")


// //q35
// let animals: string[]=[`cat`,`dog`,`rat`]

// console.log('animals name:\n')

// for(let i=0 ; i<animals.length; i++){

//     console.log(`${animals[i]}`)
// }
// console.log("statments:\n")
// for(let i=0; i<animals.length;i++){
//     console.log(`\na ${animals[i].toLowerCase()}would make a great pet`)
// }
// console.log("\nany of these animals would make a great pet")

// // q36
// let sizeofshirt:string[]=[`small`,`large`,`medium`]
// let shirt1='this shirt is casual wearing'
// let shirt2='this shirt is formal wearing'
// let shirt3='this shirt is party wearing'

// function make_tshirt(){
//     let simpleFuncation=`this is a ${sizeofshirt[0]} short,and ${shirt1}`
//     console.log(simpleFuncation)
//     return simpleFuncation
// }
// let response=make_tshirt()
// console.log(response)

// //q37
// let size :string[]=[`medium`,`large`]

// let defaultmessage= "i love typescript"
//     let mediumShirt =(`size of shirt is:${(0)},${defaultmessage}`)
// //     let smallmShirt =(`size of shirt is:${(1)},${defaultmessage}`)
// //     let largeShirt =(`size of shirt is:large and i love painting`)
// //     let extralargeShirt =(`size of shirt is:extralarge and i love hiking`)

// //     function maketshirt(){
// //         let simpleFuncation=(mediumShirt)
// //         console.log(simpleFuncation)
// //         return simpleFuncation

// //     }
// //     let responses =maketshirt()




// // // 38
// // let karachi=" karachi is in pakistan"
// // let london=" london is in England"
// // let  newyork= " new york is in America"

// // function call_city(city:string,){
// //     console.log(city)
// // }
// // console.log(newyork)


// // //q39
// let lahore ="lahore ,pakistan"
// let istambul="istambul, turkey"
// let delhi    ="delhi , india"

// function city_names(city:string,){
//     console.log(city)
// }
// console .log(istambul)


// // 40

// // function make_album1(artistName:string,albumTitle:string){
// //     return {artistName,albumTitle}
// // }

// // let album0=make_album1("ali zaffar"," psl song")
// // let album2=make_album1("ali zaffar"," psl song")
// // let album3=make_album1("ali zaffar"," psl song")

// // console.log (album0)
// // console.log (album2)
// // console.log (album3)
// // it includes tracks number;

// function make_album2(artistName:string,albumTitle:string){
//     return {artistName,albumTitle}
// }

// let album5=make_album2("ali zaffar"," psl song")
// let album6=make_album2("ali zaffar"," psl song",)
// let album7=make_album2("ali zaffar"," psl song")

// console.log(album5)
// console.log(album6)
// console.log(album7)

// // q41
// let megician_list:string[]=[`david`,`nelson`,`john`,`louis`]

// for (let i=0;i<megician_list.length;i++){
//     function call_megician(list:string,){
//         console.log(list)
//     }
//     console.log(megician_list)
// }

// q42
// function show_magicians(magicians:string[]){
//     magicians.forEach(name => console.log(name));
// }
// function make_great(magicians:string[]){
//     return magicians.map( name =>`the Great ${name}`);
// }
// //define array of magicians names
// let magicians_name =[ "david","john","louis"];

// let great_magicians = make_great(magicians_name);
// console .log(great_magicians)
// show_magicians(great_magicians)
//q43


// function make_great2 (magicians:string[]) : string[] {
//     const greatMagicians:string[]=[];
//     for(let i=0;i<magicians.length;i++){
//         greatMagicians.push(magicians[i]+'the great');
// }
// return greatMagicians;
// }
//  const magicians3:string[] =  [ "david","john","louis"];
// const greatmagicians2:string[] =make_great2(magicians3);
// show_magicians:(magicians3);
// show_magicians:(greatmagicians2);
//q44

// function sandwich(...items:string[]):void{
//     console.log("sandwich order")
    
//      for (let i=0;items .length; i++){
//         console.log(`-${items[i]}`)

// }
// }
// console.log("enjoy your meal")

// sandwich( 'tomato','potato','onion')
// sandwich('chicken','mayo')
// sandwich('beef','cucumber')

//45 

// type car={
//     manufacture:string
//     model:string
//     [feature: string]:any
// }

// function createcar(manufacture: string,model:string,optional:Record <string,any>):car {
// return {
//     manufacture,
//     model,
//     ...optional
// }
// }
// const mycar:car=createcar("toyota","corolla",{color:"black",year :"2023"})
// console.log(mycar)



