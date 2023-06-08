from videoToFrames import get_frames
from detectColor import get_color_from_pixels, Frame_by_Pixels
from detectNums import detect_Num
import asyncio
from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip

# Set the path of your input video


def start(video):

    # Extract the video segment
    input_path = "path/to/input/video.mp4"

# Set the path for the output cropped video

# Set the start and end times in seconds
    start_time = 20
    end_time = 40
    crop_video = "./crop_video.mp4"
# Crop the crop_video
    ffmpeg_extract_subclip(video, start_time, end_time, targetname=crop_video)
    frames_names =   get_frames(crop_video)  # get all the images
    result = []  # create an array to store the dictionaries
    i = 0
    for img in frames_names:
        #img = {'name': frame_name}  # Create a dictionary with the 'name' key
        license_nums =   detect_Num(img)  # return a list of dictionaries with the pixels and plate numbers of all the cars in the image
        print("license_nums",license_nums)
        for memb in license_nums:
            print("memb",memb)
            pixels = memb['pixels']
            pixeled_pic = Frame_by_Pixels(pixels['xmax'], pixels['xmin'], pixels['ymax'], pixels['ymin'],i, img)  # create the pixeled images in the cropped folder
            print("pixeled_pic",pixeled_pic)
            if pixeled_pic ==None:
                continue
            i +=1
            print("pixeled_pic",pixeled_pic)
            color_name = get_color_from_pixels(pixeled_pic)  # get the color of this pixeled image

            # Create a dictionary with 'plate' and 'color' keys
            result_dict = {
                'plate': memb['plate'],
                'color': color_name
            }
            print("result_dict",result_dict)
            result.append(result_dict)  # add the dictionary to the result array

    print(result)

# coro = start('ss.mp4')
# asyncio.run(coro)
start('ss.mp4')
