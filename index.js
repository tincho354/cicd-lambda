exports.handler = async (event) => {
  console.log("Evento recibido:", JSON.stringify(event));

  const response = {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Hola Mundo desde AWS Lambda 🚀",
      timestamp: new Date().toISOString(),
    }),
  };

  return response;
};