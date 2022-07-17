const el = document.querySelector('.janela');
el.addEventListener('click', e => {
  el.classList.toggle('item');
})

function tex() {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.classList.add('a6');
  li.innerText = 'a6';
  li.style.color = 'red';

  ul.innerHTML += `
  <li class="a5">a5</li>
  `;
  ul.appendChild(li);
}
tex();