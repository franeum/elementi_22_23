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

## il computer è un dispositivo che realizza la possibilità di scomporre processi complessi in lunghe sequenze di azioni molto semplici eseguibili in serie

--

## esegue queste operazioni e fornisce la risposta che descrive il processo

---

## Da un punto di vista `fisico` il computer è un dispositivo costituito da un insieme di circuiti elettrici

--

## la corrente che attraversa questi circuiti, codifica le informazioni 

---

## Attraverso numerosi componenti chiamati `transistor`, il passaggio di corrente è consentito o inibito 

--

## Si distinguono quindi due condizioni:
- passaggio di corrente -> tensione massima {: .fragment}
- non passaggio di corrente -> tensione minima {: .fragment}

--

<img src=images/current.svg />

--

## questi due `STATI` vengono rappresentati con `0` e `1`

---

## Il primo computer a transistor, progettato fra il 1957 e il 1959 è l'`ELEA 9003` della Olivetti

--

<img src=images/Olivetti_Elea_9003.jpg />

---

# RAPPRESENTAZIONE DELL'INFORMAZIONE

---

## L'informazione all'interno di un elaboratore è rappresentata mediante sequenze di 0 e 1:
...01011010010... {: .fragment}

--

<img src=images/segnale_digitale.svg />

---

## L'entità minima di informazione è chiamata `BIT` (*binary digit*)

--

<img src=images/segnale_digitale_bit.svg />

---

## La `commutazione` di stato del segnale è regolata da un altro segnale elettrico, che scandisce la frequenza di `clock`

--

<img src=images/clock.svg />

---

## per permettere al computer di elaborare l'informazione è necessario codificarla nel `LINGUAGGIO BINARIO`

---

## le prime applicazioni trattavano essenzialmente numeri, quindi l'informazione era quasi esclusivamente `NUMERICA`

--

## SI TRATTAVA QUINDI DI CONVERTIRE NUMERI DECIMALI IN INFORMAZIONE BINARIA

--

| decimale | binario |
|----------|---------|
| 0        | 000     |
| 1        | 001     |
| 2        | 010     |
| 3        | 011     |
| 4        | 100     |
| 5        | 101     |
| 6        | 110     |
| 7        | 111     |

---

## con 3 bit possiamo rappresentare 8 numeri diversi, perché?

--

$$2^n$$

*dove $n$ rappresenta il numero dei bit*

---

## successivamente è diventato necessario codificare anche i caratteri

## associando ad una sequenza binaria una lettera, il simbolo di un numero e la punteggiatura {: .fragment}

---

## la tabella `ASCII` (*American Standard Code for Information Interchange*) ci permette di convertire caratteri in sequenze binarie (e viceversa) secondo uno standard internazionale che prevede l'utilizzo di 8 bit

--

## Quante combinazioni ci sono con 8 bit, dove ogni bit può assumere due possibili valori?

--

$2 ^ 8 = 256$

---

| simbolo | ascii code |
|---------|------------|
| *       | 00101010   |
| +       | 00101011   |
| A       | 01000001   |
| B       | 01000010   |
| 3       | 00110011   |
| 4       | 00110100   |

--

### in realtà per rappresentare tutti i caratteri (lettere, simboli numerici, caratteri speciali, punteggiatura...) sono sufficienti 7 bit, con cui possiamo rappresentare $2^7 = 128$ simboli diversi, quindi il primo bit è sempre posto a 0 

---

| c        | a        | n        | e        |
|----------|----------|----------|----------|
| 01000011 | 01000001 | 01001110 | 01000101 |

---

## Il computer deve anche interpretare sequenze binarie che rappresentino contenuti multimediali: immagini, filmati, suoni...

---

# IMMAGINI

---

<img src=images/immagine1.svg />

--

## suddividiamo l'immagine mediante una griglia formata da righe orizzontali e verticali a distanza costante

<img src=images/immagine2.svg /> {: .fragment}

--

## ogni cella della griglia può essere rappresentata con un bit 
- valore 0: se il colore preponderante è il bianco
- valore 1: altrimenti

--

<img src=images/immagine3.svg />

#### la rappresentazione dell'immagine sarà: {: .fragment}
0000000 0111100 0110000 0100000 {: .fragment} 

---

### se riconvertissimo la stringa 0000000011110001100000100000 in immagine otterremmo:
<img src=images/immagine4.svg /> {: .fragment}

