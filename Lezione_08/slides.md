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

# puredata

---

<img src=images/klaus.jpg />

---

## documenti

- I documenti di pd sono chiamati `patch` o `canvas`
- Un documento di pd aperto ha una pagina principale e può avere una o più sottofinestre
- Queste sottofinestre possono essere chiuse o aperte, ma restano sempre attive (es: `rev3~`)

---

<img src=images/001_helloworld.jpg />

--

In questa *patch* ci sono: 
- 4 *text boxes*:
    - un `message box` (quello con la stringa 'hello world')
    - un `object box` (**print**)
    - due `comment box`
- il *message box* e l'*object box* sono connessi:
    - dall'uscita (`outlet`) del `message box` un cavo va all'entrata (`inlet`) dell'`object box`

--

In Pd ci sono 4 tipi di `box`:
1. Object
2. Message
3. GUI
4. Comment

---

## object box

- Si possono creare semplicemente scrivendo il nome in una object box vuota
- Per creare una object box vuota è sufficiente usare `ctrl+1`
- Il testo è costituito da uno o più `atomi` (parole separate da spazi)
- Il primo *atomo* definisce il nome dell'oggetto (e quindi la sua funzione)
- i restanti atomi costituiscono i *creation arguments*, che servono a **inizializzare** l'oggetto

--

<img src=images/002_object_anatomy.jpg />

---

- `+` specifica il tipo di oggetto, precisamente la `classe` dell'oggetto che computa l'operazione di addizione
- `13` rappresenta il secondo addendo

---

Gli atomi possono essere:
- *symbols* (come il *+*)
- numeri 

Tutto ciò che non è un numero è un simbolo

---

Quando si scrive il nome dell'oggetto, verrà poi creato l'oggetto stesso con gli `inlet` e gli `outlet`. 
- Ogni oggetto ha un numero prefissato di entrate e uscite
- Alcune classi di oggetti hanno *inlet* e *outlet* definiti in base al numero di *creation argument*

--

<img src=images/003_midisynth.jpg />

--

- Questa patch mescola oggetti di controllo (**midiin**, **stripnote** e **mtof**) e oggetti con la *tilde* (~), **osc~**, ***~** e **dac~**
- Gli oggetti di controllo agiscono *sporadicamente*, in risposta a uno o più tipi di *evento*. In questo l'evento *trigger* è un messaggio MIDI ricevuto tramite l'oggetto **midiin**
- Un messaggio MIDI di *note On* produce il calcolo di una frequenza che viene inviata all'oscillatore (**osc~**)

--

- La seconda parte della patch computa campioni audio, esattamente come in un sintetizzatore analogico.
- L'oggetto osc~ sta a metà strada fra il controllo (riceve un messaggio), ma parla all'oggetto *~, tramite segnale.

---

- I segnali audio non sono sporadici. È un flusso continuo di numeri.
- La computazione è continua, e prescinde dall'arrivo dei messaggi, che invece sono puntuali.
- I messaggi di controllo cambiano i parametri del calcolo dei campioni audio, ma non possono interromperne il flusso.

---

- Le connessioni fra gli oggetti differiscono in base a ciò che trasportano: sono sottili se trasportano messaggi, spessi se trasportano segnale audio.
- Il tipo di cavo dipende dall'*outlet* da cui parte
- Un cavo di messaggi può:
    - collegare due oggetti di controllo
    - collegare un oggetto di controllo a un oggetto audio, in questo caso il valore di controllo viene automaticamente convertito in segnale dall'oggetto ricevente
- Un cavo di segnale può:
    - collegare due oggetti audio

---

## message box e GUI box

- Il testo inserito in un *message box* viene interpretato da Pd come un messaggio che viene *spedito* all'*outlet* quando il box è attivato (con il mouse in modalità *run* o dall'arrivo di un altro messaggio) 
- Un messaggio in un message box può essere inviato più volte mentre la patch è attiva.

--

<img src=images/004_message.jpg />

--

