import AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1",
});

const sqs = new AWS.SQS({ apiVersion: "2022-11-05" });
const queueURL = "https://sqs.us-east-2.amazonaws.com/864135231670/ead-queue";

const sendSQS = function () {
  const params: AWS.SQS.SendMessageRequest = {
    QueueUrl: queueURL,
    DelaySeconds: 0,
    MessageBody: JSON.stringify({
      id: 1,
      name: "Iphone X",
      description: "Phone at Apple",
      value: 320000,
    }),

    MessageAttributes: {
      Producto_1: {
        DataType: "String",
        StringValue: "Iphone x",
      },
      Producto_2: {
        DataType: "String",
        StringValue: "Macbook M1",
      },
      Producto_3: {
        DataType: "String",
        StringValue: "Iphone 11",
      },
    },
  };

  sqs.sendMessage(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log(`sucess:, ${JSON.stringify(data)}`);
    }
  });
};

sendSQS();
