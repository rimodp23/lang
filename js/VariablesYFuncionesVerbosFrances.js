var unasPalabras = [];
var cantidadPalabras = 0;
var palabra;
var elnumeroRandom;
var elnumeroRandomOtros;
var seleccionadoNativo = 0; //0 nativo ; 1 Nuevo
var cantidadRadioButton = 5;
	
$(function () {
	Load();
});	

function Load()
{
	SeteoVariablesGlobales();
	document.getElementById("rbtn1").checked = 1;
	PracticarUnoNuevo();
}	
function SeteoVariablesGlobales()
{
	//document.getElementById("lblResultado").style.visibility = "hidden";
	//$("#lblEstado").text("0/1");							
palabra = { PalabraIngles:"	say	", PalabraNativa:"	dis	", PalabraTraducida:"	decir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	power	", PalabraNativa:"	pouvoir	", PalabraTraducida:"	poder	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	take	", PalabraNativa:"	prends	", PalabraTraducida:"	tomar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	can	", PalabraNativa:"	pouvez	", PalabraTraducida:"	podeís	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	possesses	", PalabraNativa:"	possède	", PalabraTraducida:"	tiene	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	laid	", PalabraNativa:"	pose	", PalabraTraducida:"	plantear	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	doors	", PalabraNativa:"	portes	", PalabraTraducida:"	puertas	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	to carry	", PalabraNativa:"	porter	", PalabraTraducida:"	llevar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	door	", PalabraNativa:"	porte	", PalabraTraducida:"	puerta	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	rain	", PalabraNativa:"	pleut	", PalabraTraducida:"	lluvias	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	photographs	", PalabraNativa:"	photographies	", PalabraTraducida:"	fotografías	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	photography	", PalabraNativa:"	photographie	", PalabraTraducida:"	fotografía	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	propose	", PalabraNativa:"	propose	", PalabraTraducida:"	ofertas	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	proposed	", PalabraNativa:"	proposes	", PalabraTraducida:"	propuesto	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	can	", PalabraNativa:"	peux	", PalabraTraducida:"	puedo	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	can	", PalabraNativa:"	peut	", PalabraTraducida:"	puede	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	lose	", PalabraNativa:"	perd	", PalabraTraducida:"	pierde	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	think	", PalabraNativa:"	penser	", PalabraTraducida:"	pensar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	speak	", PalabraNativa:"	parles	", PalabraTraducida:"	hablar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	talk	", PalabraNativa:"	parler	", PalabraTraducida:"	hablar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	speak	", PalabraNativa:"	parle	", PalabraTraducida:"	habla	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	opens	", PalabraNativa:"	ouvre	", PalabraTraducida:"	abre	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	have	", PalabraNativa:"	ont	", PalabraTraducida:"	tener	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	offers	", PalabraNativa:"	offres	", PalabraTraducida:"	ofertas	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	offer	", PalabraNativa:"	offre	", PalabraTraducida:"	oferta	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	to clean	", PalabraNativa:"	nettoyer	", PalabraTraducida:"	Limpiar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	cleans	", PalabraNativa:"	nettoie	", PalabraTraducida:"	limpia	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	snow	", PalabraNativa:"	neige	", PalabraTraducida:"	nieve	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	motivates	", PalabraNativa:"	motive	", PalabraTraducida:"	motiva	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	watches	", PalabraNativa:"	montres	", PalabraTraducida:"	relojes	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	to show	", PalabraNativa:"	montrer	", PalabraTraducida:"	mostrar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	watch	", PalabraNativa:"	montre	", PalabraTraducida:"	Reloj	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	dies	", PalabraNativa:"	meurt	", PalabraTraducida:"	muere	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	die	", PalabraNativa:"	meurs	", PalabraTraducida:"	morir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	die	", PalabraNativa:"	meurent	", PalabraTraducida:"	morir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	put	", PalabraNativa:"	mettent	", PalabraTraducida:"	poner	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	puts	", PalabraNativa:"	met	", PalabraTraducida:"	puts	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	deserved	", PalabraNativa:"	mérite	", PalabraTraducida:"	mérito	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	steps	", PalabraNativa:"	marches	", PalabraTraducida:"	pasos	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	to walk	", PalabraNativa:"	marcher	", PalabraTraducida:"	caminar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	look at	", PalabraNativa:"	regarde	", PalabraTraducida:"	mira	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	look	", PalabraNativa:"	regarder	", PalabraTraducida:"	mirar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	let's look	", PalabraNativa:"	regardons	", PalabraTraducida:"	mirar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	walk	", PalabraNativa:"	marchent	", PalabraTraducida:"	para caminar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	walk	", PalabraNativa:"	marche	", PalabraTraducida:"	para caminar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	eat	", PalabraNativa:"	mangez	", PalabraTraducida:"	comer	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	eat	", PalabraNativa:"	manges	", PalabraTraducida:"	comer	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	eat	", PalabraNativa:"	manger	", PalabraTraducida:"	comer	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	let's eat	", PalabraNativa:"	mangeons	", PalabraTraducida:"	comer	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	eat	", PalabraNativa:"	mangent	", PalabraTraducida:"	comer	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	eat	", PalabraNativa:"	mange	", PalabraTraducida:"	comer	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	bed	", PalabraNativa:"	lit	", PalabraTraducida:"	cama	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	read	", PalabraNativa:"	lisons	", PalabraTraducida:"	leer	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	read	", PalabraNativa:"	lis	", PalabraTraducida:"	lirio	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	read	", PalabraNativa:"	lisent	", PalabraTraducida:"	leer	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	read	", PalabraNativa:"	lire	", PalabraTraducida:"	leer	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	wash	", PalabraNativa:"	lave	", PalabraTraducida:"	lava	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	spear	", PalabraNativa:"	lance	", PalabraTraducida:"	lanza	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	play	", PalabraNativa:"	jouer	", PalabraTraducida:"	Jugar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	invite	", PalabraNativa:"	inviter	", PalabraTraducida:"	invitar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	interested	", PalabraNativa:"	intéresse	", PalabraTraducida:"	interesado	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	Grill	", PalabraNativa:"	griller	", PalabraTraducida:"	parrilla	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	to taste	", PalabraNativa:"	goûter	", PalabraTraducida:"	merendar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	won	", PalabraNativa:"	gagne	", PalabraTraducida:"	victorias	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	make	", PalabraNativa:"	font	", PalabraTraducida:"	hacer	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	seized	", PalabraNativa:"	saisis	", PalabraTraducida:"	apoderado	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	grasp	", PalabraNativa:"	saisissent	", PalabraTraducida:"	agarrar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	grab	", PalabraNativa:"	saisissez	", PalabraTraducida:"	entrar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	let's grab	", PalabraNativa:"	saisissons	", PalabraTraducida:"	comprensión	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	grabs	", PalabraNativa:"	saisit	", PalabraTraducida:"	capturas	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	know	", PalabraNativa:"	sais	", PalabraTraducida:"	saber	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	knows	", PalabraNativa:"	sait	", PalabraTraducida:"	saber	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	ends	", PalabraNativa:"	finit	", PalabraTraducida:"	extremos	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	farm	", PalabraNativa:"	ferme	", PalabraTraducida:"	firme	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	must	", PalabraNativa:"	faut	", PalabraTraducida:"	necesario	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	do	", PalabraNativa:"	fait	", PalabraTraducida:"	hecho	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	do	", PalabraNativa:"	faites	", PalabraTraducida:"	Haz	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	let's do	", PalabraNativa:"	faisons	", PalabraTraducida:"	hacer	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	do	", PalabraNativa:"	fais	", PalabraTraducida:"	hacer	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	TO DO	", PalabraNativa:"	faire	", PalabraTraducida:"	hacer	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	save	", PalabraNativa:"	sauver	", PalabraTraducida:"	guardar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	know	", PalabraNativa:"	savent	", PalabraTraducida:"	saber	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	know	", PalabraNativa:"	savoir	", PalabraTraducida:"	saber	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	be	", PalabraNativa:"	être	", PalabraTraducida:"	estar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	are	", PalabraNativa:"	êtes	", PalabraTraducida:"	son	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	East	", PalabraNativa:"	est	", PalabraTraducida:"	es	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	are	", PalabraNativa:"	es	", PalabraTraducida:"	eS	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	between	", PalabraNativa:"	entre	", PalabraTraducida:"	entre	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	hear	", PalabraNativa:"	entends	", PalabraTraducida:"	escuchar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	hears	", PalabraNativa:"	entend	", PalabraTraducida:"	oye	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	take away	", PalabraNativa:"	emmener	", PalabraTraducida:"	llevar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	write	", PalabraNativa:"	écrivent	", PalabraTraducida:"	escribir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	writing	", PalabraNativa:"	écrit	", PalabraTraducida:"	escrito	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	write	", PalabraNativa:"	écris	", PalabraTraducida:"	escribir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	to write	", PalabraNativa:"	écrire	", PalabraTraducida:"	escribir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	sleeps	", PalabraNativa:"	dort	", PalabraTraducida:"	duerme	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	sleep	", PalabraNativa:"	dors	", PalabraTraducida:"	sueño	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	let's sleep	", PalabraNativa:"	dormons	", PalabraTraducida:"	sueño	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	sleep	", PalabraNativa:"	dormir	", PalabraTraducida:"	dormir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	are sleeping	", PalabraNativa:"	dorment	", PalabraTraducida:"	sueño	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	give	", PalabraNativa:"	donner	", PalabraTraducida:"	dar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	given	", PalabraNativa:"	donne	", PalabraTraducida:"	da	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	must	", PalabraNativa:"	doivent	", PalabraTraducida:"	deben	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	must	", PalabraNativa:"	doit	", PalabraTraducida:"	necesario	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	have to	", PalabraNativa:"	dois	", PalabraTraducida:"	tener	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	said	", PalabraNativa:"	dit	", PalabraTraducida:"	dicho	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	say	", PalabraNativa:"	disent	", PalabraTraducida:"	decir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	take	", PalabraNativa:"	prendre	", PalabraTraducida:"	tomar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	say	", PalabraNativa:"	dire	", PalabraTraducida:"	decir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	dinner	", PalabraNativa:"	dîner	", PalabraTraducida:"	cena	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	becomes	", PalabraNativa:"	devient	", PalabraTraducida:"	se convierte en	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	are	", PalabraNativa:"	sommes	", PalabraTraducida:"	somos	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	become	", PalabraNativa:"	deviens	", PalabraTraducida:"	convertirse en	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	are	", PalabraNativa:"	sont	", PalabraTraducida:"	están	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	wish	", PalabraNativa:"	souhaite	", PalabraTraducida:"	desear	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	become	", PalabraNativa:"	deviennent	", PalabraTraducida:"	convertirse en	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	must	", PalabraNativa:"	devez	", PalabraTraducida:"	necesario	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	let's become	", PalabraNativa:"	devenons	", PalabraTraducida:"	convertirse en	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	depends	", PalabraNativa:"	dépend	", PalabraTraducida:"	depende	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	ask	", PalabraNativa:"	demander	", PalabraTraducida:"	pedir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	request	", PalabraNativa:"	demande	", PalabraTraducida:"	solicitud	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	am	", PalabraNativa:"	suis	", PalabraTraducida:"	soy	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	follows	", PalabraNativa:"	suit	", PalabraTraducida:"	siguiente	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	lunch	", PalabraNativa:"	déjeuner	", PalabraTraducida:"	desayuno	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	kitchens	", PalabraNativa:"	cuisines	", PalabraTraducida:"	cocinas	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	kitchen	", PalabraNativa:"	cuisine	", PalabraTraducida:"	cocina	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	cost	", PalabraNativa:"	coûte	", PalabraTraducida:"	costes	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	course	", PalabraNativa:"	cours	", PalabraTraducida:"	curso	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	let's run	", PalabraNativa:"	courons	", PalabraTraducida:"	corrida	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	cut	", PalabraNativa:"	couper	", PalabraTraducida:"	cortar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	cut	", PalabraNativa:"	coupe	", PalabraTraducida:"	cortada	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	keep on going	", PalabraNativa:"	continue	", PalabraTraducida:"	continúa	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	contains	", PalabraNativa:"	contient	", PalabraTraducida:"	contiene	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	consists	", PalabraNativa:"	consiste	", PalabraTraducida:"	es	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	knows	", PalabraNativa:"	connaît	", PalabraTraducida:"	sabe	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	know	", PalabraNativa:"	connais	", PalabraTraducida:"	saber	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	concerned	", PalabraNativa:"	concerne	", PalabraTraducida:"	preocupaciones	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	understand	", PalabraNativa:"	comprends	", PalabraTraducida:"	entender	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	to understand	", PalabraNativa:"	comprendre	", PalabraTraducida:"	entender	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	begin	", PalabraNativa:"	commence	", PalabraTraducida:"	comienza	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	order	", PalabraNativa:"	commande	", PalabraTraducida:"	orden	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	fight	", PalabraNativa:"	combat	", PalabraTraducida:"	lucha	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	finished	", PalabraNativa:"	termine	", PalabraTraducida:"	Terminado	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	choose	", PalabraNativa:"	choisir	", PalabraTraducida:"	escoger	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	seek	", PalabraNativa:"	chercher	", PalabraTraducida:"	búsqueda	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	look for	", PalabraNativa:"	cherche	", PalabraTraducida:"	mira	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	hold	", PalabraNativa:"	tiens	", PalabraTraducida:"	como	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	is holding	", PalabraNativa:"	tient	", PalabraTraducida:"	sostiene	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	charge	", PalabraNativa:"	charge	", PalabraTraducida:"	carga	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	breakages	", PalabraNativa:"	casses	", PalabraTraducida:"	roturas	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	broken	", PalabraNativa:"	casse	", PalabraTraducida:"	rotura	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	hide	", PalabraNativa:"	cacher	", PalabraTraducida:"	esconder	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	hidden	", PalabraNativa:"	cache	", PalabraTraducida:"	cubierta	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	bronze	", PalabraNativa:"	bronze	", PalabraTraducida:"	bronce	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	branch	", PalabraNativa:"	branche	", PalabraTraducida:"	rama	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	boil	", PalabraNativa:"	bouillir	", PalabraTraducida:"	hervir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	drink	", PalabraNativa:"	boivent	", PalabraTraducida:"	bebida	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	drink	", PalabraNativa:"	bois	", PalabraTraducida:"	bosque	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	drink	", PalabraNativa:"	boire	", PalabraTraducida:"	beber	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	have	", PalabraNativa:"	avons	", PalabraTraducida:"	tenemos	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	to have	", PalabraNativa:"	avoir	", PalabraTraducida:"	tener	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	find	", PalabraNativa:"	trouvent	", PalabraTraducida:"	fundar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	find	", PalabraNativa:"	trouve	", PalabraTraducida:"	hallazgos	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	have	", PalabraNativa:"	avez	", PalabraTraducida:"	tener	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	hold on	", PalabraNativa:"	attends	", PalabraTraducida:"	esperar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	ace	", PalabraNativa:"	as	", PalabraTraducida:"	as	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	arrive	", PalabraNativa:"	arrivent	", PalabraTraducida:"	llegar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	arrived	", PalabraNativa:"	arrive	", PalabraTraducida:"	llega	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	learn	", PalabraNativa:"	apprendre	", PalabraTraducida:"	aprender	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	go	", PalabraNativa:"	vais	", PalabraTraducida:"	voy	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	go	", PalabraNativa:"	va	", PalabraTraducida:"	voluntad	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	sell	", PalabraNativa:"	vendent	", PalabraTraducida:"	vender	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	sell	", PalabraNativa:"	vendez	", PalabraTraducida:"	vender	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	sell	", PalabraNativa:"	vendre	", PalabraTraducida:"	venta	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	sell	", PalabraNativa:"	vend	", PalabraTraducida:"	Sells	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	come	", PalabraNativa:"	venir	", PalabraTraducida:"	venir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	learn	", PalabraNativa:"	apprend	", PalabraTraducida:"	aprende	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	bring	", PalabraNativa:"	apporter	", PalabraTraducida:"	llevar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	brought	", PalabraNativa:"	apporte	", PalabraTraducida:"	trae	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	calls	", PalabraNativa:"	appelle	", PalabraTraducida:"	se llama	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	to call	", PalabraNativa:"	appeler	", PalabraTraducida:"	llamar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	improved	", PalabraNativa:"	améliore	", PalabraTraducida:"	mejora	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	go	", PalabraNativa:"	aller	", PalabraTraducida:"	ir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	adds	", PalabraNativa:"	ajoute	", PalabraTraducida:"	sumado	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	like	", PalabraNativa:"	aimons	", PalabraTraducida:"	amor	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	want	", PalabraNativa:"	veulent	", PalabraTraducida:"	desear	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	wanna	", PalabraNativa:"	veut	", PalabraTraducida:"	quiere	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	wanna	", PalabraNativa:"	veut	", PalabraTraducida:"	quiere	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	want	", PalabraNativa:"	veux	", PalabraTraducida:"	desear	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	want	", PalabraNativa:"	veux	", PalabraTraducida:"	desear	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	to like	", PalabraNativa:"	aimer	", PalabraTraducida:"	querer	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	empty	", PalabraNativa:"	vider	", PalabraTraducida:"	vacía	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	love	", PalabraNativa:"	aime	", PalabraTraducida:"	como	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	helpers	", PalabraNativa:"	aides	", PalabraTraducida:"	ayuda	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	visit	", PalabraNativa:"	visite	", PalabraTraducida:"	visita	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	screw	", PalabraNativa:"	vis	", PalabraTraducida:"	tornillo	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	help	", PalabraNativa:"	aide	", PalabraTraducida:"	Ayuda	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	lives	", PalabraNativa:"	vit	", PalabraTraducida:"	vidas	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	live	", PalabraNativa:"	vivez	", PalabraTraducida:"	vivir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	live	", PalabraNativa:"	vivre	", PalabraTraducida:"	vivir	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	have	", PalabraNativa:"	ai	", PalabraTraducida:"	tener	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	see	", PalabraNativa:"	voient	", PalabraTraducida:"	ver	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	acts	", PalabraNativa:"	agit	", PalabraTraducida:"	estos	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	see	", PalabraNativa:"	voir	", PalabraTraducida:"	ver	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	see	", PalabraNativa:"	vois	", PalabraTraducida:"	ver	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	see	", PalabraNativa:"	voit	", PalabraTraducida:"	ve	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	act	", PalabraNativa:"	agis	", PalabraTraducida:"	acto	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	asserts	", PalabraNativa:"	affirme	", PalabraTraducida:"	dice	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	want	", PalabraNativa:"	voulez	", PalabraTraducida:"	desear	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	want to	", PalabraNativa:"	voulons	", PalabraTraducida:"	desear	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	love	", PalabraNativa:"	adore	", PalabraTraducida:"	amor	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	buy	", PalabraNativa:"	acheter	", PalabraTraducida:"	comprar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	buy	", PalabraNativa:"	achètent	", PalabraTraducida:"	comprar	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	bought	", PalabraNativa:"	achète	", PalabraTraducida:"	compras	"}; unasPalabras.push(palabra);						
palabra = { PalabraIngles:"	has	", PalabraNativa:"	a	", PalabraTraducida:"	tiene	"}; unasPalabras.push(palabra);						



cantidadPalabras = unasPalabras.length;
}

