***CV App Builder***

***Functionality*
User should be able to:
-Edit input fields with relevant information
-The state of the CV(the input fields) should be saved in between sessions (close or -update window)
-Add a new experience
-Remove an experience
-Update an existing experience
-Preview

-Reorder the experiences
-Export the CV as pdf
-Responsive

Data structure:
-(CV is parent class or maybe App.js in this case)
-Header (class component)
-Experience (class component): [id:,data:{}] 
-Preview

Questions:
One CV or library of CV:s? One CV to begin with.
Different kind of experiences? Just one type of experience, so just one big list of experiences using the same template
-Edit och save? När görs front-enden - när man trycker export? Preview-knapp? 

***Design***
-Header section - Title, name, contact information
-Main section - Experience list
-Buttons on top and bottom for exporting the CV

***extra functions***
format text in textarea (unordered list, bold)
sticky export button
Section title(ex "utbildning", "praktik")
Themes
When pressing delete experience, modal saying "are you sure you want to continue?"


*Commands to deploy*
#npm run build
#firebase deploy

push:
git push origin Main
git push --set-upstream origin deploy-visuals

sätta upp git på en annan dator
More info in the header - ex: github profile, birth date

TODO:
Back home button: as long as it's not active - show
Leilas CV should be default data.
Mobile responsiveness
Edit-knappen (bara på mindre skärmar, funkar på stor skärm)
custom styles

Lägg till spalt/kolumn med technologies (cirklar typ med språk/verktyg)

clean code: remove unused css classes from styles.css

refactor - props.id i Experience - lägga in den en gång bara högst upp

Extra:
Make it possible for different people to use it
