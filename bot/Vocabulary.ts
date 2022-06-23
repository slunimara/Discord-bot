export const unknownCommand = "Tento příkaz neznám.";
export const executeError = "Nastala chyba při vykonávání příkazu.";
export const songAdded = "Písnička byla přidána do fronty.";
export const songSkipped = "Písnička byla přeskočena.";
export const songPaused = "Písnička byla pozastavena.";
export const memeberNotConnected = "Musíš být ve hlasovém kanále.";
export const emptyQueue = "Fronta je prázdná.";

export const errorArg = "Neplatný argument.";
export const errorSpotifyAlbum = "Ze spotify lze načíst pouze playlist nebo písničku.";
export const errorSkip = "Nastala chyba při přeskakování písničky.";
export const errorPause = "Nastala chyba při pozastavování písničky.";
export const errorConnection = "Nastala chyba při připojení.";
export const errorPlaylist = "Nastala chyba při parsování playlistu.";

export const CommandPing = {
	name: "ping",
	description: "Pošli ping botovi.",
};

export const CommandPlay = {
	name: "play",
	description: "Pusť si svou oblíbenou hudbu.",
	options: [
		{
			name: "search",
			description: "Odkaz na Youtube/Spotify/libovolá fráze."
		}
	]
};

export const CommandPause = {
	name: "pause",
	description: "Zastav aktuálně přehranou písničku.",
};

export const CommandSkip = {
	name: "skip",
	description: "Přeskoč aktuálně přehranou písničku.",
	options: [
		{
			name: "count",
			description: "Kolik písní chceš přeskočit."
		}
	]
};

