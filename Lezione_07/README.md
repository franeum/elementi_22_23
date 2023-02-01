## deps

```bash
pip install python-rtmidi
pip install mido
```

## sound engine

open cadence and run, then open (and run) `qsynth`

## import midi file

```py
import mido

path = "./988-aria.mid"
mid = mido.MidiFile(path)
```

## visualizing first 100 notes of track 1

```py
for note in list(mid.tracks[1][:100]):
    print(note)
```

## playback

```py
p = mido.get_output_names()[-1]
port = mido.open_output(p)

for message in mid.play():
    port.send(message)
    print(message)

port.close()
```
