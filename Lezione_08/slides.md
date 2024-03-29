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

- Un messaggio è costituito da un `selettore` e da un certo numero di `argomenti` (da 0 a molti)
- Il selettore è un atomo di tipo *symbol*, cioè una stringa (non numerica) priva di spazi, virgola o punto e virgola
- Gli argomenti possono essere atomi di tipo simbolo o atomi numerici
    - I numeri in Pd sono float a 32 bit, in modo da poter rappresentare valori fra -16777216 e 16777216
    - Non esistono numeri interi, ma solo con la virgola (a differenza di Max dove esistono sia gli interi che i float)

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

---

## oggetti utili

- *random*
- *+*,*-*,*/*,*\**, *pow*
- *select*
- *trigger*
- *print*
- *metro*

---

## oggetti midi

- *makenote*
- *noteout* 

---

### esercizi
1. crea una patch che alla pressione di un bang generi un numero casuale fra 0 e 999
2. Crea una patch che alla pressione di un bang generi un numero casuale fra 500 e 1499
3. crea una patch che generi una nota MIDI pari a 60, della durata di 1000 millisecondi con *velocity* 100
3. Crea una patch che tramite un *metro* generi ogni secondo una nota MIDI casuale compresa fra 48 e 72 (compreso). Ogni nota dura 1000 millisecondi e ha *velocity* pari a 100

---

1. Crea una patch che generi numeri casuali compresi fra zero e 3 (incluso) e che accenda 4 bang messi in fila. Il primo bang viene acceso quando se il numero generato è 0, il secondo se il numero è 1 e così via...
2. La seguente funzione converte una nota MIDI in un valore di frequenza in Hz: $$440 * 2^{(m - 69)/12}$$ implementa questa funzione in patch, dove $m$ è la nota MIDI in entrata, impostabile tramite *number box*

---

## segnali audio

---

In Pd si può:
1. sintetizzare suoni
2. analizzare suoni in entrata
3. elaborare suoni entrata al fine di produrre audio trasformato in uscita
4. integrare elaborazione audio con altri media

---

- I segnali audio in pd sono rappresentati con numeri float a 32 bit. Con questa quantità abbiamo a disposizione $2^{32}$ possibili variazioni dinamiche su un singolo campione.
- Le schede audio, generalmente, campionano l'audio a 16 o 24 bit, quindi i 32 bit di pd sono più che sufficienti per non perdere qualità
- I suoni in etrata saranno sempre compresi fra -1 e 1, come quelli in uscita. In caso di uscite con audio di ampiezza superiore saranno tagliati in modo da rientrarein quel range

---

La frequenza di campionamento è di *default* pari a 44100 Hz, ma può essere impostata diversamente all'occorrenza (dalla finestra delle opzioni audio)

---

- Pd può leggere file in vari formati: WAV, AIFF, AU, ma non mp3
- Se si vuole leggere un mp3, è necessario prima convertirlo in un formato compatibile

---

## oggetti con la ~ (tilde) e connessioni audio

La computazione audio è svolta dagli oggetti con la tilde, che comunicano fra loro attraverso connessioni visibili, più *spesse* di quelle per i messaggi

---

Quando il DSP viene attivato:
1. pd ordina gli oggetti audio in un grafo
2. passa l'audio da un oggetto all'altro in blocchi da 64 campioni, alla frequenza di campionamento

Se, ad esempio, la frequenza di campionamento è 44100 Hz, verranno elaborati in un secondo 689 pacchetti (circa) da 64 campioni. L'elaborazione dura quindi 1.45 millisecondi.

---

- È un errore connettere un outlet audio a un inlet non-audio. 
- Non è sempre vero viceversa. Gli inlet degli oggetti audio possono infatti ricevere sia segnale audio che messaggi. Questi ultimi saranno convertiti internamente in segnale.

---

- Il grafo delle connessioni DEVE essere `aciclico`, ossia non deve contenere cicli: le connessioni non possono essere in loop 

<img src=images/013_cyclic_audio.jpg />

---

## conversione segnale/messaggi e messaggi/segnale

- Si può convertire esplicitamente un messaggio in un segnale audio con l'oggetto `sig~`
- Oggetti come *osc~*, *phasor~*, *+~*, **~* e altri possono ricevere un messaggio e convertirlo implicitamente (cioè internamente)
- Si può convertire un segnale audio in un messaggio solo se abbiamo un meccanismo di campionamento, cioè un sistema che ci permetta di catturare un singolo campione in un dato momento
- l'oggetto `snapshot~` effettua questa operazione
- si può anche scrivere il segnale in un array (tabella di valori) e accedere a quei valori successivamente come semplici valori numerici

--

<img src=images/014_snapshot.jpg />

---

## connessioni di segnali non locali

- Il segnale può essere passato *non localmente*: per esempio da una finestra all'altra o al fine di creare loop audio
- Gli oggetti che permettono di passare l'audio non localmente sono `send~/receive~` (abbreviati rispettivamente in s~ e r~), `throw~/catch~`, `delwrite~/delread~`

--

<img src=images/015_loop_audio.jpg />

---

## il tempo

Pd usa numeri float a 64 bit per rappresentare il tempo, permettendo un trattamento molto accurato, anche se all'utente il tempo è rappresentato in millisecondi

---

### audio e messaggi

- Audio e messaggi sono interconnessi, l'elaborazione audio è programmata ogni 64 campioni, quindi, se siamo a 44100, ci sarà un'elaborazione ogni 1.45 millisecondi
- Si può accendere e spegnere il DSP con un messaggio:
    - per attivare: pd dsp 1
    - per disattivare: pd dsp 0
- L'esecuzione di messaggi avviene fra l'elaborazione di un blocco audio e l'altro, mai durante un blocco

---

## subpatches

Pd offre due meccanismi per incapsulare funzioni e comportamenti
1. *una-tantum subpatch*
2. *abstraction*

In entrambi i casi la subpatch appare nella patch come un object box

--

### una tantum subpatch

Si crea nominando un *object box* con l'atomo `pd` seguito da un symbol arbitrario e al suo interno si creano gli oggetti inlet e outlet per permettere all'oggetto di *parlare* con la patch madre

--

<img src=images/017_sum10.jpg />

--

<img src=images/016_subpatch_sum10.jpg />

---

Si possono creare anche *subpatch* audio; al loro interno si troveranno gli oggetti `inlet~` e `outlet~`

---

### abstraction

Simili alle subpatch una tantum, se ne differenziano perché sono salvate su file e possono essere caricate da qualunque patch (senza bisogno del prefisso pd)

---

<img src=images/018_abstraction.jpg />

---

### graph on parent

- Si possono creare subpatch o abstraction *grafiche* usando l'opzione *graph on parent*. Col tasto destro del mouse di un'abstraction ( su una una tantum subpatch) si sceglie graph on parent (o *Mostra sulla parent*) nella finestra delle proprietà e si imposta una porzione di finestra che verrà visualizzata sulla *parent*
- Tutte le GUI presenti all'interno di quella porzione verranno visualizzate sulla *parent*

--

<img src=images/019_graphonparent.jpg />

---

## arrays

Gli *array* in pd si possono creare in due modi:
1. dal menu put (e in questo caso avremo un array visibile in path)
2. tramite l'oggetto `array` (in questo caso la parte visibile dell'array sarà incapsulata all'interno dell'oggetto)