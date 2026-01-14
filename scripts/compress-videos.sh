#!/bin/bash

cd /Users/eladnissim/Desktop/karela-agency/public

echo "Starting video compression..."

find . -type f \( -name "*.mp4" -o -name "*.mov" \) | while read -r video; do
    # Get size in bytes
    size=$(stat -f%z "$video" 2>/dev/null)

    # Skip if under 50MB or can't get size
    if [ -z "$size" ] || [ "$size" -lt 52428800 ]; then
        continue
    fi

    size_mb=$(echo "scale=1; $size/1048576" | bc)
    echo ""
    echo "Compressing: $video (${size_mb}MB)"

    # Create temp output
    temp="${video%.mp4}_temp.mp4"
    temp="${temp%.mov}_temp.mp4"

    # Compress
    ffmpeg -i "$video" \
        -vf "scale=1280:-2" \
        -c:v libx264 \
        -crf 28 \
        -preset fast \
        -c:a aac \
        -b:a 128k \
        -movflags +faststart \
        -y "$temp" 2>/dev/null

    # Check if output is valid
    if [ -f "$temp" ]; then
        new_size=$(stat -f%z "$temp" 2>/dev/null)
        if [ -n "$new_size" ] && [ "$new_size" -gt 1000 ]; then
            new_mb=$(echo "scale=1; $new_size/1048576" | bc)
            echo "  ${size_mb}MB -> ${new_mb}MB"
            rm "$video"
            mv "$temp" "${video%.mov}.mp4"
        else
            echo "  Failed - keeping original"
            rm -f "$temp"
        fi
    else
        echo "  Failed - keeping original"
    fi
done

echo ""
echo "Done!"
