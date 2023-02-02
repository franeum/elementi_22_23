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

# software

---

<img src=images/klaus.jpg />

---

### dalla seconda metà degli anni 70 si comincia a porre il problema di come collegare strumenti diversi

--

- Avere strumenti diversi significava avere più possibilità timbriche, sia alternando gli strumenti che suonandoli contemporaneamente
- Non esisteva una tenologia, né uno standard che permettesse di suonare contemporaneamente in modo sincronizzato diversi strumenti
- Esistevano sistemi di interfacciamento `proprietari`. Potevo collegare due synth della Roland, ma non potevo collegare un synth della Roland ad uno della Yamaha

---

- pubblicato il documento *Universal Synthesizer Interface* (1981), da cui nasce una discussione fra ingegneri e grandi brand che deciso le seguenti cose:
    - uso di connettori DIN a 5 poli
    - velocità di trasferimento dati a 31,25 kbaud
    - nome: *Musical Instrument Digital Interface* (MIDI)
- Nel 1983 le specifiche MIDI furono presentate al pubblico e il MIDI divenne subito molto popolare

---

## che cos'è il MIDI?

---

- un protocollo di comunicazione fra dispositivi musicali
- che trasporta dati che rappresentino il `gesto` di un esecutore su una tastiera (ma non solo)
- non è un formato audio, cioé non trasporta segnale audio

---

## cosa faccio quando suono un tasto su una tastiera elettronica?

1. scelgo il timbro
2. premo un tasto all'altezza che desidero (*pitch*)
3. premo con una certa intensità per ottenere il volume desiderato (*velocity*)

--

#### queste decisioni e questi gesti devono essere codificati e trasferiti ad un altro dispositivo
- il MIDI è un'estensione del corpo umano (*pròtesi bionica*)
- si realizza `fisicamente` attraverso cavi elettrici che collegano `porte` dedicate
- i segnali che attraversano questi cavi trasportano informazione coificata grazie ad un `protocollo`

--

## il MIDI è 
- una connessione hardware (`interfaccia`)
- un `protocollo` di comunicazione 

---

- Per realizzare la comunicazione fra due dispositivi, un `Master`, invia un segnale MIDI ad uno `Slave`
- Entrambi devo essere provvisti di una `porta` MIDI, il primo di uscita (`MIDI OUT PORT`), l'altro di entrata (`MIDI IN PORT`)

--

<img src=images/simple_midi.svg />

---

Un Master può inviare un messaggio MIDI a più di un dispositivo se su uno Slave si trova una porta thru (`MIDI THRU PORT`), che lascia passare i messaggi per raggiungere un altro dispositivo (collegamento *seriale*)

--

<img src=images/midi_thru.svg />

---

## con la porta MIDI thru si possono inviare dati fino a 16 dispositivi, ma quelli più lontani soffrirebbero di `latenza`
- quindi si usano delle `thru` box
- collegamento *parallelo*

--

<img src=images/thru_box.svg />

---

## interfaccia MIDI
- interfaccia seriale asincrona
- velocità: 31250 baud
- connettori di tipo DIN a 5 poli (oggi anche USB)
- lunghezza massima dei cavi: 15 m
- formato dei *pacchetti*:
    - 8 bit per il dato + un bit di start e un bit di stop: 10 bit
    - velocità di un pacchetto: 320  $\mu $sec

--

<img src=images/connettore.svg />

---

## porte

<img src=images/porte.svg />

--

## protocollo

- La comunicazione avviene attraverso *messaggi*
- I messaggi non rappresentano una forma d'onda
- Rappresentano `segnali di controllo`
- Attraversano dei `canali`
- il MIDI può utilizzare fino a 16 canali

--

- Se uno slave riceve sul canale 1 e ha una porta thru collegata a un altro slave, ignorerà tutti i messaggi indirizzati a un altro canale, e li invierà in uscita dalla porta thru

---

### messaggi MIDI

---

- Un messaggio è costituito da due diversi tipi di byte:
    - `status byte` (1)
    - `data byte` (1 o più)

---

#### status byte

---

Lo `status byte` definisce il tipo di comando e il canale a cui inviarlo, metre i `data byte` indicano il valore di quel comando

---

<img src=images/status_byte.svg />

---

<img src=images/midi_msg_type.svg />

---

<img src=images/midi_channel.svg />

---

I `channel voice message` sono indirizzati a uno strumento della rete, mentre i `system message` sono indirizzati a tutti, globalmente

---

Quando abbiamo un messaggio di sistema, il *nibble* di destra non indica il canale ma il tipo di messaggio di sistema:

| nibble | message                      |
|--------|------------------------------|
| 0000   | System Exclusive             |
| 0001   | MIDI Time Code Quarter Frame |
| 0010   | Song Position Pointer        |
| 0011   | Song Select                  |

--

| nibble | message               |
|--------|-----------------------|
| 0100   |                       |
| 0101   |                       |
| 0110   | Tune Request          |
| 0111   | System Exclusive Stop |

--

| nibble | message    |
|--------|------------|
| 1000   | MIDI Clock |
| 1001   |            |
| 1010   | Start      |
| 1011   | Continue   |

--

| nibble | message        |
|--------|----------------|
| 1100   | Stop           |
| 1101   |                |
| 1110   | Active Sensing |
| 1111   | System Reset   |

---

#### data byte

---

<img src=images/data_byte.svg />

--

Quanti possibili valori posso avere se ho 7 bit a disposizione?

--

$$ 2^7 = 128 $$

---

## note on

inviamo un valore di NOTE ON sul canale 3 con pitch 60 e velocity 94

--

Un messaggio di `note on` ha uno status byte e due data byte (uno per il pitch, l'altro per la velocity)

--

<img src=images/noteon.svg />

---

## SONG

---

Posso registrare una sequenza di messaggi MIDI in un file (o qualunque altro tipo di memoria)

---

- Posso codificare note (es. 60 è il DO centrale del pianoforte) e altri parametri di uno strumento (intensità, quale trimbro, etc...)
- Ma posso anche inviare messaggi all'intero sistema (timecode)
- I messaggi devono includdere anche l'informazione temporale (timestamp)
- esiste un *clock* (timebase) che si chiama *tick*, che rappresenta i `PPQ` (parti per quarto) e che è sempre 24 o un multiplo di 24 (96, 480, etc...)
- Per sapere il tempo di esecuzione è necessario convertire il timebase in tempo effettivo a partire da un riferimento (`BPM`)

--

### esempio

bpm = 120
timebase = 24

1 beat dure 0.5 secondi
per ogni beat ci sono 24 ticks, quindi 1 tick dura?

--

21 $msec$ circa





