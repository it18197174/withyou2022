const fetchPredictionResult = async (temperature, heartRate, sleepingHours) => {
  const obj = {
    stress: false,
    anxiety: false,
    bipolar: false,
  };
  if (temperature > 37) {
    return "stress, anxiety & bipolar disorder";
  } else if (temperature <= 37 && temperature > 24) {
    return "bipolar disorder";
  } else {
    return "no disease";
  }
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
