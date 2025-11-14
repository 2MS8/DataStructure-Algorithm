let globalObject = {
  //this is first
  fStructure: {
    name: "mainName",
    folder: [
      {
        name: "folder1",
        folder: [
          {
            name: "folder1Child",
            folder: [
              {
                name: "folder1grandChild",
                folder: null,
                file: [],
              },
            ],
            file: ["example1.txt"],
          },
        ],
        file: ["example.txt"],
      },
      {
        name: "folder2",
        folder: [
          {
            name: "folder2Child",
            folder: null,
            file: ["example2.txt"],
          },
        ],
        file: ["example.txt"],
      },
    ],
    file: [],
  },
};

function createNewData(data, type, searchName) {
  if (data.name == searchName) {
    if (type == "folder") {
      data.folder.push({
        name: "myInsertedFolder",
        folder: null,
        file: [],
      });
    } else {
      data.file.push("mynewFile.txt");
    }
    return;
  } else {
    data.folder?.forEach((f) => {
      createNewData(f, type, searchName);
    });
    // createNewData(data.folder, type, searchName);
  }
}
createNewData(Object.values(globalObject)[0], "folder", "folder1");
createNewData(Object.values(globalObject)[0], "file", "myInsertedFolder");

console.log(JSON.stringify(globalObject), "after");

// manipulate(globalObject);
function manipulate(globalObject) {
  let mainData = Object.values(globalObject)[0];
  function printAll(mainData) {
    console.log(mainData.name);
    if (mainData.folder?.length) {
      mainData.folder.forEach((obj) => {
        printAll(obj);
      });
    }
    if (mainData.file.length) {
      mainData.file.forEach((e) => {
        console.log(e);
      });
    }
    if (!mainData.folder) {
      return;
    }
  }
  printAll(mainData);
}
