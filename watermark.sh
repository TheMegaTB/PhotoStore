#!/bin/sh
INPUT=$1

WMSIZE=330
WMTEXT="MUSTER"
WMTSIZE=60


convert -size $((${WMSIZE}+100))x$((${WMSIZE}-100)) xc:none -font Ubuntu-Mono-Nerd-Font-Windows-Compatible -pointsize ${WMTSIZE} -kerning 1 -gravity center -fill black -annotate ${WMSIZE}x${WMSIZE}+0+0 ${WMTEXT} -fill white -annotate ${WMSIZE}x${WMSIZE}+2+2 ${WMTEXT}  miff:- |\
    composite -dissolve 60% -tile - ${INPUT} -depth 8 -colors 16 +dither png8:"marked_${INPUT}.png"
