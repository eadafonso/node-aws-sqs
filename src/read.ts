import AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1",
});

const sqs = new AWS.SQS({ apiVersion: "2022-11-05" });
const queueURL = "https://sqs.us-east-2.amazonaws.com/864135231670/ead-queue";

const params: AWS.SQS.ReceiveMessageRequest = {
  QueueUrl: queueURL,
  MaxNumberOfMessages: 10,
  VisibilityTimeout: 30,
};

sqs.receiveMessage(params, function (err, data) {
  if (err) {
    console.log("Erro", err);
  } else if (data.Messages) {
    console.log("Good", data.Messages);
  }
});
