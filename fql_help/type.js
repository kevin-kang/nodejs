const type = function(o) {
    let s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

['Null',
    'Undefined',
    'Object',
    'Array',
    'String',
    'Number',
    'Boolean',
    'Function',
    'RegExp',
    'NaN',
    'Infinite'
].forEach(t => {
    type['is' + t] = function(o) {
        return type(o) === t.toLowerCase();
    };
});

module.exports = type;