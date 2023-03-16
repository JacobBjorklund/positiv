let parent = document.querySelector('#parent')

document.querySelector('button').addEventListener('click', () => {
    let input = document.querySelector('input').value
    if (input > 0) {
        parent.innerHTML = `<h1 class="grön">Detta är positiv</h1>`
    } else if (input == 0) {
        parent.innerHTML = `<h1 class="blå">Detta är noll</h1>`
    } else {
        parent.innerHTML = `<h1 class="röd">Detta är negativ</h1>`
    }
})