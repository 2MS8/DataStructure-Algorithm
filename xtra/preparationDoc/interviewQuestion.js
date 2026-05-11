// console.log("A");
// setTimeout(() => console.log("B"), 0); // Macro
// Promise.resolve()

//   .then(() => console.log("C"))

//   .then(() => {

//     setTimeout(() => console.log("D"), 0);

//     console.log("E");

//   });
// queueMicrotask(() => console.log("F"));
// console.log("G");

// async function foo() {

//   console.log(1);

//   await bar();

//   console.log(2);

// }

// async function bar() {

//   console.log(3);

// }

// console.log(4);

// foo();

// console.log(5);

// const family = {
//   name: 'ramesh',
//   age: 80,
//   child: [
//     {
//       name: 'ganesh',
//       age: 58,
//       child: [
//         {
//           name: 'suresh',
//           age: 33,
//           child: [
//             {
//               name: 'harish',
//               age: 11,
//               child: []
//             }
//           ]
//         },
//         {
//           name: 'rakesh',
//           age: 26,
//           child: []
//         }
//       ]
//     },
//     {
//       name: 'manish',
//       age: 75,
//       child: [
//         {
//           name: 'rohit',
//           age: 49,
//           child: [
//             {
//               name: 'akash',
//               age: 22,
//               child: []
//             },
//             {
//               name: 'rajiv',
//               age: 18,
//               child: []
//             }
//           ]
//         },
//         {
//           name: 'manoj',
//           age: 40,
//           child: []
//         }
//       ]
//     }
//   ]
// }

// 2 Tables
// AUTHORS - id  |  name
// BLOGS - id | content | title | author_id

// Write the SQL Query to return the list of autors with their no_of_blogs

// author_id | name | no_of_blogs

// author_id	name	no_of_blogs
// 1	Pratham	2
// 2	Riya	1
// 3	Aman	0

// author_id	name	no_of_blogs
// 1	Pratham	2
// 2	Riya	1

// id	name
// 1	Pratham
// 2	Riya
// 3	Aman

// id	title	author_id
// 101	NodeJS	1
// 102	React	1
// 103	SQL	2

// author_id	name	no_of_blogs
// 1	Pratham	2
// 2	Riya	1

// author_id	name	no_of_blogs
// 1	Pratham	2
// 2	Riya	1
// 3	Aman	0

// select id as author_id,name,count(blogs.id) as no_of_blogs from authors join blogs on authors.id == blogs.author_id group by blogs.author_id order by blogs.no_of_blogs;
