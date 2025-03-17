# Portfolio Project for CSE 134

## HW 5 Enhancement Write Up:
What I wanted to try was to add a way so I can link people to my website but have some method to hide some stuff (ie my keyboards or the sandbox pages). This would allow me to maintain 1 website but use it for dual purpose where I could use the same CSS and base templates but I could use it for both a more fun facing page and a more professional facing page. Fairly simple idea but works out pretty well. To access the hidden page you'll want to navigate to the page with [https://stocktoconnnnn.netlify.app/site.html](https://stocktoconnnnn.netlify.app/site.html) and if you wanted to view the full page then you would access it with [https://stocktoconnnnn.netlify.app/coolSite.html](https://stocktoconnnnn.netlify.app/coolSite.html). The other thing I wanted to add was a PDF viewer so I could link a resume. That was taken from here: https://pdfobject.com/guide/quick-start.html.

## HW 5 Enhancements (completed):
- Added the light mode dark mode feature to all pages (didn't do because lazy and didn't want to have to copy and paste)
- Made a JS file for the last enhancement to be made
    - I will make one more page that will immediately redirect to the home page but also put onto local storage a value of if information should hide or not
- Made beng spin whenever you hover the header h1 because I just like the spin animation and I want to make sure it's more obvious because it's silly. Might revert later since it's supposed to be more of an easter egg type of feature rather than in your face. 
- added the hyperlink CSS to all links to make it consistent across the board
- Project card is implement at the CSS level
- project-card custom element
    - local and remote reading for project card
- add hiding feature
    - hidden information will be personal information so I can hide my personal projects and stuff for my professional facing portfolio and it'll dynamically add back into the directories of the website. 
- Added a method to fiew the resume file. Pulled from [this repo](https://pdfobject.com/guide/quick-start.html)
- Filled out content for Personal Projects since the timing was right with the implementation of the the project-card custom element

## HW 5 Enhancements (TO BE DONE):
- Added project card to the Portfolio page as well (skipped for now since I'd basically have to set up a separate local storage since they can't mix)
- if I feel up to it at the end then modify the layout of the repo so that I can use ie /portfolio instead of /portfolio.html by adding folders and index.html to those