- Quando si attiva (con il mouse) il message box in alto, il messaggio `21` è inviato tramite l'outlet verso l'oggetto `+`, che somma il valore al secondo addendo, cioè `13`. Il risultato, `34`, viene inviato all'uscita e ricevuto dal *number box* in basso, che mostra la somma.
- il number box è un oggetto di tipo GUI (*Graphical User Interface*)
- Ci sono vari tipi di GUI, oltre al number box:
    - slider
    - toggle
    - bang
    - eccetera...

---

## Patch e files

- Quando si salva una patch in un file, Pd non salva lo *stato* di una patch, ma solo quello che si vede: box e connessioni.

---

# editing

---

## edit mode/run mode

Una patch può trovarsi in uno dei seguenti stati:
- `edit` mode
- `run` mode

--

- In edit mode, si possono creare e distruggere oggetti e connessioni, in run mode si possono inviare messaggi cliccando su message box, interagire con GUI.
- Durante una performance, presumibilmente si starà sempre in run mode
- Per creare la patch e realizzare cambiamenti si starà in edit mode

---

## editing vario

Pd accetta le normali procedure di selezione, taglio, copia, duplicazione.

- Per selezionare un oggetto: left click
- per selezionare può oggetti: shift+left click
- Per copiare: ctrl+c
- Per duplicare: ctrl+d
etc...

---

## connessioni

- Per connettere l'outlet di un oggetto all'inlet di un altro:
    1. Premere (e tenere premuto) il sinistro del mouse su un outlet
    2. Posizionarsi sull'inlet dell'oggetto ricevente e rilasciare il mouse

---

## popup menu, help file, open file

- Il tasto destro del mouse su un oggetto permette di accedere ad un menu di popup che permette di accedere a:
    1. help file
    2. proprietà dell'oggetto (se GUI o array)
    3. apertura di un file, quando l'oggetto ' un'*abstraction*
    4. apertura di una sub-patch quando l'oggetto è una sub-patch

Alle sub-patch si può accedere anche con il tasto sinistro (in run mode) o con shift+tasto sinistro (in edit mode), ma se la sub-patch contiene un graph-on-parent l'unico modo per aprirla è quello di cui al punto 4.

---

## Messaggi

---

#### In Pd, gli oggetti comunicano fra loro inviando (e ricevendo) messaggi o segnali audio. I messaggi sono sporadici, puntuali, come i messaggi MIDI.

---

### Anatomia di un messaggio

- Un messaggio è costituito da un `selettore` e da un certo numero di `argomenti`
- Il selettore è un *symbol*, cioè una stringa (non numerica) priva di spazi, virgola o punto e virgola
- Gli argomenti possono essere simboli o numeri
    - I numeri in Pd sono float a 32 bit, in modo da poter rappresentare valori fra -16777216 e 16777216
    - Non esistono numero interi, ma solo con la virgola (a differenza di Max dove esistono sia gli interi che i float)

--

<img src=images/005_message_anatomy.svg />

--

Quando il messaggio è solo un numero, o una lista che inizia con un numero, i selettori `float` e `list` possono essere omessi:
- Il messaggio $5$ equivale al messaggio $float \space 5$
- il messaggio $3$ $5$ $alfa$ $bravo$ equivale a $list \space 3 \space 5 \space alfa \space bravo$

---

Quando un messaggio è passato a un oggetto, il selettore del messaggio è controllato dall'oggetto ricevente. Se il selettore è riconosciuto, l'oggetto opera l'azione corrispondente.

--

<img src=images/005_float.jpg />

--

L'oggetto float ha due inlet, dall'inlet sinistro accetta messaggi con selettori *float* e *bang*, mentre dall'outlet destro accetta solo messaggi con selettori *float*

---

## depth first

- Quando un messaggio è attivato, il ricevitore può a sua volta inviare un messaggio ad un ricevitore successivo, e così via...
- Un messaggio attivo può innescare un *domino* di messaggi che viaggiano lungo un albero di connessioni.
- L'albero di questo connessioni viene attraversato in profondità, secondo una metodologia detta *depth-first*

