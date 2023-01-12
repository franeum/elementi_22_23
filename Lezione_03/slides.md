# ACUSTICA

---

# La generazione del suono dipende da almeno due elementi:
1.  Una sorgente sonora (un corpo in grado di vibrare: corde, pelli percussive, etc...)
2.  Un mezzo di propagazione (aria)

---

## La sorgente sonora può essere collegata a un `risonatore` che amplifica la vibrazione generata dalla sorgente stessa

---

## Il mezzo di propagazione possiede un certo grado di `elasticità`, che determina la velocità a cui il suono si propaga.

| materiale (21 gradi) | velocità in m/s |
|----------------------|-----------------|
| aria                 | 344             |
| acciaio              | 5000-5900       |
| acqua                | 1480            |
| calcestruzzo         | 3100            |

---

| materiale (21 gradi) | velocità in m/s |
|----------------------|-----------------|
| legno di olmo        | 4108            |
| legno di pino        | 3313            |
| Metano               | 430             |
| Piombo               | 1230            |
| Vetro                | 5500            |

---

## Eccitando la sorgente sonora:
1. si produce una vibrazione
2. che genera una zona di `compressione` delle molecole nel mezzo di propagazione
3. ...e una zona di `rarefazione`
4. tali zone si alternano dando vita all'`onda sonora`, o `onda di pressione sonora`

---

## L'onda sonora viaggia attraverso il mezzo di propagazione (tipicamente l'aria) e raggiunge l'orecchio, quindi il cervello, che la elabora convertendola in sensazione uditiva

---

## Le onde sonore viaggiano a una certa velocità, ma anche con una certa `forma`
1. periodica
2. aperiodica

---

# onda periodica

![](./images/sine.png)

---

# violino

![](./images/varie_onde.png)

---

# onda aperiodica (rumore)

![](./images/noise.jpeg)

---

## Quando un'onda è periodica possiamo percepire l'`altezza` del suono, quando è aperiodica l'altezza è il più delle volte indefinibile. L'altezza è quella qualità del suono che ci permette di affermare se un suono sia acuto o grave.

---

# Parametri dell'onda sonora periodica

---

## Periodo

- Intervallo di tempo necessario all'onda per completare un `ciclo`

![](./images/ciclo.png)

---

## ciclo 

Porzione di onda che va da un punto e arriva allo stesso punto dopo aver compiuto un percorso in cui l'onda tocca il suo massimo e il suo minimo. La distanza percorsa dall'onda per completare un `ciclo` si chiama `lunghezza d'onda` e si misura in centimetri o metri.

---

## frequenza

Quantità di cicli completati nell'unità di tempo (tipicamente il secondo). È inversamente proporzionale rispetto al periodo, quindi, se T è il periodo, la frequenza è uguale a 1/T, e si misura in Hertz (*Hz*)

---

## Esempio 1

Se un periodo T dura 0.001 secondi, quale sarà la sua frequenza?

---

1 / T = F
1 / 0.001 = 1000 Hz (oppure 1 KHz)

---

## Esempio 2

Se un'onda ha frequenza 440 Hz, quanto varrà T, cioè il periodo?

---

1 / F = T
1 / 440 = 0.0022727272727272726 secondi

---

# Intervallo di frequenze udibili

| < 20Hz     | 20Hz - 20000Hz | > 20000Hz  |
|------------|----------------|------------|
| infrasuoni | range udibile  | ultrasuoni |

---

## La frequenza determina la percezione dell'`altezza` di un suono

---

# Ampiezza

- Rappresenta lo `spostamento` delle particelle al passaggio dell'onda, rispetto alla propria posizione di equilibrio. 
- Oscilla fra valori positivi (zona di compressione) e valori negativi (zona di rarefazione)

---

![](./images/amplitude.svg)

---

## L'ampiezza determina la percezione dell'`intensità` di un suono

---

# Fase
- Indica la posizione in cui si trova il ciclo dell'onda in un determinato istante.
- Ha senso quando onde diverse vengono messe in relazione

---

![](./images/phase.svg)

---

![](./images/dephasing.svg)

---