#### cioè un'`APPROSSIMAZIONE` della figura originaria {: .fragment}

---

### Per ottenere un'approssimazione migliore, quindi una rappresentazione più fedele

### possiamo aumentare il numero delle celle della griglia, cioè dei `PIXEL` {: .fragment}

--

<img src=images/immagine5.svg />

---

### La quantità di *pixel* nella griglia, rappresentata da una matrice $$m \cdot n$$ dove $m\space$ sono le righe e $n\space$  le colonne è detta `RISOLUZIONE`

--

## Maggiore è il numero ddei pixel, migliore è la risoluzione

---

## Assegnando un bit ad ogni pixel è possibile codificare solo immagini *monocromatiche* senza sfumnature

--

## se volessimo rappresentare diverse gradazioni di colore, per esempio il grigio nelle immagini in banco e nero, avremmo bisogno di più di un bit

--

### ad esempio, con 4 bit potremmo rappresentare $2^4=16$ gradazioni di grigio

---

## Per le immagini a più colori si usa la stessa tecnica

--

## Ci sono varie codifiche, una delle più note è tratta dal modello `RGB` (*Red Green Blue*)

--

## Il modello RGB è `additivo`: si può ottenere qualunque colore a partire dalla combinazione di quantità diverse di tre colori base (rosso, verde, blu)

---

## Ad ogni pixel quindi si attribuisce un `array` di tre `byte`, cioè gruppo di 8 bit.

--

## Ogni byte potrà assumere un valore compreso fra 0 e 255, quindi un colore sarà rappresentato da una `tripla` [RED, GREEN, BLUE]
- VERDE: [0, 255, 0] {: .fragment}
- ROSSO: [255, 0, 0] {: .fragment}
- MAGENTA: [255, 0, 255] {: .fragment}
- GIALLO CHIARO: [255, 255, 180] {: .fragment}

---

# VIDEO

---

## Per codificare immagini in movimento è necessario codificare sequenze di `FOTOGRAMMI`

--

## LA RISOLUZIONE MINIMA AFFINCHÉ SI PERCEPISCA UN MOVIMENTO NATURALE È 12 FOROGRAMMI AL SECONDO

--

## Si rischia di dover codificare un'enorme quantità di dati, quindi si usano degli standard di `compressione`
- **MPEG** (*Moving Picture Experts Group*): standard molto diffuso. Molto efficiente ma complesso {: .fragment}
- **QuickTime**: proposto da Apple, meno efficiente ma più semplice {: .fragment}
- **Indeo-AVI**: proposto da Intel, usato da MicroSoft. Poco efficiente {: .fragment}

---

# SUONI

---

## Un suono è rappresentato come un'onda che descrive la variazione della pressione dell'aria nel tempo
<img src=images/ondasonora.svg /> {: .fragment}

--

## Tale rappresentazione viene detta `ANALOGICA`, in quanto descrive esattamente l'analogo della quantità fisica in esame

--

## Le rappresentazioni di tipo analogico non sono adatte al mondo dell'informatica e devono essere rappresentare in forma `digitale` (numerica)

---

### Si effettuano dei `campionamenti` sull'onda (cioè si misura il valore dell’onda a intervalli costanti di tempo) e si codificano in forma digitale le informazioni estratte da tali campionamenti
<img src=images/campionamento.svg /> {: .fragment}

---

## tanto più breve sarà l'intervallo fra un campionamento e l'altro, tanto più fedele sarà la rappresentazione dell'onda

--

## La quantità di campionamento in un secondo definisce la `frequenza di campionamento`, che si misura in `hertz` (Hz)
- 44100 Hz {: .fragment}
- 48000 Hz {: .fragment}
- 96000 Hz {: .fragment}

---

# informatica

---

## Una volta convertita l'informazione in una forma binaria possiamo elaborare e studiare fenomeni anche molto complessi

--

## L'informatica è la scienza che studia le metodologie di progettazione, organizzazione e gestione automatica dell'informazione

--

## Sviluppata in modo così massiccio perché: 
- si possono trasformare in forma digitale moltissimi tipi di informazione {: .fragment}
- i computer sono diventati molto economici {: .fragment}
- ...e sempre più veloci {: .fragment}

---

# Esercitazione

---

## Conversione da decimale a binario e viceversa