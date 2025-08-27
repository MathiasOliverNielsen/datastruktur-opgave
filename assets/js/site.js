// write cool JS hwere!!
 const userSelect = document.getElementById("userSelect");
    const nameInput = document.getElementById("nameInput");
    const ageInput = document.getElementById("ageInput");
    const colorInput = document.getElementById("colorInput");
    const saveButton = document.getElementById("saveButton");

    // Event listener: vis data for valgt bruger
  function userSelectChange() {
      const selectedUser = userSelect.value;
       console.log('change user to: '+selectedUser);
      // TODO: Hent data fra localStorage og vis i formularen
      
    };

    // Event listener: gem data fra formularen
    saveButton.addEventListener("click", () => {
        console.log("save data");
        
      const selectedUser = userSelect.value;
      const name = nameInput.value;
      const age = ageInput.value;
      const color = colorInput.value;

      // TODO: Gem data i localStorage for den valgte bruger



    });

    // Vis data for første bruger ved load
    window.onload = userSelectChange;