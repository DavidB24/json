
<script>


var persona = { "nombre" : "pepe", "edad":20,
				
				"coords": {"lat":10,"lng":-20}
};

var storage = window.localStorage;
var personaAGuardar = JSON.stringify(persona);

			//convertimos el JSON en un string
storage.setItem("persona", personaAGuardar);
var personaGuardada = storage.getItem("persona");
personaGuardada= JSON.parse(personaGuardada);

			//convertimos el string en JSON
console.log(personaGuardada.nombre);
console.log(personaGuardada.edad);
console.log(personaGuardada.coords.lat);

</script>

