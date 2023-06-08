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
Colors_name = {
    "[0, 0, 0]": 'Black',
    "[127, 127, 127]": 'Gray',
    "[255, 174, 201]": 'Pink',
    "[255, 201, 14]": 'Gold',
    "[185, 122, 87]": 'Brown',
    "[0, 162, 232]": 'Blue',
    "[34, 177, 76]": 'Green',
   "[195, 195, 195]": 'Light Gray',
    "[255, 127, 39]": 'Orange',
    "[255, 255, 255]": 'White',
    "[200, 191, 231]": 'Lavender',
    "[255, 242, 0]": 'Yellow',
    "[112, 146, 190]": 'Light Blue',
    "[136, 0, 21]": 'Red',
    "[237, 28, 36]": 'Red',
    "[203, 228, 253]": 'Light Blue',

    "[63, 72, 204]": 'Blue',
   "[195, 195, 195]": 'silver',
    "[239, 228, 176]": 'White',
    "[181, 230, 29]": 'Green',
    "[153, 217, 234]": 'Light Blue',
}


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
    array = np.array(smallest_distance)
    list_array = array.tolist()
    a = Colors_name[str(list_array[0])]
    return a




def Frame_by_Pixels(xmax, xmin, ymax,  ymin, i, image):
    img = cv2.imread(image)
    crop_img = img[ymin:ymax, xmin:xmax]
    if crop_img is None or crop_img.size == 0:
        return None  # Return the current value of i if the cropped image is empty
    filename = f"./cropped/cropped_image_{i}.jpg"
    cv2.imwrite(filename, crop_img)
    cv2.waitKey(0)
    return filename