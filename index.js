/* copyright 2020, stefano bovio @allyoucanmap. */

function Mark(option) {
    const translate = option.translate || function(x, y) { return [x, y]; };
    const color = option.color || function(x, y) { return '#333333'; };
    const x = option.x || 0;
    const y = option.y || 0;
    const size = option.size || 1;
    const draw = option.draw;
    this.frame = 0;
    this.loop = function(ctx) {
        const frame = this.frame;
        const _translate = translate(x, y, frame);
        const _draw = draw(frame);
        ctx.fillStyle = color(frame);
        ctx.save();
        ctx.translate(_translate[0], _translate[1]);
        ctx.fillRect(_draw[0] - size / 2, _draw[1] - size / 2, size, size);
        ctx.restore();
        this.frame += 0.15;
    };
}

const hsl = function(h, s, l) {
    return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
};

const buttons = [
    {
        name: 'U',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x, y];
                },
                draw: function(frame) {
                    return [
                        Math.sin(frame) * frame,
                        Math.cos(frame) * frame * Math.cos(frame)
                    ];
                }
            };
        }
    },
    {
        name: '8',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x, y];
                },
                draw: function(frame) {
                    return [
                        Math.sin(frame) * frame * Math.cos(frame),
                        Math.cos(frame) * frame
                    ];
                }
            };
        }
    },
    {
        name: '@',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x, y];
                },
                draw: function(frame) {
                    return [
                        Math.sin(frame) * frame,
                        Math.cos(frame) * frame
                    ];
                }
            };
        }
    },
    {
        name: '7',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x, y + frame];
                },
                draw: function(frame) {
                    return [
                        Math.tan(frame * 0.5) * frame * 0.5,
                        Math.sin(frame) * frame
                    ];
                }
            };
        }
    },
    {
        name: '+',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x + Math.sin(frame), y + Math.cos(frame)];
                },
                draw: function(frame) {
                    return [
                        Math.tan(frame) + Math.tan(frame),
                        frame / Math.sin(frame) * Math.cos(frame)
                    ];
                }
            };
        }
    },
    {
        name: 'x',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x + Math.tan(frame), y + Math.tan(frame)];
                },
                draw: function(frame) {
                    return [
                        Math.sin(frame) * frame,
                        Math.cos(frame) * frame * Math.sin(frame)
                    ];
                }
            };
        }
    },
    {
        name: '<',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x + frame, y - frame];
                },
                draw: function(frame) {
                    return [
                        Math.sin(frame) * frame * Math.cos(frame),
                        Math.cos(frame) * frame
                    ];
                }
            };
        }
    },
    {
        name: '>',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x - frame, y - frame];
                },
                draw: function(frame) {
                    return [
                        Math.sin(frame) * frame,
                        Math.cos(frame) * frame * Math.cos(frame)
                    ];
                }
            };
        }
    },
    {
        name: '%',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x - frame * Math.sin(frame), y];
                },
                draw: function(frame) {
                    return [
                        Math.cos(frame) * frame,
                        Math.sin(frame) * frame * Math.sin(frame)
                    ];
                }
            };
        }
    },
    {
        name: '-',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x, y];
                },
                draw: function(frame) {
                    return [
                        -Math.cosh(frame) * frame,
                        Math.sin(frame) * frame
                    ];
                }
            };
        }
    },
    {
        name: 'z',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x, y];
                },
                draw: function(frame) {
                    return [
                        -Math.cos(frame) * frame * Math.cos(frame) * Math.sin(frame),
                        Math.sin(frame) * frame
                    ];
                }
            };
        }
    },
    {
        name: 'V',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x, y];
                },
                draw: function(frame) {
                    return [
                        Math.sin(frame) * frame,
                        Math.cos(frame) - frame
                    ];
                }
            };
        }
    },
    {
        name: '^',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x, y + frame];
                },
                draw: function(frame) {
                    return [
                        Math.sin(frame) * frame * Math.cos(frame),
                        Math.sin(frame) + frame
                    ];
                }
            };
        }
    },
    {
        name: 'D',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x - frame, y - frame];
                },
                draw: function(frame) {
                    return [
                        Math.cos(frame) * frame * Math.cos(frame),
                        -Math.cos(frame) - frame * Math.sin(frame)
                    ];
                }
            };
        }
    },
    {
        name: 'o',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x + Math.sin(frame) * 0.5, y + Math.cos(frame) * 0.5];
                },
                draw: function(frame) {
                    return [
                        Math.tan(frame) * frame * 2,
                        Math.cos(frame) * frame
                    ];
                }
            };
        }
    },
    {
        name: '|',
        func: function(x, y, color) {
            return {
                x: x,
                y: y,
                color: function() {
                    return color;
                },
                translate: function(x, y, frame) {
                    return [x + Math.sin(frame) * 0.5, y + Math.cos(frame) * 0.5];
                },
                draw: function(frame) {
                    return [
                        Math.sin(frame) * frame * 2,
                        Math.cosh(frame) * frame
                    ];
                }
            };
        }
    }
];

