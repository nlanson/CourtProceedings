from PIL import Image
import os

# Takes in a gif file and a directory to output the frames from the gif.
# Some transparent gifs wont work.
class GifFrameExtractor:
    def __init__(self, file, outdir):
        self.file = file
        self.outdir = outdir
        self.image = Image.open(self.file)
        self.frames = self.getFrameCount()
        self.createFolder()
    
    def getFrameCount(self):
        return self.image.n_frames

    def createFolder(self):
        if not os.path.exists(self.outdir):
            os.makedirs(self.outdir)
    
    def extractFrames(self):
        for i in range(self.frames):
            self.image.seek(i)
            self.image.save(self.outdir + str(i) + ".png")



# Batch process all the gifs in a char folder
rootdir = 'assets/sprites/edgeworth/'
for subdir, dirs, files in os.walk(rootdir):
    for file in files:
        if file.endswith('.gif'):
            outdir = os.path.join(subdir, file[0:len(file)-4]) + '/'
            file = os.path.join(subdir, file)
            e = GifFrameExtractor(file, outdir)
            e.extractFrames()





