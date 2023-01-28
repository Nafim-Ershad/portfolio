import skills from './__skillList.js';

const skillCont = document.querySelector('.skills-container');


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