var brush = null;

var color = {
    h: 256,
    s: 85,
    l: 0
};

const container = document.createElement('div');
container.style.position = 'relative';
container.style.display = 'inline-block';
container.style.width = '512px';
container.style.padding = '8px';
container.style.border = '1px solid #ddd';
const canvas = document.createElement('canvas');
canvas.style.width = '512px';
canvas.style.height = '512px';
canvas.setAttribute('width', 512);
canvas.setAttribute('height', 512);
const toolbar = document.createElement('div');
toolbar.style.marginBottom = '8px';

for (var i = 0; i < buttons.length; i ++) {
    const btn = buttons[i];
    const button = document.createElement('button');
    button.style.width = '32px';
    button.style.height = '32px';
    button.style.boxShadow = 'none';
    button.style.background = '#f2f2f2';
    button.innerHTML = btn.name;
    button.addEventListener('click', function() {
        brush = btn;
        const btns = document.querySelectorAll('button');
        for (var j = 0; j < btns.length; j ++) {
            btns[j].style.background = '#f2f2f2';
        }
        button.style.background = '#fdff56';
    });
    toolbar.appendChild(button);
}

const picker = document.createElement('div');
picker.style.marginTop = '8px';
picker.style.display = 'flex';
picker.style.alignItems = 'center';

const swatch = document.createElement('div');
swatch.style.width = '16px';
swatch.style.height = '16px';
swatch.style.background = hsl(color.h, color.s, color.l);

const h = document.createElement('input');
h.setAttribute('type', 'range');
h.setAttribute('min', 0);
h.setAttribute('max', 360);
h.style.flex = 1;
h.defaultValue = color.h;
h.addEventListener('change', function(event) {
    color.h = event.target.value;
    swatch.style.background = hsl(color.h, color.s, color.l);
});

const l = document.createElement('input');
l.setAttribute('type', 'range');
l.setAttribute('min', 0);
l.setAttribute('max', 100);
l.style.flex = 1;
l.defaultValue = color.l;
l.addEventListener('change', function(event) {
    color.l = event.target.value;
    swatch.style.background = hsl(color.h, color.s, color.l);
});

const s = document.createElement('input');
s.setAttribute('type', 'range');
s.setAttribute('min', 0);
s.setAttribute('max', 100);
s.style.flex = 1;
s.defaultValue = color.s;
s.addEventListener('change', function(event) {
    color.s = event.target.value;
    swatch.style.background = hsl(color.h, color.s, color.l);
});

picker.appendChild(swatch);
picker.appendChild(h);
picker.appendChild(s);
picker.appendChild(l);

container.appendChild(toolbar);
container.appendChild(canvas);
container.appendChild(picker);

document.body.appendChild(container);

const ctx = canvas.getContext('2d');

ctx.fillStyle = '#f2f2f2';
ctx.fillRect(0, 0, 512, 512);

var marks = [];

canvas.addEventListener('click', function(event) {
    if (brush) {
        const box = canvas.getBoundingClientRect();
        const clientX = event.clientX - box.left;
        const clientY = event.clientY - box.top;
        console.log(brush);
        const options = brush.func(clientX, clientY, hsl(color.h, color.s, color.l));
        marks.push(new Mark(options));
    }
});

const loop = function(draw, fps) {
    var frame = 0;
    var time = 0;
    var currentTime = Date.now();
    var lastTime = currentTime;
    var delta = 0;
    const start = function() {
        timeout = setTimeout(function() {
            animation = requestAnimationFrame(start);
        }, 1000 / (fps || 30));
        currentTime = Date.now();
        draw(delta);
        delta = (currentTime - lastTime) / 1000;
        fps = Math.round(1 / delta);
        time += delta;
        lastTime = currentTime;
        frame++;
    };
    start();
};

loop(function() {
    for (mark of marks) {
        mark.loop(ctx);
    }
});
