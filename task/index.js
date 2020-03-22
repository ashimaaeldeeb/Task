const fs = require('fs');
const uniqid = require('uniqid');
const inputs = process.argv.slice(2);

switch (inputs[0]) {
    case 'list':
        const data = fs.readFileSync('./data.json', 'utf8');
        console.log(JSON.parse(data));
        break;
    case 'add':
        if (!inputs[1]) {
            console.log("U should Enter the title that you want to add");
            break;
        }
        let arrayOfObjs = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        arrayOfObjs.push({
            id: uniqid(),
            title: inputs[1]
        });
        fs.writeFileSync('./data.json', JSON.stringify(arrayOfObjs));
        break;
    case 'edit':
        if (!(inputs[1] && inputs[2])) {
            console.log("U should Enter the id and title  that you want to Edit");
            break;
        }
        let arrayOfObjs2 = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        const found = arrayOfObjs2.find((element) => {
            return element.id === inputs[1]
        })
        if (!found) {
            console.log("error 404 ID is not found");
            break;
        }
        arrayOfObjs2.forEach(element => {
            if (element.id === inputs[1]) {
                element.title = inputs[2];
            }
        });
        fs.writeFileSync('./data.json', JSON.stringify(arrayOfObjs2));
        break;
    case 'delete':
        if (!inputs[1]) {
            console.log("U should Enter the id and title  that you want Delete");
            break;
        }
        let arrayOfObjs3 = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        const foundIndex = arrayOfObjs3.findIndex((element) => {
            return element.id === inputs[1];
        })
        if (foundIndex) {
            arrayOfObjs3.splice(foundIndex, 1);
            fs.writeFileSync('./data.json', JSON.stringify(arrayOfObjs3));
        } else {
            console.log("error 404 ID is not found");
        }
        break;
    default:
        console.log("Undefined Operation , defined operations are (list, add, edit , delete)");
        break;
}


// if (inputs[0] === 'list') {
//     let data = fs.readFileSync('./data.json', 'utf8');
//     console.log(JSON.parse(data));
// } else if (inputs[0] === 'add') {
//     if (inputs[1]) {
//         let arrayOfObjs = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
//         arrayOfObjs.push({
//             id: uniqid(),
//             title: inputs[1]
//         });
//         fs.writeFileSync('./data.json', JSON.stringify(arrayOfObjs));

//     } else {
//         console.log("U should Enter the title that you want add");

//     }
// } else if (inputs[0] === 'edit') {
//     if (inputs[1] && inputs[2]) {
//         let arrayOfObjs = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
//         let found = arrayOfObjs.find((element) => {
//             return element.id === inputs[1]
//         })
//         if (found) {
//             arrayOfObjs.forEach(element => {
//                 if (element.id === inputs[1]) {
//                     element.title = inputs[2];
//                 }
//             });
//             fs.writeFileSync('./data.json', JSON.stringify(arrayOfObjs));
//         } else {
//             console.log("error 404 ID is not found");
//         }
//     } else {
//         console.log("U should Enter the id and title  that you want Edit");
//     }

// } else if (inputs[0] === 'delete') {
//     if (inputs[1]) {
//         let arrayOfObjs = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
//         let found = arrayOfObjs.find((element) => {
//             return element.id === inputs[1]
//         })
//         if (found) {
//             for (let index = 0; index < arrayOfObjs.length; index++) {
//                 if (arrayOfObjs[index].id === inputs[1]) {
//                     arrayOfObjs.splice(index, 1);
//                 }
//             }
//             fs.writeFileSync('./data.json', JSON.stringify(arrayOfObjs));
//         } else {
//             console.log("error 404 ID is not found");
//         }
//     } else {
//         console.log("U should Enter the id and title  that you want Delete");
//     }
// } else {
//     console.log("Undefined Operation , defined operations are (list, add, edit , delete)");

// }