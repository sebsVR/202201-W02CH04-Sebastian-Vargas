function airlines() {

  let nombreUsuario = prompt('Escriba su nombre, por favor.');
  let disponibilidad = '';
	let costeMedio = 0;
	let escala = 'Los siguientes vuelos realizan escala:\n\n';
	let ultVuelos = `En este momento los únicos vuelos por efectuarse tienen como destino:\n\n`;
	let vuelos = [

    {	id: 00, hasta: 'Bilbao', desde: 'Barcelona', coste: 1600, escala: false	},

		{	id: 01, hasta: 'Nueva York', desde: 'Barcelona', coste: 700, escala: false	},

		{	id: 02, hasta: 'Los Ángeles', desde: 'Madrid', coste: 1100, escala: true	},

		{	id: 03, hasta: 'París', desde: 'Barcelona', coste: 210, escala: false	},

		{	id: 04, hasta: 'Roma', desde: 'Barcelona', coste: 150, escala: false	},

		{	id: 05, hasta: 'Londres', desde: 'Madrid', coste: 200, escala: false	},

		{	id: 06, hasta: 'Madrid', desde: 'Barcelona', coste: 90, escala: false	},

		{	id: 07, hasta: 'Tokio', desde: 'Madrid', coste: 1500, escala: true	},

		{	id: 08, hasta: 'Shanghái', desde: 'Barcelona', coste: 800, escala: true	},

		{	id: 09, hasta: 'Sídney', desde: 'Barcelona', coste: 150, escala: true	},

  ]

	for (let i = 0; i < vuelos.length; i++) {

		disponibilidad += `El vuelo con origen: ${vuelos[i].desde}, y destino: ${vuelos[i].hasta} \
tiene un coste de ${vuelos[i].coste} € y ${vuelos[i].escala ? 'realiza una escala' : 'no realiza ninguna escala'}.\n\n`;

		costeMedio += vuelos[i].coste;

		if (vuelos[i].escala) {escala += `	- Origen ${vuelos[i].desde} y destino ${vuelos[i].hasta}.\n\n`;}

		if (i > vuelos.length -6) {ultVuelos += `	- ${vuelos[i].hasta}.\n\n`;}

	}

	costeMedio = (costeMedio/vuelos.length - 1).toFixed(2);

    alert(`Bienvenido, ${nombreUsuario}.`);
    alert(`La disponibilidad de vuelos para hoy es la siguiente: \n\n${disponibilidad}`)
		alert(`El coste medio de los vuelos es de ${costeMedio} €.`);
		alert(escala);
		alert(ultVuelos);

}

airlines();