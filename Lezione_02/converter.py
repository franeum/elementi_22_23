#!/usr/bin/env python3

import os
import sys
import glob
import librosa
import soundfile as sf
import warnings
warnings.filterwarnings("ignore")

if __name__=='__main__':
    if len(sys.argv) != 4:
        print('arguments are: source dir, dest dir, samplig frequency destination')
        sys.exit(1)
        
    source = sys.argv[1]
    dest = sys.argv[2]
    srate = int(sys.argv[3])
    
    if not os.path.isdir(dest):
        os.mkdir(dest)
        
    source_files = glob.glob(f"{source}/*.*")

    for file in source_files:
        src, sr = librosa.load(file, mono=False, sr=None)
        src = librosa.resample(src, sr, srate)
        dest_file = os.path.splitext(os.path.basename(file))[0]
        sf.write(f"{dest}/{dest_file}.wav", src.T, srate, subtype='PCM_24')
        print(f'[ Processing ] {file}')