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

# porta logicha

circuito digitale in grado di implementare una particolare operazione logica di una o più variabili booleane.

---

In base al numero di ingressi, che rappresentano il numero di variabili che una porta logica può ricevere in input, le porte logiche si possono classificare in:

- porte a due variabili: `AND`, `OR`, `NOR`, `NAND` e altre...;  
- porte a singola variabile: `NOT` e `BUFFER`.

---

## AND
<img src=images_cmos/AND.svg width=360 />

---

## OR
<img src=images_cmos/OR.svg width=360 />

---

## OR
<img src=images_cmos/NOT.svg width=360 />

---

# CMOS

- tecnologia utilizzata in elettronica digitale per la progettazione di circuiti integrati
- replicano il comportamento delle porte logiche e delle loro combinazioni

---

# cd40106
contiene 6 invertitori (6 porte NOT), ognuna delle quali inverte il segnale in entrata

<img src=images_cmos/40106.jpg width=360 />

---

[NOT](https://www.falstad.com/circuit/circuitjs.html?ctz=CQAgjCAMB0l3BWcMBMcUHYMGZIA4UA2ATmIxAUgpABZsKBTAWjDACgB5WucMFW4oV78qkNgHMQKFDSl48UmSGzYhotgGNFstAuk75UKLHiQIKaNgJhCeEmARlIJY3HYB3bcK+6obTygIQr76Uvh+AE7KqmF6QbFGYKb+3FS+KsHhYp40PKz8uWlZbGB49KH5qd6i0Ehg0IRC2Jb0SGJcob58ell+APZGhLJUucQKbdAQVOwDxCBDRqPjxhCrbEA)

---

## proviamo

---