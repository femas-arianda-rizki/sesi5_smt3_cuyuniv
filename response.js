const response = (statusCode, data, message, res) => {
  res.send(statusCode, [
    {
      data,
      message,
      metadata: {
        prev: "",
        next: "",
        current: "",
      },
    },
  ]);
};

module.exports = response;
