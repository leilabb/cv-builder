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
-Responsive

-Export the CV as pdf

Data structure:
-(CV is parent class or maybe App.js in this case)
-Header (class component)
-Experience (class component): [id:,data:{}] 
-Preview

***Design***
-Header section - Title, name, contact information
-Main section - Experience list
-Buttons on top and bottom for exporting the CV

***extra functions***
One CV or library of CV:s?
Different kind of experiences?
format text in textarea (unordered list, bold)
sticky export button
Section title(ex "utbildning", "praktik")
Themes
When pressing delete experience, modal saying "are you sure you want to continue?"
Make it possible for different people to use it
Add a backend

*Commands to deploy*
#npm run build
#firebase deploy

push:
git push origin Main
git push --set-upstream origin deploy-visuals

Tailwind watch command
npx tailwindcss -i ./src/style.css -o ./src/output.css --watch

TODO:
Knappfärger
Skriva readme

put preview etc in components fields
messy return in cv Builder. return component Preview with prop toggle.
<Preview toggle={toggle} previewExperienceData/>
<Experiences {allExperienceData}/>

Clean code

clean code: 
remove unused css classes from styles.css
refactor - props.id i Experience - lägga in den en gång bara högst upp

