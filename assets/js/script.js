const encrypt = document.getElementById("encrypt");
const decrypt = document.getElementById("decrypt");
const copy = document.getElementById("copy");
const text = document.getElementById("ipt");
const ftext = document.getElementById("ft");

const reset = () => {
    text.value = " "; 
    text.style.height = "auto";
    ftext.innerHTML = ""; 
    ftext.placeholder = "Ningún mensaje fue encontrado";
};

let replace = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

encrypt.addEventListener('click', () => {
    let ipt = text.value.toLowerCase(); 

    if (ipt !== "") {
        function encrypt(newText) {
            for (let i = 0; i < replace.length; i++) {
                if (newText.includes(replace[i][0])) {
                    newText = newText.replaceAll(replace[i][0], replace[i][1]);
                }
            }
            return newText;
        }
        ftext.innerHTML = encrypt(ipt); 
    } else {
        ftext.innerHTML = "<p style='color:red;'>Ingrese texto a encriptar</p>";
       
    }
});

decrypt.addEventListener('click', () => {
    let ipt = text.value.toLowerCase();
    if (ipt !== "") {
        function decrypt(newText) {
            for (let i = 0; i < replace.length; i++) {
                if (newText.includes(replace[i][1])) {
                    newText = newText.replaceAll(replace[i][1], replace[i][0]);
                }
            }
            return newText;
        }
        ftext.innerHTML = decrypt(ipt);
    } else {
        ftext.innerHTML = "<p style='color:red;'>Ingrese texto a desencriptar</p>";
        
    }
});

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(ftext.innerHTML);
    reset();
});
