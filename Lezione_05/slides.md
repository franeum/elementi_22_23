---

theme: "white"
transition: "slide"
transitionSpeed: "slow"
slideNumber: false
overview: false
previewLinks: false
controls: true
dataState: "no-title-footer"
---

<style>
    .reveal h1 {
        font-size: 2.5em;
        color: #000000;
    }

    .reveal h2 {
        font-size: 1.5em;
        color: #000000;
    }

    .reveal li {
        font-size: 0.8em;
    }

    .reveal code {
        background-color: #66b3ff;
        color: #000000;
        padding: 0.2em 0.25em 0.2em 0.25em;
    }

    .language-bash {
        background-color: #000000;
        color: #00ff00;
    }
</style>

# COMPUTER

---

## Il computer è un `sistema`, cioè un insieme di elementi funzionali connessi fra loro per formare un tutt'uno organico

--

### hardware
l'insieme delle componenti fisiche del sistema

--

### software
l'insieme dei programmi che vengono eseguiti dal sistema
- I programmi e i dati sono organizzati in `file` {: .fragment}
- Un file è un archivio organizzato secondo un certo criterio e residente in memoria {: .fragment}
- I file di dati contengono informazioni (testi, numeri,immagini, suoni) {: .fragment}
- I file di programmi contengono sequenze di istruzioni {: .fragment}

---

## Architettura di un elaboratore
- L’architettura dell’hardware di un calcolatore reale è molto complessa: la macchina di Von Neumann è un modello
semplificato dei calcolatori moderni
- Von Neumann progettò, verso il 1947, il primo calcolatore con programmi memorizzabili anziché codificati mediante
cavi e interruttori
* Unità centrale di elaborazione (CPU)
* Memoria Centrale
* Memoria di Massa
* Dispositivi di Ingresso Uscita (I/O)
* Dispositivi di collegamento (Bus)

---

- unità centrale di elaborazione (CPU – Central Processing
Unit): esegue istruzioni per l’elaborazione dei dati e svolge
anche funzioni di controllo
- memoria centrale: memorizza e fornisce l’accesso a dati e
programmi in esecuzione
- memoria di massa: memorizza permanentemente i dati ed i
programmi. Prevede accessi in lettura e scrittura
- interfacce di ingresso e uscita: componenti di collegamento
con le periferiche del calcolatore
- bus: svolge funzioni di trasferimento di dati e di informazioni
di controllo tra le varie componenti funzionali

---

# CPU

---

### Il processore (detto anche CPU, ovvero, Central Processing Unit) fornisce la capacità di elaborazione delle informazioni contenute nella memoria principale
- L’elaborazione avviene in accordo a sequenze di istruzioni
(`istruzioni macchina`)
- Il linguaggio in cui si scrivono queste istruzioni viene
chiamato `linguaggio macchina`
- Programma: specifica univoca di una serie di operazioni che
l’elaboratore deve svolgere ed è costituito da una sequenza
ordinata di istruzioni macchina.

--

## Il ruolo del processore è quello di eseguire programmi in linguaggio macchina

---

# memoria centrale

--

- Contiene i programmi e i dati che stanno per essere
elaborati dalla CPU
- Ha capacità limitate (alcuni GB)
- Volatile
- L’accesso all’informazione è molto rapido
- Spesso indicata come RAM (Random Access Memory)

---

# memoria di massa

--

- Usata per memorizzare grandi quantità di dati e
programmi
- Non volatile (cioè l’informazione non viene persa quando
il computer viene spento)
- L’accesso all’informazione non è molto rapido
- Hard disk, Floppy disk, CD-ROM, DVD-ROM, nastri
magnetici

---

# Dispositivi di Ingresso/Uscita

--

- Vengono impiegati per far comunicare il calcolatore con
l’ambiente esterno, cioè per accettare in ingresso i dati e
per visualizzare i risultati ottenuti dall’elaborazione dei dati.
- Terminali (tastiera, mouse, monitor), stampanti, modem, ...
- L’unità centrale (case) ha degli ingressi detti porte in cui
inserire i cavi che collegano i dispositivi di I/O

---

# Porte dell’Unità centrale

--

