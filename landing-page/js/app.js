// get all sections in variable

const all_section = document.querySelectorAll('section');
const list_ul = document.querySelector('ul');
//creat a fragment
const fragment = document.createDocumentFragment();


// looping through the sections to get a single section

all_section.forEach(function (single_section, index) {

    //creat a li 
    const list = document.createElement('li');
    //creat links 
    const link = document.createElement('a');
    //storing data-nav value in variable
    let data_nav = single_section.getAttribute('data-nav');
    // storing the text in the data nav to link it with  ' a tag text'
    let data_nav_text = data_nav.textContent;
    //creat the text that it will be in sections
    let text = document.createTextNode(data_nav);

    // append the text to the link 
    link.appendChild(text);
    // append the link to li text 
    list.appendChild(link);
    //append the list to a fragment to get more performance;
    fragment.appendChild(list);

    // add event listener to the link to scroll his section
    link.addEventListener('click', function () {

        single_section.scrollIntoView({ behavior: "smooth" });
    });
    const offf = single_section.getBoundingClientRect().top;
    console.log(offf)
});
list_ul.appendChild(fragment);





//  get the position element with 'getBoundingClientRect()'  and make it top to the viewport
const offset = function (single_section2) {
    const rect = single_section2.getBoundingClientRect().top;
    return (rect);
};

const add = function (scrollY, single_section2) {

    if (scrollY) {
        // using add method to add the active class when scroll getin
        single_section2.classList.add('your-active-class');
        single_section2.style = "background-color: black;";

        //acsess to id numbers with slice method
        section_id = single_section2.id.slice(7, 8) - 1;
        // change the color of 'li' by accses to 'ul child' 
        list_ul.childNodes[section_id].style.cssText = 'background-color : red';

    };

};
// remove the active section
const remove = function (single_section2) {
    // using remove method to remove the active class when scroll get out
    single_section2.classList.remove('your-active-class');
    single_section2.style.cssText = 'black';
    //acsess to id numbers with slice method
    section_id = single_section2.id.slice(7, 8) - 1;
    // change the color of 'li' by accses to 'ul child' 
    list_ul.childNodes[section_id].style.cssText = 'background-color :purble';

};





//execute the the scroll function
document.addEventListener('scroll', function () {

    // looping through the sections to get a single section
    all_section.forEach(function (single_section2) {
        // store 'offset function ' in single_section and declere it in variable
        const offset_El = offset(single_section2);

        viewport = () => offset_El < 400 && offset_El >= -200;

        remove(single_section2);
        add(viewport(), single_section2);

    });
});















