from PIL import Image

desk = Image.open("assets/prosecution_desk.png")
background = Image.open("assets/prosecution_bg.jpg")

background.paste(desk, (0, 0), desk)
background.save('assets/bg_prosecution.png',"PNG")