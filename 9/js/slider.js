const createSlider = function(elm, input) {
  noUiSlider.create(elm, {
    range: {
      min: 0,
      max: 100000,
    },
    start: 70000,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      }
    }
  });

  elm.noUiSlider.on('update', () => {
    input.value = elm.noUiSlider.get();
  });
};


export { createSlider };
