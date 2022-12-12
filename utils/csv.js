import { parse } from "csv-parse/sync";

export function parseCSVData(data) {
  if (typeof data !== "string") {
    throw new Error("Invalid CSV data");
  }

  const records = parse(data, {
    columns: true,
    skip_empty_lines: true,
    skip_records_with_error: true,
  });

  return records;
}
