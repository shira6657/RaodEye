import cv2
import numpy as np
import os

def get_frames(video):
    # Playing video from file:
    cap = cv2.VideoCapture(video)

    try:
        if not os.path.exists('data'):
            os.makedirs('data')
    except OSError:
        print('Error: Creating directory of data')

    frame_rate = cap.get(cv2.CAP_PROP_FPS)
    interval = int(frame_rate * 1)  # Interval of 2 seconds

    current_frame = 0
    images_names = []
    while True:
        # Set the capture position to the desired frame index
        cap.set(cv2.CAP_PROP_POS_FRAMES, current_frame)

        # Capture frame-by-frame
        ret, frame = cap.read()
        
        if ret:
            # Saves image of the current frame in jpg file
            name = './data/frame' + str(current_frame) + '.jpg'
            images_names.append(name)
            cv2.imwrite(name, frame)

            # Increment the frame index by the interval
            current_frame += interval
        else:
            break

    # When everything is done, release the capture
    cap.release()
    cv2.destroyAllWindows()
    return images_names


