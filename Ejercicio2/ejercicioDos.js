/**
 * Aqui dentro probar el codigo que quieran
 * 
 * Ariel Nuñez -Ejercicio 2 Simulacro
 */
function probarEjercicio()
{
	var continenteIngresado;
	var nombrePaisIngresado;
	var cantidadHabitantesIngresado;
	var nivelPobresaIngresado;
	var temperaturaMinimaIngresada;

	//A y B
	var contadorTempPares = 0;
	var contadorTempImparesEuropa = 0;
	var restoTemp;

	//C)
	var nombrePaisMenosHab;
	var paisMenosHab;
	var flagPaisMenosHab = false;

	//D y E
	var contadorPaisesSuperan = 0;
	var contadorPaisesAmericaMenos = 0;

	//F)
	var promedioHabitantesTotal;
	var acumuladorHabitantes = 0;

	//G)
	var promedioHabitantesSuperan;
	var acumuladorHabitantesPaisesSuperan = 0;

	//H)
	var tempMinima;
	var nombrePaisTempMinima;
	var flagTempMinima = false;

	//I)
	var acumuladorHabAmerica = 0;
	var acumuladorHabAsia = 0;
	var acumuladorHabEuropa = 0;
	var acumuladorHabAfrica = 0;
	var acumuladorHabOceania = 0;

	for (var i = 1; i<= 5; i++)
	{
		continenteIngresado = prompt ("Ingrese un continente (america / asia / europa / africa / oceania)");
		continenteIngresado = continenteIngresado.toLowerCase (continenteIngresado);
		while (continenteIngresado != "america" && continenteIngresado != "asia" && continenteIngresado != "europa" && continenteIngresado != "africa" && continenteIngresado != "oceania")
		{
			continenteIngresado = prompt ("Error, reingrese un continente (america / asia / europa / africa / oceania)");
			continenteIngresado = continenteIngresado.toLowerCase (continenteIngresado);
		}

		nombrePaisIngresado = prompt ("Ingrese el nombre de un país (no se permiten números)");
		while (isNaN(nombrePaisIngresado) == false)
		{
			nombrePaisIngresado = prompt ("Error, reingrese el nombre de un país (no se permiten números)");
		}

		cantidadHabitantesIngresado = parseInt (prompt("Ingrese la cantidad de habitantes en millones (entre 1 y 7000 millones)"));
		while (!(cantidadHabitantesIngresado > 0 && cantidadHabitantesIngresado < 7001))
		{
			cantidadHabitantesIngresado = parseInt (prompt("Error, reingrese la cantidad de habitantes en millones (entre 1 y 7000 millones)"));
		}

		nivelPobresaIngresado = prompt ("Ingrese el nivel de pobresa (pobre / rico / muy rico)--(en caso de ser Europa no se permite ingresar pobre)");
		while (nivelPobresaIngresado != "pobre" && nivelPobresaIngresado != "rico" && nivelPobresaIngresado != "muy rico" || (continenteIngresado == "europa" && nivelPobresaIngresado == "pobre"))
		{
			nivelPobresaIngresado = prompt ("Error, reingrese el nivel de pobresa (pobre / rico / muy rico)--(en caso de ser Europa no se permite ingresar pobre)");
		}

		temperaturaMinimaIngresada = parseInt(prompt("Ingrese la temperatura mínima que se registra (entre -50 y 50)"));
		while (!(temperaturaMinimaIngresada > -51 && temperaturaMinimaIngresada < 51))
		{
			temperaturaMinimaIngresada = parseInt(prompt("Error, reingrese la temperatura mínima que se registra (entre -50 y 50)"));
		}

		acumuladorHabitantes = acumuladorHabitantes + cantidadHabitantesIngresado;
		//A Y B
		restoTemp = temperaturaMinimaIngresada % 2;

		if (restoTemp == 0)
		{
			contadorTempPares++;
		}
		else
		{
			if (restoTemp == 1 && continenteIngresado == "europa")
			{
				contadorTempImparesEuropa++;
			}
		}

		//C
		if (flagPaisMenosHab == false || cantidadHabitantesIngresado < paisMenosHab)
		{
			paisMenosHab = cantidadHabitantesIngresado;
			nombrePaisMenosHab = nombrePaisIngresado;
			flagPaisMenosHab = true;
		}
		
		//D , E y G
		if(temperaturaMinimaIngresada > 40)
		{
			contadorPaisesSuperan++;
			acumuladorHabitantesPaisesSuperan = acumuladorHabitantesPaisesSuperan + cantidadHabitantesIngresado;
		}
		else
		{
			if (temperaturaMinimaIngresada < 0 && continenteIngresado == "america")
			{
				contadorPaisesAmericaMenos++;
			}
		}

		//H
		if (flagTempMinima == false || temperaturaMinimaIngresada < tempMinima)
		{
			tempMinima = temperaturaMinimaIngresada;
			nombrePaisTempMinima = nombrePaisIngresado;
			flagTempMinima = true;
		}

		//I)
		switch (continenteIngresado) 
		{
			case "america":
				acumuladorHabAmerica = acumuladorHabAmerica + cantidadHabitantesIngresado;
				break;

			case "asia":
				acumuladorHabAsia = acumuladorHabAsia + cantidadHabitantesIngresado;
				break;

			case "europa":
				acumuladorHabEuropa = acumuladorHabEuropa + cantidadHabitantesIngresado;
				break;

			case "africa":
				acumuladorHabAfrica = acumuladorHabAfrica + cantidadHabitantesIngresado;
				break;

			case "oceania":
				acumuladorHabOceania = acumuladorHabOceania + cantidadHabitantesIngresado;
				break;
		}

	}

	//F)
	promedioHabitantesTotal = acumuladorHabitantes / i;

	//G)
	promedioHabitantesSuperan = acumuladorHabitantesPaisesSuperan / contadorPaisesSuperan;

	//I)
	if (acumuladorHabAmerica > acumuladorHabAsia && acumuladorHabAmerica > acumuladorHabEuropa && acumuladorHabAmerica > acumuladorHabAfrica && acumuladorHabAmerica > acumuladorHabOceania)
	{
		console.log ("I) El continente con más habitantes es America");
	}
	else
	{
		if(acumuladorHabAsia > acumuladorHabEuropa && acumuladorHabAsia > acumuladorHabAfrica && acumuladorHabAsia > acumuladorHabOceania)
		{
			console.log ("I) El continente con más habitantes es Asia");
		}
		else
		{
			if (acumuladorHabEuropa > acumuladorHabAfrica && acumuladorHabEuropa > acumuladorHabOceania)
			{
				console.log ("I) El continente con más habitantes es Europa");
			}
			else
			{
				if (acumuladorHabAfrica > acumuladorHabOceania)
				{
					console.log ("I) El continente con más habitantes es Africa");
				}
				else
				{
					console.log ("I) El continente con más habitantes es Oceanía");
				}
			}
		}
	}

	//MOSTRAR
	//A)
	console.log ("A) La cantidad de temperaturas pares es: "+contadorTempPares);
	//B)
	console.log ("B) La cantidad de temperaturas impares de Europa es: "+contadorTempImparesEuropa);
	//C)
	console.log ("C) El nombre del pais con menos habitantes es: "+nombrePaisMenosHab);
	//D)
	console.log ("D) La cantidad de paises que superan los 40 grados es: "+contadorPaisesSuperan);
	//E)
	console.log ("E) La cantidad de paises de America que tienen menos de 0 grados es: "+contadorPaisesAmericaMenos);
	//F)
	console.log ("F) El promedio de habitantes entre los paises ingresados es: "+promedioHabitantesTotal+" millones");
	//G)
	console.log ("G) El promedio de habitantes entre los paises que superan los 40 grados es: "+promedioHabitantesSuperan+" millones");
	//H)
	console.log ("H) La temperatura minima ingresada es "+tempMinima+" y pertenece a "+nombrePaisTempMinima);
	//I) MOSTRADO ANTERIORMENTE
}