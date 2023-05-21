function generateCoverFromForm() {
    const title = document.getElementById('title').value || "ChatGPT";
    const titleOffset = document.getElementById('titleOffset').value || 0.24;
    const subtitle = document.getElementById('subtitle').value || "ChatGPT answers any questions.";
    const subtitleOffset = document.getElementById('subtitleOffset').value || 0.28;
    const titleUp = document.getElementById('titleUp').value || "【不学ChatGPT可能";
    const titleUpoffset = document.getElementById('titleUpOffset').value || 0.45;
    const titleDown = document.getElementById('title_down').value || "会失业】";
    const titleDownOffset = document.getElementById('titleDownOffset').value || 0.65;
    const author = document.getElementById('author').value;
    const authorOffset = document.getElementById('authorOffset').value || 0.36;
    const fontSize = document.getElementById('fontSize').value;
    const startColor = document.getElementById('startColor').value;
    const endColor = document.getElementById('endColor').value;
    const width = document.getElementById('width').value || 1080;
    const height = document.getElementById('height').value || 1440;

    const coverOptions = {
        size: { width: width, height: height },
        gradient: { start: startColor, end: endColor },
        texts: [
            { content: title, size: 90, color: "black", alignment: "center", offset: titleOffset, bold: false },
            { content: subtitle, size: 40, color: "black", alignment: "center", offset: subtitleOffset },
            { content: "by @" + author, size: 30, color: "black", alignment: "center", offset: authorOffset },
            { content: titleUp, size: parseInt(fontSize), color: "black", alignment: "center", offset: titleUpoffset },
            { content: titleDown, size: parseInt(fontSize), color: "black", alignment: "center", offset: titleDownOffset },
        ]
    };

    generateCover(coverOptions);
}

function generateCover(options) {
    const canvas = document.getElementById("myCanvas");
    canvas.width = options.size.width;
    canvas.height = options.size.height;
    const ctx = canvas.getContext("2d");

    fillGradient(ctx, options.size, options.gradient);

    options.texts.forEach((text) => addText(ctx, text, canvas));
}

function fillGradient(ctx, size, gradientColors) {
    const gradient = ctx.createLinearGradient(0, 0, size.width, size.height);
    gradient.addColorStop(0, gradientColors.start);
    gradient.addColorStop(1, gradientColors.end);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size.width, size.height);
}

function addText(ctx, textOptions, canvas) {
    ctx.font = textOptions.bold ? `bold ${textOptions.size}px Arial` : `${textOptions.size}px Arial`;
    ctx.fillStyle = textOptions.color;
    ctx.textAlign = textOptions.alignment;
    ctx.fillText(textOptions.content, canvas.width / 2, canvas.height * textOptions.offset);
}