function PracticarUnoNuevo()
{
    seleccionadoNativo = 0; //0 nativo ; 1 Nuevo
	var rbtnSeleccionado = 0;
	elnumeroRandom = Math.floor(Math.random()*(cantidadPalabras-1+1)+1) - 1;
	seleccionadoNativo = Math.floor(Math.random()*(2-1+1)+1) - 1;//Random de si aparece palabra nativa o no
	rbtnSeleccionado = Math.floor(Math.random()*(cantidadRadioButton-1+1)+1);//Math.floor(Math.random()*(max-min+1)+min);
	if (seleccionadoNativo == 0)
	{
		$("#lblSeleccionado").text(unasPalabras[elnumeroRandom].PalabraNativa);
		$("#lrbtn" +  (rbtnSeleccionado)).text(unasPalabras[elnumeroRandom].PalabraTraducida);
		
		//imagen
		var image = document.getElementById('image');
		image.src = 'img/Verbos/' + unasPalabras[elnumeroRandom].PalabraIngles + '.png';
		//imagen
		
		var unasPalabrasDinamicas = unasPalabras;
		
		var i;
		for (i = 1; i <= cantidadRadioButton; i++) 
		{ 
			if (i != rbtnSeleccionado)
			{
				var ok = false;//para no repetir opciones
				while (ok == false)
				{
					elnumeroRandomOtros = Math.floor(Math.random()*(unasPalabrasDinamicas.length-1+1)+1) - 1;
					if ($("#lrbtn" + i).text() != unasPalabrasDinamicas[elnumeroRandomOtros].PalabraTraducida)
					{
						$("#lrbtn" + i).text(unasPalabrasDinamicas[elnumeroRandomOtros].PalabraTraducida);
						ok = true;
					}
				}
			}
		}
	}
	else
	{
		$("#lblSeleccionado").text(unasPalabras[elnumeroRandom].PalabraTraducida);
		$("#lrbtn" +  (rbtnSeleccionado)).text(unasPalabras[elnumeroRandom].PalabraNativa);
		
		//imagen
		var image = document.getElementById('image');
		image.src = 'img/Verbos/' + unasPalabras[elnumeroRandom].PalabraIngles + '.png';
		//imagen		

		var unasPalabrasDinamicas = unasPalabras;
		
		var i;
		for (i = 1; i <= cantidadRadioButton; i++) 
		{ 
			if (i != rbtnSeleccionado)
			{
				var ok = false;//para no repetir opciones
				while (ok == false)
				{
					elnumeroRandomOtros = Math.floor(Math.random()*(unasPalabrasDinamicas.length-1+1)+1) - 1;
					if ($("#lrbtn" + i).text() != unasPalabrasDinamicas[elnumeroRandomOtros].PalabraNativa)
					{
						$("#lrbtn" + i).text(unasPalabrasDinamicas[elnumeroRandomOtros].PalabraNativa);
						ok = true;
					}
				}
			}
		}
	}		
}
	
