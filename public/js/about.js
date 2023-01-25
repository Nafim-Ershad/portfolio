const skillCont = document.querySelector('.skills-known-container');
const skills = [{
    class: 'html',
    innerText: 'HTML',
}, {
    class: 'css',
    innerText: 'CSS',
}, {
    class: 'js',
    innerText: 'JavaScript',
}, {
    class: 'python',
    innerText: 'Python',
}]

function skillProducer(arr) {
    const divArr = arr.map(ele => {
        const div = document.createElement('div');
        div.className = `skill-${ele.class}`
        div.innerText = ele.innerText;
        return div;
    });

    divArr.forEach((el) => skillCont.append(el));
}


skillProducer(skills);