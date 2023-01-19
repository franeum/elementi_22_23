#!/usr/bin/env python3

import os

if __name__ == "__main__":
    max = 1000
    min = 0
    current_attempt = max // 2

    os.system("clear")
    input(f"PENSA UN NUMERO compreso fra 0 e {max} E PREMI UN TASTO")

    counter = 0

    while True:
        attempt = input(f"È IL {current_attempt}? ").strip(None)

        if attempt == "troppo basso":
            min = current_attempt
            counter += 1
        elif attempt == "troppo alto":
            max = current_attempt
            counter += 1
        elif attempt == "si":
            print("MA QUANTO SO' BBRAVO!!!")
            counter += 1
            print(f"HO INDOVINATO IN {counter} TENTATIVI")
            break
        else:
            print(
                "non ti capisco; scrivi 'troppo basso' o 'troppo alto', oppure 'si' se la risposta è giusta")

        current_attempt = (min + max) // 2
