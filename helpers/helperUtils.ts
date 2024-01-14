import crypto from "crypto";
const fs = require("fs");

export const getRandomString = (bytes = 16) => {
  return crypto.randomBytes(bytes).toString("hex");
};

export const deleteDocumentImage = (fileLocation: string) => {
  const filePath: string = fileLocation;
  fs.unlink(filePath, (err: Error) => {
    if (err) {
      console.error("Error deleting the picture:", err);
    } else {
      console.log("Picture deleted successfully.");
    }
  });
};
