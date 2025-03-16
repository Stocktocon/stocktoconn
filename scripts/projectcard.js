class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['title', 'image', 'imagesm', 'description', 'link'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            div.cardwrapper {
                display: flex;
                
            }

            .loadbuttons {
                max-width:200px;
                height:auto;
            }

            .card {
                display: flex;
                flex-direction:column;
                max-width: 500px;
                min-width: 200px;
                width: 40dvw;
                height: auto;
                border: solid 3px black;
                border-radius: 1rem;
                padding: 1rem;
                margin: 1rem;
                background-color: rgb(17, 83, 31);
                box-shadow: 10px 10px 5px gray,
                inset 0 -3em 3em rgb(13, 63, 24);
                transition: transform 0.5s ease-in-out;
            }

            .card h2, .card p, .card a {
                width: 90%;
                margin: auto;
            }

            .card h2 {
                margin:auto auto 0.5rem;
                color: var(--background-color, white);
            }
            .card picture {
                width:95%;
                margin: auto;
            }

            .card p {
                margin: 0.5rem auto;
                color:var(--background-color, white);
            }
            .card picture * {
                width: 100%;
                max-width: 100%;
                height: auto;
                margin: auto;
            }

            .card:hover {
                transform: scale(1.05);
            }
            a {
                /*fixing back the link coloring*/
                color: var(--link-color);
                transition: color 0.25s ease-in-out;
            }
            a:hover {
                color: var(--my-orange, orange);
                text-decoration: underline;
            }
        </style>
            <div class="card">
                <h2>${this.getAttribute('title') || 'Takodachi'}</h2>
                <picture>
                    <source media="(max-width:500px)" srcset="${this.getAttribute('imagesm') || '/imgs/tako.png'}">
                    <source media="(min-width:499px)" srcset="${this.getAttribute('image') || '/imgs/tako.png'}">
                    <img src="${this.getAttribute('imagesm') || 'placeholder.jpg'}" alt="${this.getAttribute('title') || '/imgs/tako.png'}">
                </picture>
                <p>${this.getAttribute('description') || 'If you see takodachi then the projects haven\'t been loaded.'}</p>
                <a href="${this.getAttribute('link') || '#'}">Learn More</a>
            </div>
        `;
    }
}

customElements.define('project-card', ProjectCard);

// Function to load projects from localStorage
function loadLocalProjects() {
    const container = document.querySelector('.cardwrapper');
    console.log(container);
    container.innerHTML = '';

    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    if(projects.length < 1) {
        const card = document.createElement('project-card');
        card.setAttribute('title', "sad tako");
        card.setAttribute('image', "/imgs/sadtako.png");
        card.setAttribute('imagesm', "/imgs/sadtako.png");
        card.setAttribute('description', "No projects stored locally. That makes the takodachi sad.");
        card.setAttribute('link', "#");
        container.appendChild(card);
    } else {
        projects.forEach(project => {
            const card = document.createElement('project-card');
            card.setAttribute('title', project.title);
            card.setAttribute('image', project.image);
            card.setAttribute('imagesm', project.imagesm);
            card.setAttribute('description', project.description);
            card.setAttribute('link', project.link);
            container.appendChild(card);
        });
    }
}

function resetLocalProjects() {
    projects = [];
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Function to load projects from a remote JSON file
async function loadRemoteProjects() {
    const container = document.querySelector('.cardwrapper');
    container.innerHTML = '';
    const url = 'https://my-json-server.typicode.com/Stocktocon/cse134-cloud-db/projects';
    
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`Reponse status: ${response.status}`)
        }
        const projects = await response.json();
        console.log(projects);
        projects.forEach(project => {
            const card = document.createElement('project-card');
            card.setAttribute('title', project.title);
            card.setAttribute('image', project.image);
            card.setAttribute('imagesm', project.imagesm);
            card.setAttribute('description', project.description);
            card.setAttribute('link', project.link);
            container.appendChild(card);
        });
        localStorage.setItem('projects', JSON.stringify(projects));
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

// Event listeners for buttons
document.getElementById('load-local').addEventListener('click', loadLocalProjects);
document.getElementById('load-remote').addEventListener('click', loadRemoteProjects);
document.getElementById('reset-local').addEventListener('click', resetLocalProjects);