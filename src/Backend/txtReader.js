/*
DEPRECATED

Reads text files and outputs strings
*/

export function readTxt(filename, callBack) {
  // console.log("in readTXT");
  const reader = new FileReader();

  reader.onload = (e) => {
    console.log(e.target.result);
  };
  reader.readAsText(filename);
}