# Somma di onde con stessa frequenza
- Se due sinusoidi sono `in fase`, la loro somma determina un raddoppio dell'ampiezza
- Se sono in controfase ?

---

![width:700px](./images/simple_sum.svg)

---

# somma di onde con frequenza diversa
- Abbiamo due casi possibili:
    1.  le onde hanno frequenze vicine
    2.  le onde hanno frequenze lontane

---

# Le onde hanno frequenze vicine
- Si ha il fenomeno dei `battimenti` quando la differenza fra le due frequenze è minore di 20 Hz
- Si percepisce un'onda risultante con un'oscillazione regolare dell'ampiezza

---

![](./images/batt_02.svg)

---


# Valori dell'onda risultante
- La frequenza dell'onda risultante è la media aritmetica fra le due frequenze
- La frequenza di oscillazione (detta `frequenza di battimento`) è pari alla differenza fra le frequenze d'origine

---

# Esempio
- Se sommiamo le seguenti onde: 440Hz e 444Hz, cosa otterremo?

---

# Forma d'onda
- Rappresentazione grafica dell'ampiezza del suono in funzione del tempo
- L'onda più semplice è la sinusoide
- Generalmente le forme d'onda sono il risultato di somme di onde semplici che danno vita a onde complesse

---

# Ampiezza istantanea, ampiezza di picco, ampiezza assoluta
- l'ampiezza istantanea rappresenta il valore d'ampiezza in un dato punto
- l'ampiezza di picco indica l'ampiezza massima
- l'ampiezza assoluta indica la differenza fra l'ampiezza massima e l'ampiezza minima

---

![](./images/waveform.svg)

---

# Timbro
- Le forme d'onda complesse danno origine al timbro, che ci permette di distinguere un suono da un altro, a parità di frequenza e ampiezza.
- Gli strumenti sono caratterizzati da forme d'onda specifiche, quindi da timbri caratteristici

---

# Timbro (2)
- Non possiamo `vedere` il timbro dalla forma d'onda, quindi abbiamo bisogno di altri strumenti di analisi

---

# Spettrogramma
- Permette di analizzare (e visualizzare) lo spettro di un suono, cioè le sue componenti `frequenziali`

---

![](./images/spectrogram.svg)

---

# Inviluppo
- Costituisce il profilo d'ampiezza di un suono da quando inizia a quando termina.
- Caratterizzato da 4 fasi fasi chiamate `transitori`:
    1. Attacco (`attack`)
    2. Decadimento (`decay`)
    3. Sostegno (`sustain`)
    4. Rilascio (`release`)

---

![](./images/adsr.svg)

---

# Attack
Descrive il periodo di tempo in cui il suono nasce e raggiunge il suo culmine d'ampiezza

---

# Decay
Descrive il periodo che seguen l'attacco, in cui l'ampiezza decade fino a raggiungere il livello del sostegno

---

# Sustain
L'ampiezza si mantiene generalmente stabile

---

# Rilascio
Il suono decade fino a scomparire

---

![width:700](./images/envelope.svg)

---

# Inviluppo (2)
Non tutti i suoni possiedono i 4 transitori. In linea di massima, ogni suono nasce e muore, quindi ha attacco e rilascio, ma non necessariamente possiede i transitori di decadimento e sostegno.

---

# Inviluppo (3)
- Gli strumenti a percussione hanno attacco e rilascio
- flauto e violino hanno tutti e 4 i transitori

---

# Intensità

---

## Ascoltiamo due suoni

- suono 1
<audio controls>
  <source src="./SOUNDS/suono1.mp3" type="audio/mpeg">
</audio> 

- suono 2
<audio controls>
  <source src="./SOUNDS/suono2.mp3" type="audio/mpeg">
</audio> 

---

## Quale dei due suona più `naturale`?

---

![width:700](./images/amp_lineare.svg)

---

![width:700](./images/amp_log.svg)

---

## crescendo

<audio controls>
  <source src="./SOUNDS/crescendo.mp3" type="audio/mpeg">
</audio> 

---

### Il `crescendo` del suono 2 risulta più `naturale` perché non procede linearmente, ma `logaritmicamente`

