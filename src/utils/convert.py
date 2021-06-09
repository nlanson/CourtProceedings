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
            self.image.load()
            self.image.save(self.outdir + str(i) + ".png", disposal=2, transparancy=0)



# Should build a pipe line that sets the character and iterates over each action dir and 
# finds gifs and automatically creates new folder and extracts frames.
# For the time being, it is done manually with an array

basedir = 'assets/sprites/edgeworth/'
unconvertedGifs = [
    {
        'file': basedir + 'bow/bow.gif',
        'outdir': basedir + 'bow/bow3/'
    }
]

for i in unconvertedGifs:
    extractor = GifFrameExtractor(i['file'], i['outdir'])
    extractor.extractFrames()


