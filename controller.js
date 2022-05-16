const fetchPredictionResult = async (temperature, heartRate, sleepingHours) => {
  const obj = {
    stress: false,
    anxiety: false,
    bipolar: false,
  };
  if (temperature > 37) {
    obj.stress=true
    obj.anxiety=true
    obj.bipolar=true
  } else if (temperature <= 37 && temperature > 24) {
    obj.bipolar=true
  }
  return obj
};

exports.predictionResult = (req, res) => {
  fetchPredictionResult(
    req.params.temperature,
    req.params.heartRate,
    req.params.sleepingHours
  )
    .then((x) => {
      res.send(x);
    })
    .catch((err) => {
      res.send(err);
    });
};
