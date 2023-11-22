function check_for_char()
{
  string_box = document.getElementById("string_box");
  char_box = document.getElementById("char_box");
  if(string_box.value == "" || char_box.value == "") return;
  if(char_box.value.length > 1) return;

  alert(`La chaîne [${string_box.value}] avoir une longueur de ${string_box.value.length}\n chaîne en majuscules: ${string_box.value.toUpperCase()}\n le personnage [${char_box.value}] is appearing ${string_box.value.count(char_box.value)} times`)
}

function check_for_string()
{
  console.log("entrer")
  string_box = document.getElementById("string_box");
  string_box2 = document.getElementById("string_box2");
  if(string_box.value == "" || string_box2.value == "") return;

  alert(`La chaîne [${string_box.value}] contient la sous-chaîne [${string_box2.value}] ${countSubstrings(string_box.value, string_box2.value)} fois`)
}

String.prototype.count=function(c) {
  var result = 0, i = 0;
  for(i;i<this.length;i++)if(this[i]==c)result++;
  return result;
};

const countSubstrings = (str, searchValue) => {
  let count = 0,
    i = 0;
  while (true) {
    const r = str.indexOf(searchValue, i);
    if (r !== -1) [count, i] = [count + 1, r + 1];
    else return count;
  }
};
