from PIL import Image, ImageOps
import os

folder = 'public/projects/fsae'
output_size = (800, 500)  # Final canvas size for all frames
padding = 30  # pixels of padding around the strut

# Step 1: Find the bounding box of the strut (non-background content) in each frame
# The background is dark grey. We'll threshold to find the strut.
bboxes = []
images_raw = []

for i in range(10):
    img_path = os.path.join(folder, f"top opt struts {i}.png")
    img = Image.open(img_path).convert("RGBA")
    images_raw.append(img)
    
    # Convert to greyscale and find non-dark pixels
    grey = img.convert("L")
    # The background is dark (~70-80), strut is light (~180+)
    # Use a threshold to isolate the strut
    binary = grey.point(lambda p: 255 if p > 120 else 0)
    bbox = binary.getbbox()
    if bbox:
        bboxes.append(bbox)
        print(f"Frame {i}: size={img.size}, strut_bbox={bbox}")
    else:
        bboxes.append((0, 0, img.size[0], img.size[1]))
        print(f"Frame {i}: size={img.size}, no bbox found, using full image")

# Step 2: For each frame, crop to the strut bbox with padding, then resize to a common size
frames = []
for i, (img, bbox) in enumerate(zip(images_raw, bboxes)):
    x1, y1, x2, y2 = bbox
    # Add padding
    x1 = max(0, x1 - padding)
    y1 = max(0, y1 - padding)
    x2 = min(img.size[0], x2 + padding)
    y2 = min(img.size[1], y2 + padding)
    
    cropped = img.crop((x1, y1, x2, y2))
    
    # Create a canvas of the output size with the dark background color
    canvas = Image.new("RGB", output_size, (68, 68, 68))  # Match the dark grey background
    
    # Fit the cropped strut into the canvas while maintaining aspect ratio
    cropped_rgb = cropped.convert("RGB")
    cropped_rgb.thumbnail(output_size, Image.LANCZOS)
    
    # Center on canvas
    paste_x = (output_size[0] - cropped_rgb.size[0]) // 2
    paste_y = (output_size[1] - cropped_rgb.size[1]) // 2
    canvas.paste(cropped_rgb, (paste_x, paste_y))
    
    frames.append(canvas)
    print(f"Frame {i}: cropped to {cropped.size}, placed at ({paste_x}, {paste_y})")

# Step 3: Save as GIF — fast cycling, pause on last frame
durations = [250] * 9 + [2500]
output_path = os.path.join(folder, "top_opt_iterations.gif")
frames[0].save(
    output_path,
    save_all=True,
    append_images=frames[1:],
    duration=durations,
    loop=0
)
print(f"\nSaved aligned GIF to {output_path}")
