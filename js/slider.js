const createSlider = (elm, input) => {
  noUiSlider.create(elm, {
    range: {
      min: 0,
      max: 100000,
    },
    start: 70000,
    step: 1,
    connect: 'lower',
    format: {
      to: (value) => value.toFixed(0),
      from: (value) => parseFloat(value)
    }
  });

  elm.noUiSlider.on('update', () => {
    input.value = elm.noUiSlider.get();
  });
};


export { createSlider };
