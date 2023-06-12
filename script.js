const labels = document.querySelectorAll('.forms-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idx)=>`<span style="transition-delay:${idx*150}ms">${letter}</span>`)
    .join('')
})
