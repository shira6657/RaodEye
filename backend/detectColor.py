import cv2
import numpy as np
import os

Colors = [
    [0, 0, 0],
    [127, 127, 127],
    [136, 0, 21],
    [237, 28, 36],
    [255, 127, 39],
    [255, 242, 0],
    [34, 177, 76],
    [203, 228, 253],
    [0, 162, 232],
    [63, 72, 204],
    [255, 255, 255],
    [195, 195, 195],
    [185, 122, 87],
    [255, 174, 201],
    [255, 201, 14],
    [239, 228, 176],
    [181, 230, 29],
    [153, 217, 234],
    [112, 146, 190],
    [200, 191, 231]
]

def get_color_from_pixels(image):
    frame = cv2.imread(image)

    if frame is None or frame.size == 0:
        return None  # Return None if the cropped image is empty
    average_color = np.average(np.average(frame, axis=0), axis=0)
    color = tuple(average_color.astype(int))
    color_name = rgb_to_color_name(color)
    return color_name


def rgb_to_color_name(color):
    colors = np.array(Colors)
    color = np.array(color)
    distances = np.sqrt(np.sum((colors - color) ** 2, axis=1))
    index_of_smallest = np.where(distances == np.amin(distances))
    smallest_distance = colors[index_of_smallest]
    return smallest_distance




def Frame_by_Pixels(xmax, xmin, ymax,  ymin, i, image):
    img = cv2.imread(image)
    crop_img = img[ymin:ymax, xmin:xmax]
    if crop_img is None or crop_img.size == 0:
        return None  # Return the current value of i if the cropped image is empty
    filename = f"./cropped/cropped_image_{i}.jpg"
    cv2.imwrite(filename, crop_img)
    cv2.waitKey(0)
    return filename