--

<img src=images/006_depthfirst.jpg />

--

- Quando si attiva il messaggio *a*, l'albero di ramifica in due rami, se il messaggio arriva prima a destra, dovrà attraversare prima tutto quel ramo e solo dopo potrà raggiungere la parte sinistra, altrimenti inizierà prima da sinistra.
- Le successioni possibili quindi sono:
    - $A \implies C \implies D \implies B$
    - $A \implies B \implies C \implies D$

--

### cosa fa questa patch?

<img src=images/007_infinite.jpg />

---

## inlet caldi, inlet freddi

Gli oggetti (a parte rarissime eccezioni) trattano l'inlet sinistro come `hot inlet` (*inlet caldo*) nel senso che i messaggi in entrata in quell'inlet producono immediatamente messaggi in uscita
Gli altri inlet invece sono freddi (`cold inlets`): quando ricevono un atomo (numero o simbolo), questo viene memorizzato nell'oggetto, ma non viene inviato all'outlet alcun messaggio

--

### cosa fa questa patch?

<img src=images/008_loop.jpg />

---

## ordine da destra a sinistra degli outlet

Cosa succede quando da un outlet escono più cavi di connessione?

--

<img src=images/009_right_left.jpg />

--

Quando inseriamo un numero nel number box in alto, alla pressione del tasto invio il numero viene inviato agli outlet, producendo due possibili risultati: 
- Se il numero va prima a sinistra, entra nell'inlet sinistro dell'oggetto '+', che produce la somma del valore in entrata con 0 (se + non ha *creation argoment* si sottointende che il secondo addendo sia 0) e il risultato viene immediatamente inviato all'outlet. Dopo il secondo cavo porta il valore del number box nell'inlet freddo dell'oggetto più, senza produrre però messaggi in uscita.
- Se il numero va prima a destra, entra nell'inlet destro di '+', e imposta il secondo addendo dell'oggetto, subito dopo il valore entra nell'inlet sinistro, producendo la somma fra il valore in etrata a sinistra con quella entrato prima a destra e inviando la somma all'outlet
- segue...

--

- Il comportamento è `indeterminato` perché non sappiamo se il messaggio in uscita dall'outlet andrà prima al ramo sinistro o al ramo destro
- In realtà il messaggio viaggerà lungo il cavo che è stato creato prima, ma questo comportamento non è chiaro, bisogna trovare un sistema per ordinare in modo inequivocabile l'ordine di attraversamento dei cavi

--

<img src=images/010_trigger.jpg />

--

- L'oggetto `trigger` (abbreviato in **t**) ci permette di ordinare da destra a sinistra l'ordine di *spedizione* dei messaggi da uno stesso outlet, in modo da regolare il comportamento in modo totalmente deterministico
- il number box invia il valore inserito all'oggetto 't' che lo *smista* tramite i suoi outlet, prima a destra e poi a sinistra

---

## message box

Contiene tipicamente un messaggio, come abbiamo visto, o una sequenza di messaggi, che vanno separati dalla virgola
- Il seguente testo è un messaggio di tipo lista: 

$1$ $2$ $3$ $4$ $5$

- mentre il seguente sono 5 messaggi di tipo float:

$1$, $2$, $3$, $4$, $5$

---

A volte i messaggi possono essere separati dal punto e virgola (;). In questo caso bisognerà specificare un destinatario senza collegamento fisico

--

Oltre all'oggetto `receive` (abbreviato in **r**), ci sono altri oggetti che ricevono messaggi senza connessione diretta: array, tables, e anche pd stesso, che può ricevere messaggi di vario tipo, come l'accensione e lo spegnimento del motore DSP

--

<img src=images/011_semicolon.jpg />

---

I message box possono contenere variabili, che si denotano con il prefisso `$` seguito da un numero (1 per la prima variabile, 2 per la seconda e così via...)

--

<img src=images/012_variable.jpg />


