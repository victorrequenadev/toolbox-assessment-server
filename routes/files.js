import express from "express";
import { apiInstance } from "../common/axios.js";
import { createErrorObject } from "../utils/error.js";
import { parseCSVData } from "../utils/csv.js";

const HEADERS = { Authorization: "Bearer aSuperSecretKey" };
const router = express.Router();

router.get("/data", async (req, res) => {
  try {
    const { data } = await apiInstance.get("/secret/files", {
      headers: HEADERS,
    });

    let entries = [];

    if (data?.files) {
      for (let i = 0; i < data.files.length; i++) {
        try {
          const file = data.files[i];
          const { data: csv } = await apiInstance(`/secret/file/${file}`, {
            headers: HEADERS,
          });

          const records = parseCSVData(csv);
          if (records.length) {
            entries.push({
              file,
              lines: records.map((record) => ({
                text: record.text,
                number: record.number,
                hex: record.hex,
              })),
            });
          }
        } catch (error) {
          continue;
        }
      }
    }

    res.json(entries);
  } catch ({ response }) {
    res.status(502);
    res.json(createErrorObject(response.data.code, response.data.message));
  }
});

export { router as filesRouter };
