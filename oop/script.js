class Render {
    #tagName;
    #tagAttribute;
    #tagAttributeContent;
    #tagTextContent;
    constructor(tagNameInput, tagAttributeInput, tagAttributeContentInput, tagTextConentInput) {
        this.#tagName = tagNameInput;
        this.#tagAttribute = tagAttributeInput;
        this.#tagAttributeContent = tagAttributeContentInput;
        this.#tagTextContent = tagTextConentInput;
    }
    print() {
        let newHTML = document.createElement(this.#tagName);
        let newTextNode = document.createTextNode(this.#tagTextContent);

        newHTML.setAttribute(this.#tagAttribute, this.#tagAttributeContent);
        newHTML.appendChild(newTextNode);

        this.#addEvent(newHTML);
    }
    #addEvent(htmlElement) { //newHTML
        htmlElement.addEventListener('click',()=>{ //newHTML.addEventListener()
            alert('hii');
        });
        document.body.appendChild(htmlElement); //newHTML -> BODY
    }
}
let newElement = new Render('div','class','happy','Click to enter');
newElement.print()