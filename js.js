'use strict';

function readFile(input) {
  
  console.log(input);
  console.log(input.accept);

    let file = input.files[0];
    console.log(file);
    console.log(`File name: ${file.name}`);
    console.log(`Last modified: ${file.lastModified}`);
  
    let reader = new FileReader();
    console.log(reader);      
    reader.readAsText(file,"Windows-1251");
    // reader.readAsText(file,"UTF-8");
  
    reader.onload = function() {
      console.log(reader.result);           // Вывод в консоль
      txtArea.textContent = reader.result;  // Вывод на страницу сайта
    //   txtF.innerHTML = reader.result;
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };  
} // function readFile(input)