function radioChanged(objeto) {
	
	var id = objeto.attr("id").replace(/[^0-9]+/, '');
	switch (id) {
					case"1":
							if(document.getElementById("rbtn1").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}							
						break;
					case"2":
							if(document.getElementById("rbtn2").checked == true) 
								{	
									document.getElementById("rbtn1").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}	
						break;
					case"3":
							if(document.getElementById("rbtn3").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn1").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}	
						break;
					case"4":
							if(document.getElementById("rbtn4").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn1").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}		
						break;
					case"5":
							if(document.getElementById("rbtn5").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn1").checked = 0;
								}	
						break;
					default:
						break;
				}
}

function Calificar() 
{
	if	(btnCalificar.value =="Calificar")
	{
		var palabra="";
		var palabraTestear ="";
		
			if (seleccionadoNativo == 0)
			{
				palabra = unasPalabras[elnumeroRandom].PalabraTraducida;
			}
			else
			{
				palabra = unasPalabras[elnumeroRandom].PalabraNativa;
			}
			
			var i;
			for (i = 1; i <= cantidadRadioButton; i++) 
			{ 
				if (document.getElementById("rbtn" + i).checked)
				{
					palabraTestear = $("#lrbtn" + i).text();
				}
			}
			
			if (Comparacion(palabra, palabraTestear))
			{
				Correcto();
			}
			else
			{
				Incorrecto();
			}
			
			var estados = $("#lblEstado").text().split("/");
			estados[1] = parseInt(estados[1]) + 1;
			$("#lblEstado").text(estados[0] +"/" + estados[1]); 
	
			unasPalabras.splice(elnumeroRandom, 1);
			cantidadPalabras = unasPalabras.length;
			
			// if (int.Parse(estados[1])==10)
			// {
				// if (estados[0] == estados[1])
				// {
					// lblEstado.ForeColor = Color.Green;
					
				// }
				// else
				// {
					// if ((int.Parse(estados[1]) - int.Parse(estados[0])) > 3)
					// {
						// if ((int.Parse(estados[1]) - int.Parse(estados[0])) > 6)
						// {
							// lblEstado.ForeColor = Color.Red;
						// }
						// else
						// {
							// lblEstado.ForeColor = Color.Khaki;
						// }

					// }
				// }
			// }

			document.getElementById("btnCalificar").value ="Continuar";
	}
	else
	{
		restaurarVista();
		PracticarUnoNuevo();
		document.getElementById("btnCalificar").value ="Calificar";
	}
}	

function restaurarVista()
{
	$("#lblResultado").text("");
	document.getElementById("lblSeleccionado").style.color ="green";
	document.getElementById("lblSeleccionado").style.color ="rgb(64, 64, 64)";  
	var i;
	for (i = 1; i <= cantidadRadioButton ; i++)
	{
		$("#lrbtn" + i).text("");
	}
	
	document.getElementById("rbtn1").checked = 1;
    document.getElementById("rbtn2").checked = 0;
	document.getElementById("rbtn3").checked = 0;
	document.getElementById("rbtn4").checked = 0;
	document.getElementById("rbtn5").checked = 0;
}
		
function Comparacion(palabraAux, palabraTestear) {
		var ok = false;
		var faltas = 0;
		var i = 0;
		var j = 0;

		if (Math.abs((palabraAux.length - palabraTestear.length) < 2))
		{

			//Comparo letra a letra por su faltan o sobran letras o son distintas
			if (palabraAux.length > palabraTestear.length)
			{
				faltas++;
			}
			while (faltas < 2 && i < (palabraAux.length))
			{
					if (palabraAux.length < palabraTestear.length)
					{
						if (palabraAux.substring(i, 1) != palabraTestear.substring(j, 1))
						{
							j++;
							faltas++;
						}

					}
					else
					{
						if (palabraAux.length > palabraTestear.length)
						{
							if (palabraAux.substring(i, 1) != palabraTestear.substring(j, 1))
							{
								j--;
								faltas++;
							}
						}
						else
						{
							if (palabraAux.substring(i, 1) != palabraTestear.substring(j, 1))
							{
								faltas++;
							}
						}
					}

				i++;
				j++;
			}
			if (faltas<2)
			{
				if (faltas == 1)
				{
				   
					if (seleccionadoNativo == 0)
					{
				 
					}
					else
					{
	 
					}
					
				}
				ok = true;
			}
		}

		return ok;
	}
	
function Correcto() 
{
	document.getElementById("lblSeleccionado").style.color ="green";
	document.getElementById("lblResultado").style.color ="green";
	$("#lblResultado").text("Excelente!");

    var estados = $("#lblEstado").text().split("/");
	estados[0] = parseInt(estados[0]) + 1;
	$("#lblEstado").text(estados[0] +"/" + estados[1]); 
		
}
	
function Incorrecto() 
{
	document.getElementById("lblSeleccionado").style.color ="red";
	document.getElementById("lblResultado").style.color ="red";
	$("#lblResultado").text("    Mal");

	if (seleccionadoNativo == 0)
	{
		$("#lblSeleccionado").text($("#lblSeleccionado").text() +" = " + unasPalabras[elnumeroRandom].PalabraTraducida);
	}
	else
	{
		$("#lblSeleccionado").text($("#lblSeleccionado").text() +" = " + unasPalabras[elnumeroRandom].PalabraNativa);
	}
}