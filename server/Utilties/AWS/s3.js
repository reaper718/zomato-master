import AWS from "aws-sdk";

const s3Bucket = new AWS.S3({
  accessKeyId: "AKIAWJN3JKQZUW2SELPW",
  secretAccessKey: "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",
  region: "ap-south-1"
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject)=>
    s3Bucket.upload(options, (error,data)=>{
      if(error) return reject(error);
      return resolve(data);
    })
  );
};