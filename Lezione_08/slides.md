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
- Ogni oggetti ha un numero prefissato di entrate e uscite
- Alcune classi di oggetti hanno *inlet* e *outlet* definiti in base al numero di *creation argument*







