import pickle
import re
import pandas as pd
import parselmouth

def extract_audio_features(audio_file):
    sound = parselmouth.Sound(audio_file)
    pitch = sound.to_pitch()
    pulses = parselmouth.praat.call([sound, pitch], "To PointProcess (cc)")
    voice_report_str = parselmouth.praat.call([sound, pitch, pulses], "Voice report", 0.0, 0.0, 75, 600, 1.3, 1.6, 0.03, 0.45)

    s = re.findall(r'-?\d+.?\d*', voice_report_str)
    row = [
        '1', s[21], s[22]+'E'+s[23], s[24], s[26], s[27], s[28], s[29],
        s[31], s[33], s[35], s[36], s[37], s[38], s[39], s[3], s[4],
        s[5], s[6], s[7], s[8], s[9], s[10]+'E'+s[11], s[12]+'E'+s[13]
    ]
    return row


def test_extract_audio_features():
    audio_file_path = "flask/audio_file.wav"
    features = extract_audio_features(audio_file_path)
    print(features)


test_extract_audio_features()