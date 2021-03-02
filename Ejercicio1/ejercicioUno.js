/**
 * Aqui dentro probar el codigo que quieran
 * 
 * Ariel Nuñez-Ejercicio 1 Simulacro
 */
function probarEjercicio()
{
	var mascotaIngresada;
	var tipoPelajeIngresado;
	var edadIngresada;
	var nombreIngresado;
	var razaIngresada;
	var pesoIngresado;
	var estadoClinicoIngresado;
	var temperaturaCorporalIngresada;
	var respuestaConfirm = true;

	//CONTADORES
	var contadorPerro = 0;
	var contadorGato = 0;
	var contadorOtro = 0;
	var contadorTodos = 0;

	//A)
	var perroMasPesado;

	//B)
	var porcentajeEnfermos;
	var contadorEnfermos = 0;

	//C)
	var nombreUltimoOtro;

	//D)
	var sinPeloMenorTemp;
	var tipoAnimalSinPeloMenorTemp;
	var flagSinPeloMenorTemp = false;

	//E)
	var promedioPerroTemp;
	var promedioGatoTemp;
	var promedioOtroTemp;
	var acumuladorPerroTemp = 0;
	var acumuladorGatoTemp = 0;
	var acumuladorOtroTemp = 0;

	//F)
	var contadorPerroGato = 0;
	var porcentajePerroGato;

	//G) 
	var contadorInternados = 0;
	var contadorAdopcion = 0;

	//H)
	var acumuladorPesosTotal = 0;
	var promedioPesosTotal;

	//I)
	var nombreGatoLivianoSinPelos;
	var razaGatoLivianoSinPelos;
	var gatoMasLiviano;
	
	do
	{
		mascotaIngresada = prompt ("Ingrese el tipo de mascota (perro / gato / otro)");
		mascotaIngresada = mascotaIngresada.toLowerCase(mascotaIngresada);
		while (mascotaIngresada != "perro" && mascotaIngresada != "gato" && mascotaIngresada != "otro")
		{
			mascotaIngresada = prompt ("Error, reingrese el tipo de mascota (perro / gato / otro)");
			mascotaIngresada = mascotaIngresada.toLowerCase(mascotaIngresada);
		}

		tipoPelajeIngresado = prompt ("Ingrese el tipo de pelaje (corto / largo / sin pelo)");
		tipoPelajeIngresado = tipoPelajeIngresado.toLowerCase(tipoPelajeIngresado);
		while (tipoPelajeIngresado != "corto" && tipoPelajeIngresado != "largo" && tipoPelajeIngresado != "sin pelo")
		{
			tipoPelajeIngresado = prompt ("Error, reingrese el tipo de pelaje (corto / largo / sin pelo)");
			tipoPelajeIngresado = tipoPelajeIngresado.toLowerCase(tipoPelajeIngresado);
		}

		edadIngresada = parseInt(prompt("Ingrese la edad de su mascota (solo números / entre 1 y 50)"));
		while (!(edadIngresada > 0 && edadIngresada < 51))
		{
			edadIngresada = parseInt(prompt("Error, reingrese la edad de su mascota (solo números / entre 1 y 50)"));
		}

		nombreIngresado = prompt ("Ingrese el nombre de su mascota (en una sola palabra)");
		while (isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt ("Error, reingrese el nombre de su mascota (en una sola palabra)");
		}

		razaIngresada = prompt ("Ingrese la raza de su mascota (en una sola palabra)");
		while (isNaN(razaIngresada) == false)
		{
			razaIngresada = prompt ("Error, reingrese la raza de su mascota (en una sola palabra)");
		}

		pesoIngresado = parseInt(prompt("Ingrese el peso de su mascota (solo números)"));
		while (!(pesoIngresado > 0))
		{
			pesoIngresado = parseInt(prompt("Error, reingrese el peso de su mascota (solo números)"));
		}

		estadoClinicoIngresado = prompt ("Ingrese el estado clínico de su mascota (enfermo / internado / adopcion");
		estadoClinicoIngresado = estadoClinicoIngresado.toLowerCase(estadoClinicoIngresado);
		while (estadoClinicoIngresado != "enfermo" && estadoClinicoIngresado != "internado" && estadoClinicoIngresado != "adopcion")
		{
			estadoClinicoIngresado = prompt ("Error, reingrese el estado clínico de su mascota (enfermo / internado / adopcion");
			estadoClinicoIngresado = estadoClinicoIngresado.toLowerCase(estadoClinicoIngresado);
		}

		temperaturaCorporalIngresada = parseInt(prompt("Ingrese la temperatura corporal de su mascota (entre 30 y 45)"));
		while (!(temperaturaCorporalIngresada > 29 && temperaturaCorporalIngresada < 46))
		{
			temperaturaCorporalIngresada = parseInt(prompt("Error, reingrese la temperatura corporal de su mascota (entre 30 y 45)"));
		}

		switch (mascotaIngresada) 
		{
			case "perro":
				contadorPerro++;
				acumuladorPerroTemp = acumuladorPerroTemp + temperaturaCorporalIngresada;
				if (contadorPerro == 1 || pesoIngresado > perroMasPesado)
				{
					perroMasPesado = pesoIngresado;
				}
				break;

			case "gato":
				contadorGato++;
				acumuladorGatoTemp = acumuladorGatoTemp + temperaturaCorporalIngresada;
				if (tipoPelajeIngresado == "sin pelo")
				{
					if (contadorGato == 1 || pesoIngresado < gatoMasLiviano)
					{
						gatoMasLiviano = pesoIngresado;
						nombreGatoLivianoSinPelos = nombreIngresado;
						razaGatoLivianoSinPelos = razaIngresada;
					}
				}
				break;

			case "otro":
				contadorOtro++;
				acumuladorOtroTemp = acumuladorOtroTemp + temperaturaCorporalIngresada;
				if (contadorOtro > 0)
				{
					nombreUltimoOtro = nombreIngresado
				}
				break;
		}
		contadorTodos = contadorPerro + contadorGato + contadorOtro;
		
		if(estadoClinicoIngresado == "enfermo")
		{
			contadorEnfermos++;
		}
		else
		{
			if(estadoClinicoIngresado == "internado")
			{
				contadorInternados++;
			}
			else
			{
				contadorAdopcion++;
			}
		}

		//D)
		if(tipoPelajeIngresado == "sin pelo")
		{
			if (flagSinPeloMenorTemp == false || temperaturaCorporalIngresada < sinPeloMenorTemp)
			{
				sinPeloMenorTemp = temperaturaCorporalIngresada;
				tipoAnimalSinPeloMenorTemp = mascotaIngresada;
				flagSinPeloMenorTemp = true;
			}
		}

		//H)
		acumuladorPesosTotal = acumuladorPesosTotal + pesoIngresado;

		respuestaConfirm = confirm ("¿Desea continuar ingresando?");
	}while (respuestaConfirm);

	//B)
	porcentajeEnfermos = contadorEnfermos * 100 / contadorTodos;

	//E)
	if (contadorPerro > 0)
	{
		promedioPerroTemp = acumuladorPerroTemp / contadorPerro;
	}

	if (contadorGato > 0)
	{
		promedioGatoTemp = acumuladorGatoTemp / contadorGato;
	}

	if (contadorOtro > 0)
	{
		promedioOtroTemp = acumuladorOtroTemp / contadorOtro;
	}
	
	if (promedioPerroTemp > promedioGatoTemp && promedioPerroTemp > promedioOtroTemp)
	{
		console.log ("E) El tipo de mascota Perro es el que tiene mayor promedio de temperatura corporal");
	}
	else
	{
		if (promedioGatoTemp > promedioOtroTemp && promedioGatoTemp > promedioPerroTemp)
		{
			console.log ("E) El tipo de mascota Gato es el que tiene mayor promedio de temperatura corporal");
		}
		else
		{
			if (promedioOtroTemp > promedioGatoTemp && promedioOtroTemp > promedioPerroTemp)
			{
				console.log ("E) El tipo de mascota Otros es el que tiene mayor promedio de temperatura corporal");
			}
		}
		
	}

	//F)
	contadorPerroGato = contadorPerro + contadorGato;
	porcentajePerroGato = contadorPerroGato * 100 / contadorTodos;

	//G)
	if (contadorEnfermos < contadorInternados && contadorEnfermos < contadorAdopcion)
	{
		console.log ("G) El estado clinico que tiene la menor cantidad de mascotas es Enfermos");
	}
	else
	{
		if(contadorInternados < contadorAdopcion && contadorInternados < contadorEnfermos)
		{
			console.log ("G) El estado clinico que tiene la menor cantidad de mascotas es Internados");
		}
		else
		{
			if(contadorAdopcion < contadorInternados && contadorAdopcion < contadorEnfermos)
			{
				console.log ("G) El estado clinico que tiene la menor cantidad de mascotas es Adopción");
			}
		}
		
	}

	//H)
	promedioPesosTotal = acumuladorPesosTotal / contadorTodos;
	//agregar mostrar si

	//MOSTRAR
	//A)
	if (contadorPerro > 0)
	{
	console.log ("A) El perro más pesado pesa: "+perroMasPesado);
	}
	//B)
	if (contadorEnfermos > 0)
	{
		console.log ("B) El porcentaje de enfermos sobre el total de mascotas es: "+porcentajeEnfermos);
	}
	//C)
	if (contadorOtro > 0)
	{
		console.log ("C) El nombre de la última mascota tipo Otro es: "+nombreUltimoOtro);
	}
	//D)
	if (sinPeloMenorTemp > 0)
	{
		console.log ("D) El animal sin pelo con menor temperatura corporal es un "+tipoAnimalSinPeloMenorTemp);
	}
	//E) YA LO MOSTRE ANTERIORMENTE
	//F)
	if (contadorPerroGato > 0)
	{
		console.log ("F) El porcentaje de gatos y perros sumados sobre el total es: "+porcentajePerroGato);
	}
	//G) YA LO MOSTRE ANTERIORMENTE
	//H)
	if (contadorTodos > 0)
	{
		console.log ("H) El promedio de kilos tomando todas las mascotas es: "+promedioPesosTotal);
	}
	//I)
	if (contadorGato > 0)
	{
		console.log ("I) El gato sin pelos más liviano lleva por nombre "+nombreGatoLivianoSinPelos+" y por raza "+razaGatoLivianoSinPelos);
	}

}