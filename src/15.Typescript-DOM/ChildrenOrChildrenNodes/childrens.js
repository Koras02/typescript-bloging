var list = document.getElementById('list');
if (list) {
  console.log(list.children); // HTMLCollection (요소 노드만)
  console.log(list.childNodes); // NodeList (텍스트, 주석 포함 모든 노드)
}
