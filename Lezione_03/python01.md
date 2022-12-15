---

marp: true
size: 4:3
theme: gaia

---


# programmazione

---

- scienza (e arte) di scrivere **istruzioni** per un computer al fine di ottenere un risultato **utile**
- tali istruzioni sono scritte in un **linguaggio di programmazione** (leggibile dall'umano) e poi trasformate in **linguaggio macchina** (leggibile da un computer)

---

- le istruzioni solitamente compiono operazioni semplici:
  - effettuare una somma
  - stampare una stringa sul monitor
  - leggere un numero dalla tastiera
- ma molte istruzioni, opportunamente messe in sequenza, possono costituire complessi programmi
- i computer possono eseguire miliari di operazioni al secondo

---

## programma

- un **programma** è una sequenza di istruzioni elementari che operano su **dati**
- queste istruzioni sono `ordinate`

---

## ricetta

### pasta in bianco per 2 persone

- metti sul fuoco una pentola piena d'acqua
- aggiungi il sale (qb)
- quando l'acqua bolle, butta nella pentola 250 gr di pasta
- fai cuocere per 10 minuti circa
- scola
- aggiungi il burro
- servi

---

- una ricetta come la precedente ha un certo grado di flessibilità (*qb* significa *quanto basta*, quanta acqua devo usare? che significa circa?)
- la flessibilità spesso in un programma per computer significa **ambiguità**

---

## Esercizio
### qual è la media dei miei voti?

- quante soluzioni ci sono?
- quante e quali strategie?
- quali sono gli elementi coinvolti?
- sei in grado di descrivere *formalmente* i passi necessari per eseguire il calcolo?

---

- per evitare l'ambiguità i programmi per computer vengono scritti in un **linguaggio di programmazione**
- ...che consente di descrivere i passi di un algoritmo tramite 
  - un **lessico** (insieme di parole e simboli *legali*)
  - una **sintassi** (la forma con cui viene utilizzato il lessico)
  - una **semantica** (il significato che le forme sintattiche hanno)

---

- i programmi sono scritti in forma leggibile, con una notazione `testuale`
- ...ma poi devono essere **tradotti** in un linguaggio che sia comprensibile per un computer
- come la notazione musicale, che di per sé non produce alcun suono, deve essere tradotta in suono attraverso un'azione del musicista (il *suonare*)

---

- in un computer, il musicista è l'`hardware` digitale
- quel complesso di circuiti in grado di manipolare **segnali elettrici** che possono assumere un valore di voltaggio **positivo** o **nullo**

---

- questi segnali vengono *astratti* con la loro rappresentazione matematica:
  - `1` o `0`
- la più piccola unità informativa in un dispositivo digitale è costituita dal `bit`, che assume il valore di `1` o `0`
- ma solitamente molti bit vengono elaborati in parallelo
  - un gruppo di 8 bit si chiama `byte`

---

- Con un singolo bit si può rappresentare un'informazione *duale*:
  - vero (1) o falso (0)
  - online (1) o offline (0)
  - alto o basso
- Ma spesso è necessario rappresentare informazioni più complesse
- ...quindi i bit posso essere `raggruppati`

---

- un `bit` può rappresentare due simboli (due *possibilità*):
  - ⓪   ①
- 2 bit possono rappresentare 4 possibilità:
  - ⓪⓪ ⓪① ①⓪ ①①
- 4 bit possono rappresentare 8 possibilità:
  - ⓪⓪⓪ ⓪⓪① ⓪①⓪ ①⓪⓪ ⓪①① ①⓪① ①①⓪ ①①① 

---

- In generale, $N$ bit possono rappresentare $2^N$ possibilità
- una sequenza di bit può essere usata per rappresentare diverse `entità`

---

## numeri

- con una sequenza di N bit si può rappresentare un numero da $0$ a $N - 1$
- ad esempio, che numero in base 10 rappresenta la stringa binaria $10011$?

---

| bit      | 1             | 0           | 0           | 1           | 1           |
| -------- | ------------- | ----------- | ----------- | ----------- | ----------- |
| position | 4             | 3           | 2           | 1           | 0           |
| value    | $2^4\cdot{1}$ | $2^3\cdot0$ | $2^2\cdot0$ | $2^1\cdot1$ | $2^0\cdot1$ |
| result   | 16            | 0           | 0           | 2           | 1           |

la somma di tutti i valori da $19$

---

## caratteri

- Con sequenze di bit si possono rappresentare caratteri, che sono `internamente` associati a dei valori di 8 bit
- `HELLO!`:  

$01001000$ $01000101$  
$01001100$ $01001100$  
$0 1 0 0 1 1 1 1$ $0 0 1 0 0 0 0 1$

---

### Tutto può essere rappresentato con i numeri (binari)

- Audio
- Immagini
- Video

---

## CPU

- Al centro di tutto c'è la **cpu**, un pezzo di hardware costituito da miliardi di **transistor**, ognuno dei quali produce un valore di 1 o 0
- i transistor sono responsabili dell'esecuzione dei nostri programmi. Ogni numero rappresenta una istruzione, o un dato su cui operare

---

- Per fare in modo che un programma sia eseguito dalla CPU, deve essere convertito in **linguaggio macchina**, cioè una serie di istruzioni in formato binario

---

- Il processo di traduzione del **codice sorgente** in **linguaggio macchina** avviene attraverso un software chiamato **compilatore** oppure tramite un software chiamato **interprete**

---

- Nel primo caso (compilatore) il codice viene trasformato interamente in linguaggio macchina in modo preventivo (è come un libro tradotto)
- Nel secondo caso (interprete) il codice viene trasformato in linguaggio macchina man mano che viene scritto (è come un oratore che viene tradotto in tempo reale da un interprete di lingua)

---

- Esiste un terzo caso che ibrida le due forme precedenti, il codice viene compilato in un linguaggio intermedio che a sua volta viene interpretato
- Il linguaggio che impareremo in questo corso fa uso di questa terza metodologia

---

# Python

- Linguaggio di programmazione di alto (altissimo) livello creato da Guido van Rossum nel 1991
- Usato per fare **qualunque** cosa:
  - computazione numerica
  - *scripting*
  - applicazioni web
  - giochi
  - analisi dati
  - machine learning
  - gestione database

---

## caratteristiche principali

- software libero e *open source*
- multi-paradigma
- *cross-platform* e *portabile*
- facile, leggibile ed estremamente espressivo
- ricchissimo di librerie

---

## quanto si usa python?

<img src=images/coding.png>

---

## crescita
<img src=images/crescita.png>

---

## chi usa python?

- Google
- Instagram
- Facebook
- Dropbox
- mozilla
- Nasa
- Netflix
- e molti altri...

---

## Come si usa python?

- si *installa* l'interprete e:
  - si apre un terminale e si scrive il codice e si esegue riga per riga
  - si scrive un intero script e si esegue integralmente
  - si adotta un approccio ibrido:
    - si scrivono porzioni di codice e si eseguono *a frammenti*

---

## Anaconda

- distribuzione python specializzata in computazione scientifica
- contiene l'interprete python e numerose librerie per il calcolo scientifico e il software Jupyter, che useremo per scrivere il codice
- si installa prelevando i files al seguente [indirizzo](https://www.anaconda.com/products/individual)

---

# Primo programma
## stampiamo sullo schermo ```Hello World!```

---

## in c

```c
#include <stdio.h>

int main(void) {
  printf("Hello World!");
}
```

---

## in java

```java
package hello;

class Main {
  static void main(String[] args) {
    System.out.println("Hello World!");
  }
}
```

---

## in Javascript

```js
console.log("Hello World!");
```

---

## in python

```python
print("Hello World!")
```