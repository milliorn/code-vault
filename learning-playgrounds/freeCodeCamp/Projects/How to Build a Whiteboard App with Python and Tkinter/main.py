import tkinter as tk
from tkinter.colorchooser import askcolor

# global variables
is_drawing = False
drawing_color = "black"
line_width = 2
prev_x = 0  # Initialize prev_x
prev_y = 0  # Initialize prev_y


# start drawing when the left mouse button is pressed
def start_drawing(event):
    global is_drawing, prev_x, prev_y
    is_drawing = True
    prev_x, prev_y = event.x, event.y


# draw lines when the left mouse button is held down and the mouse is moved
def draw(event):
    global is_drawing, prev_x, prev_y
    if is_drawing:
        current_x, current_y = event.x, event.y
        # create a line on the canvas
        canvas.create_line(
            prev_x,
            prev_y,
            current_x,
            current_y,
            fill=drawing_color,
            width=line_width,
            capstyle=tk.ROUND,
            smooth=True,
        )
        prev_x, prev_y = current_x, current_y


# stop drawing when the left mouse button is released
def stop_drawing(event):
    global is_drawing
    is_drawing = False


# change the pen color using the colorchooser
def change_pen_color():
    global drawing_color
    color = askcolor()[1]  # Open the colorchooser and get the selected color
    if color:
        drawing_color = color


# change the line width using a slider
def change_line_width(value):
    global line_width
    line_width = int(value)


# create the main application window
root = tk.Tk()
root.title("Whiteboard App")

# create a canvas for drawing
canvas = tk.Canvas(root, bg="white")
canvas.pack(fill="both", expand=True)

# set initial size of the window
root.geometry("800x600")

# create a frame for control buttons
controls_frame = tk.Frame(root)
controls_frame.pack(side="top", fill="x")

# create a button to change the pen color
color_button = tk.Button(
    controls_frame, text="Change Color", command=change_pen_color)
# create a button to clear the canvas
clear_button = tk.Button(
    controls_frame, text="Clear Canvas", command=lambda: canvas.delete("all")
)

# pack the buttons in the control frame
color_button.pack(side="left", padx=5, pady=5)
clear_button.pack(side="left", padx=5, pady=5)

# create a label for line width
line_width_label = tk.Label(controls_frame, text="Line Width:")
line_width_label.pack(side="left", padx=5, pady=5)

# create a slider to adjust the line width
line_width_slider = tk.Scale(
    controls_frame,
    from_=1,
    to=10,
    orient="horizontal",
    command=lambda val: change_line_width(val),
)
line_width_slider.set(line_width)
line_width_slider.pack(side="left", padx=5, pady=5)

# bind mouse events to canvas and start the main application loop
canvas.bind("<Button-1>", start_drawing)
canvas.bind("<B1-Motion>", draw)
canvas.bind("<ButtonRelease-1>", stop_drawing)
root.mainloop()