- La porta parallela: consente il transito in una sola direzione:
dal computer alla periferica. Viene quindi usata quasi
esclusivamente per il collegamento con le stampanti.
- La porta seriale: collegamenti con periferiche attive, come
mouse e modem.
- La porta seriale USB: permettono di collegare dispositivi
(scanner, stampanti ...) senza dover configurare e riavviare
il computer. Inoltre sono molto veloci.
- La porta Serial ATA (SATA "Serial Advanced Technology
Attachment"), è generalmente utilizzata per connettere
hard disk o drive ottici. Ha grande velocità, cavi meno
ingombranti e possibilità di hot swap. Gli hard disk esterni
di ultima generazione possono essere collegati al computer
tramite l'interfaccia ESATA oltre alla classica porta USB
2.0, la porta USB 3.0 o la più moderna USB 3.1

---

# cpu
### La CPU o microprocessore è un chip integrato costituito da una piccola piastra di silicio sulla cui superficie sono stati creati milioni di transitor miniaturizzati.

---

### Nella maggior parte dei computer sia il programma che i dati (le informazioni da elaborare) devono essere caricati (cioè, copiati) in memoria principale 
#### La memoria contiene almeno due tipi di informazioni:
- la sequenza di istruzioni che devono essere eseguite dal
processore;
- l’insieme di dati (informazioni) su cui tali istruzioni operano

--

### Il processore è costituito da varie componenti che svolgono compiti differenti

--

<img src=images/cpu.svg />

---

### UNITÀ DI CONTROLLO 

esegue operazioni finalizzate al
trasferimento dati o al controllo dell’esecuzione dei
programmi.

--

### UNITÀ LOGICO ARITMETICA (ALU) 

esegue operazioni
matematiche e logiche sui dati che sono contenuti nei registri.

--

### REGISTRI 

celle interne alla CPU che devono contenere
l’istruzione da eseguire, i dati da elaborare, e informazioni
accessorie
 (es.
 eventuali
 anomalie
 generate
dall’esecuzione) sullo stato della CPU.

--

Lo stato della CPU è la sequenza binaria determinata dalla lettura di uno o più registri all’interno della CPU.

---

## Unità di Controllo (UC) 

si occupa di coordinare le diverse attività che vengono svolte all’interno del processore

--

Il processore svolge la sua attività in modo ciclico: 
- ad ogni
ciclo corrisponde l’esecuzione di una istruzione macchina
- Ad ogni ciclo vengono svolte diverse attività controllate e
coordinate dalla UC chiamate `fetch-decode-execute`

--

### fetch
- si legge, cioè si carica, dalla memoria principale la
prossima istruzione da eseguire (fetch);

--

### decode
- si decodifica l’istruzione e si caricano eventuali dati
dalla memoria (decode)

--

### execute
- si esegue l’istruzione (execute)

--

- si memorizza un eventuale risultato (informazione
elaborata) in memoria

---

La frequenza con cui vengono eseguiti i cicli di esecuzione è scandita (sincronizzata) da una componente detta `clock`
- Ad ogni impulso di clock la UC esegue un ciclo di
esecuzione di istruzioni macchina
- La velocità di elaborazione di un processore dipende
dalla frequenza del suo clock
- I processori attuali hanno valori di frequenza di clock che variano tra i 500 MHz e 3 GHz (tra 500 e 3000 milioni di impulsi al secondo)

---

# registri

- Il processore contiene al suo interno un certo numero
di registri (unità di memoria estremamente veloci)
- Le dimensioni di un registro sono di pochi byte (4, 8)
- I registri contengono delle informazioni di necessità
immediata per il processore

--

#### Esistono due tipi di registri:
- i registri speciali utilizzati dalla UC per scopi particolari;
- i registri di uso generale (registri aritmetici)

---

# alu

### L’ Unità Logico Aritmetica (ALU) è costituita da un insieme di circuiti in grado di svolgere le operazioni di tipo aritmetico e logico

- La ALU legge i dati contenuti all'interno dei registri
generali, esegue le operazioni e memorizza il risultato in
uno dei registri generali
- Vi sono circuiti in grado di eseguire la somma di due
numeri binari contenuti in due registri e di depositare il
risultato in un registro e circuiti in grado di eseguire il
confronto tra due numeri
- In alcuni elaboratori oltre alla ALU si può avere un processore
specializzato per effettuare operazioni matematiche particolari,
il coprocessore matematico

---

# bus

---

- Il microprocessore e gli altri componenti elettronici comunicano per mezzo di impulsi elettrici.
- Questi impulsi viaggiano attraverso piste di rame tracciate
sulla scheda madre, dette `bus`. Il numero di linee determina
l’ampiezza del bus: oggi i bus possono essere a 32 o 64 bit.
- Il bus che collega la CPU agli altri dispositivi del computer, fra
cui la memoria centrale, si chiama `system bus`. In ogni istante
di tempo il bus collega due unità funzionali: una trasmette i
dati e l’altra li riceve, questo processo viene controllato
dall’unità centrale di elaborazione.

--

### Le linee del bus vengono suddivise in tre categorie

`Bus dati`: trasferisce dati {: .fragment}

`Bus indirizzi`: trasferisce indirizzi; per esempio contenuto del
registro in dirizzi dall’unità di elaborazione centrale alla
memoria {: .fragment}

`Bus controlli`: trasferisce un codice corrispondente all’istruzione
da eseguire {: .fragment}

---

# memoria centrale

---

- La memoria centrale è una sequenza di celle
di memoria; ciascuna cella contiene una
parola (word).
- La parola è una sequenza di bit. Le parole di uno stesso
calcolatore hanno tutte la stessa lunghezza. Calcolatori
diversi possono avere parole di lunghezza diverse. Le
lunghezze tipiche sono multipli del byte (8 bit), cioè ci sono
calcolatori con parole di 8, 16, 32, 64 bit.
- Ciascuna cella di memoria è identificata da un numero
(indirizzo) che ne specifica l’esatta posizione all’interno della
memoria.

---

<img src=images/memoria.svg />

--

- La memoria centrale è detta RAM (Random Access Memory),
cioè “Memoria ad accesso casuale”. Non significa che i dati
sono sparpagliati a caso. Vuol dire che al processore occorre
sempre lo stesso tempo per accedere a una qualsiasi,
casuale, parte della memoria.
- La RAM è una memoria veloce (tempo d’accesso ~ 10ns, cioè
10-8 secondi) e i dati rimangono finché il computer è in
funzione. Quando si spegne la RAM si svuota.
- Esiste una memoria ancora più veloce della RAM: Cache che
contiene le istruzioni eseguite più recentemente.

---

# memoria cache

---

- Nello schema di funzionamento di un calcolatore il
processore continuamente preleva informazioni ed istruzioni
dalla memoria centrale e scrive in essa informazioni
- La memoria centrale, il bus ed il processore lavorano a
velocità diverse. La velocità complessiva del sistema è
determinata dal componente più lento
- Per accelerare questa interazione si impiega una memoria ad
alta velocità localizzata tra processore e memoria centrale
detta CACHE

--

- Se il processore ha bisogno di leggere un dato o
un’istruzione dalla memoria centrale la cerca prima nella
cache che è molto più veloce
- Se il dato o l`istruzione non si trovano memorizzati nella
cache allora il processore chiede alla memoria centrale di
fornire l’elemento richiesto
- Ci sono alcune tecniche per decidere cosa memorizzare
nella cache
- Se dati ed istruzioni più frequentemente usati dal processore
si trovano nella cache allora si ha una grande
velocizzazione delle operazioni (si evita il tempo che è
necessario per accedere alla RAM tramite il bus)

---

# memoria rom

---

- ROM (Read Only Memory) è una “Memoria di sola lettura” il
cui contenuto è stato registrato in fase di costruzione del
computer e non può essere modificata. Ogni volta che viene
acceso, il computer esegue un piccolo programma
contenuto nella ROM che:
* identifica il processore
* controlla la quantità di RAM e ne verifica il
funzionamento.
* esamina l’hard disk e eventuali periferiche aggiuntive.
* legge il settore dell’hard disk in cui sono contenute le
istruzioni per l’ avvio del sistema.

---

# bios

---

- La parte della ROM che avvia il sistema è detto BIOS (Basic
Input/Output System).
- In fase di avvio del PC il programma di boostrap presente nel
BIOS
* effettua test diagnostici di base e controlla lo stato delle
periferiche collegate, per permettere il caricamento del
sistema operativo (POST: Power-On Self Test);
* carica nella memoria principale (RAM) la parte principale
del sistema operativo (kernel).

---

# memorie di massa

---

La memoria di massa o memoria secondaria deve avere
capacità di memorizzazione permanente e quindi per la sua
realizzazione si utilizzano tecnologie basate sul
magnetismo (dischi e nastri magnetici) o tecnologie
basate sull'uso dei raggi laser (dischi ottici)

--


- Nel primo caso si sfrutta l’esistenza di sostanze che
possono essere magnetizzate. La magnetizzazione può essere
di due tipi (positiva e negativa) che corrisponde ai bit 0 e 1
- Nel secondo caso si sfrutta la diversa riflessione di un
raggio laser su superfici diverse e si può pensare di utilizzare
delle superfici con dei piccolissimi forellini. Ogni unità di
superficie può essere forata o non forata e
questo corrisponde ai due bit 0 e 1

---

- I supporti di memoria di massa sono molto più lenti rispetto
alla memoria principale (presenza di dispositivi meccanici)
- Le memorie di massa hanno capacità di memorizzazione
(dimensioni) molto maggiori di quelle delle tipiche memorie
principali
- Il processore non può utilizzare direttamente la memoria di
massa per l'elaborazione dei dati
- Il programma in esecuzione deve essere in memoria
principale e quindi le informazioni devono essere trasferite
dalla memoria secondaria a quella principale ogni volta che
servono

---

# Dispositivi di Input/Output

---

I dispositivi di input/output (anche detti periferiche),
permettono di realizzare l'interazione tra l'uomo e la
macchina
- La loro funzione primaria è quella di consentire
l'immissione dei dati all'interno dell'elaboratore
(input), o l'uscita dei dati dall'elaboratore (output)
- Solitamente hanno limitata autonomia rispetto al
processore centrale (sono completamente gestiti,
controllati e coordinati dal processore)
- così come le memorie di massa, anche i dispositivi di IO
sono collegati ad dei circuiti (CONTROLLER) che gestiscono il
coordinamento tra processore, memoria e dispositivi in modo
da garantire il corretto trasferimento di dati.

--

Una caratteristica comune a tutti i dispositivi è quella
di operare in modo asincrono rispetto al processore
- Consideriamo una tastiera che produce dei dati di input. Il
processore non è in grado di prevedere e di controllare il
momento in cui un dato di input sarà a disposizione
- Allo stesso modo, il processore non può prevedere il
momento in cui un dispositivo in output avrà terminato di
produrre i dati in uscita
- Sono pertanto necessarie delle forme di sincronizzazione
tra i dispositivi e il processore

--

Ad ogni ciclo di clock, l'unità di controllo, prima di iniziare
l'esecuzione della prossima istruzione del programma in
corso, verifica se è arrivato un segnale di interrupt da parte
di qualche dispositivo
- Se non c'è nessun segnale di interrupt il processore
prosegue normalmente, altrimenti sospende per un attimo
l'esecuzione del programma in esecuzione ed esegue le
operazioni richieste dal dispositivo
- I vari dispositivi di input/output sono collegati al processore
attraverso il bus, su ognuno dei quali viene inserito una
componente hardware, il controller, che gestisce la
comunicazione con il dispositivo

---

# tastiera

---

La tastiera non ha capacità di elaborazione, l'unica cosa
che è in grado di fare è di avvertire il processore ogni
volta che un carattere è disponibile in ingresso
- Si tratta quindi di un dispositivo di ingresso a carattere
- È compito del sistema quello di prelevare il carattere,
depositarlo in una memoria temporanea ed infine, al
termine dell'immissione, passare i dati di input raccolti
nella memoria temporanea al programma cui erano
destinati

--

La tastiera è un dispositivo di input cieco, nel senso che
l'utente non può vedere i dati immessi nel calcolatore
- Per questa ragione la tastiera è utilizzata insieme ad un
dispositivo di output su cui vengono visualizzate le
informazioni fornite tramite tastiera
- La tastiera e il video non sono direttamente collegati
tra loro.
E’ compito del processore di riprodurre sul video tutte le
informazioni fornite in input tramite la tastiera

---

# monitor

---

Dal punto di vista fisico, un video può essere visto come
una matrice di punti illuminati con diversa intensità
- Ogni punto sullo schermo prende il nome di pixel e
un'immagine viene quindi composta accendendo o
spegnendo i pixel sullo schermo
- Oggi sono comuni video con un numero di colori che va
da 256 fino a 16 milioni
- Esistono video a diversi livelli di risoluzione, cioè con
diverse densità di pixel; nei personal sono oggi comuni
video con risoluzioni che vanno da 640X480 fino a
4096X3300 pixel (altissima risoluzione)
- La dimensione di un video viene misurata in pollici e fa
riferimento alla lunghezza della diagonale

---

Il componente principale di un monitor è il display, cioè il
dispositivo elettronico per la visualizzazione. In base alla
tecnologia usata si distinguono le seguenti tipologie di
display:
- a tubo catodico: detti video CRT (Cathod Ray Tube)
- al plasma
- a cristalli liquidi: detti video LCD (Liquid Cristal Display)
- a LED
L’immagine che vediamo sul video, opportunamente
codificata, viene memorizzata in una memoria specializzata
detta MEMORIA VIDEO (VRAM) che è parte del controller
(scheda grafica

---

# Scheda Madre

---

La scheda madre (motherboard) è il supporto per la connessione di tutti i
componenti interni del computer e contiene inoltre una serie di circuiti
(chipset, cache, BIOS) adibiti al controllo delle varie parti.
Come indicato dal suo nome, la scheda madre è una scheda master, a
forma di un grande circuito stampato che ha soprattutto dei connettori
per le schede d'estensione, per la RAM, il processore, ecc. vi si trovano
inoltre le prese per il collegamento dell'hard disk e dei drive per i dischi
mobili (floppy e CD).
La struttura attuale delle schede di sistema dei computer è il frutto di
un'evoluzione tecnologica che ha portato a definire una architettura di
sistema valida, in linea di massima, per tutti i sistemi di classe personal
computer o di potenza.

---

Architettura: tipologia di progettazione adottata dalla scheda
madre per scambiare i dati tra CPU e le periferiche inserite.
L'architettura, in quest’ultimo caso, può essere:
* parallela: (parallelismo spaziale) in un unico calcolatore
diverse operazioni (processi) vengono eseguite
simultaneamente da piu' processori; la prima macchina
(supercomputer) ad avere questa architettura fu la CDC 6600
nel 1964.
* pipeline: (parallelismo temporale) le operazioni vengono
suddivise in stadi successivi da più componenti hardware.
* seriale: la CPU esegue un operazione alla volta.

---

## componenti della scheda madre

---

Socket per la CPU, è una parte fondamentale della MB che accoglie la CPU.
Nelle schede embedded (o in quelle vecchie e molto economiche) è
assente, e il processore è saldato direttamente sullo stampato. Il socket ha
una serie di piedini (pin) che permettono il passaggio dati tra CPU e MB.
Intel a partire dalla serie Pentium ha adottato i 775 pin, mentre la rivale
AMD ha adottato con i processori Athlon FX una interfaccia con 1207 pin.
Slot per la RAM che possono essere di diversi tipi quanti sono i tipi di RAM.
Attualmente le schede madri in commercio adottano slot DDRAM (DDR3),
evoluzione delle precedenti SDRAM.
Chipset: l'insieme di chip che si occupano di smistare e dirigere il traffico
di informazioni passante attraverso il Bus di sistema, fra CPU, RAM e
controller delle periferiche di input/output (come Floppy disk, Hard disk
ecc.).

--

ROM Read Only Memory , è la piccola memoria presente su tutti i personal
computer, che in alcuni casi può essere riprogrammata,(può essere PROM,
EEPROM, flash o altro) contenente il BIOS della scheda madre. Il BIOS è un
tipo di firmware (software non modificabile).
CMOS piccola memoria RAM, in cui sono memorizzate le impostazioni del
BIOS. Il CMOS è un semiconduttore che richiede pochissima energia per
funzionare. Quando il Personal Computer viene spento, per mantenere
memorizzate le impostazioni del BIOS, utilizza una piccola batteria al litio
(cr2032, output 3v).
Il bus di espansione. Si tratta di un collegamento dati generico punto-
multipunto, progettato per permettere di collegare alla scheda madre delle
altre schede di espansione alloggiate su connettori (slot), che ne estendono
le capacità. In linea di principio ad un bus può essere collegato hardware di
ogni tipo: schede video aggiuntive, schede audio professionali, schede
acquisizione dati, unità di calcolo specializzate, scheda video, ecc...

---