---

### I logaortmi sono alla base della misurazione dell'intensità sonora

---

### Per misurare la pressione sonora si usa il `Pascal`
- corrisponde a 1 `newton` per metro quadrato
- consente di misurare la pressione in ordini di grandezza molto diversi

---

| suono/rumore          | quantità in Pa |
|-----------------------|----------------|
| lancio di un missile  | 20000          |
| rottura del timpano   | 2000           |
| soglia del dolore     | 63.2           |
| concerto Rock         | 20             |
| martello pneumatico   | 0.632          |
| traffico cittadino    | 0.2            |
| conversazione normale | 0.02           |
| fruscio di foglie     | 0.000632       |
| soglia di udibilità   | 0.00002        |

---

## Questi valori non sono molto utili
- C'è troppa differenza
- ...quindi non si percepisce 
- Non è comoda da utilizzare

---

## Si usa quindi il `rapporto` fra un valore della pressione sonora (qualunque) e un altra usato come riferimento

---

## Il valore di riferimento è la `soglia di udibilità` misurata in Pascal:
~ 0.00002

---

### Per calcolare il rapporto fra il rumore provocato dal lancio di un missile e la soglia di udibilità potremmo fare:

20000 / 0.00002 = 100000000 => 100 milioni

---

### Se possibile, abbiamo peggiorato la situazione, ma esiste uno strumento che ci permette di semplificare (e comprimere) la rappresentazione dei rapporti: il `logaritmo`

---

# Logaritmo

---

## E' l'esponente a cui dobbiamo elevare un valore per ottenerne un altro.

si abbia:

$$ a = b^x $$

dove $a$ è il valore, $b$ è la base e $x$ è l'esponente. Il logaritmo ci permette di ottenere $x$ a partire dalla base $b$ e dal valore $a$

---

$$ x = \log_b(a) $$

---

### Usando i rapporti e i logaritmi possiamo costruire una nuova scala di valori, basata sul Bel

$$ B = \log_{10}(p/p_{ref}) $$

--- 

### Effettivamente il Bel è un esponente, infatti:

$$ 10^{(p/p_{ref})} = B $$

---

### Sulla base di questa formula possiamo calcolare i Bel del suono del lancio di un missile (20000 Pascal)

$$ Bel = \log_{10}(20000/0.00002) $$
$$ Bel = \log_{10}(100000000) $$
$$ Bel = 8 $$

---

## Al contrario:

$$ 10^8 = 100000000 $$

---

## Generalmente per quantificare le potenze e le intensità si usa il deciBel, che è la decima perte del Bel. 
- per ottenere i decibel basta moltiplicare i Bel per 10, la formula quindi diventa:

$$ deciBel = 10 \cdot \log_{10}(p/p_{ref}) $$

---

### Questa formula è adatta a quantificare la potenza e l'intensità, ma non la pressione. Per quest'ultima quantità è necessario applicare il logaritmo alla potenza del rapporto:

$$ deciBel = 10 \cdot \log_{10}(p/p_{ref})^2 $$

Dato che, per le proprietà dei logaritmi, si ha:

$$ \log(x \cdot y) = \log x + \log y $$

la formula precedente si può semplificare in questo modo:

$$ deciBel = 10 \cdot \log_{10}(p/p_{ref}) \cdot 2 $$

---

# Sound Pressure Level

$$ dB_{SPL} = 20 \cdot \log_{10}(p/p_{ref}) $$

--- 

## Nel digitale...

- Come sappiamo, il `range` di valori ammessi in ampiezza va da -1 a 1
- 1 è il valore massimo, -1 è il massimo sul campo dei positivi, 0 è assenza di segnale
- quindi possiamo affermare che l'ampiezza del segnale va da 0 (assenza) a 1 (massimo segnale)

---

Per calcolare l'intensità e la pressione sonora nel digitale si usano le seguenti due formule:

$$ 10 * log_{10} A $$
$$ 20 * log_{10} A $$

dove $A$ rappresenta l'ampiezza

--- 

## Se l'ampiezza va da 0 a 1, la scala dei deciBel in un sistema digitale va da -inf a 0 

