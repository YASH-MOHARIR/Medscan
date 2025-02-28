import CryptoJS from "crypto-js";
import { PatientData } from "./NewProfile/types";
import { v4 as uuidv4 } from "uuid";  // import uuid

// Helper function to generate Cosmos DB authorization header.
const generateAuthHeader = (
  verb: string,
  resourceType: string,
  resourceLink: string,
  date: string,
  masterKey: string
): string => {
  const text =
    (verb || "").toLowerCase() + "\n" +
    (resourceType || "").toLowerCase() + "\n" +
    (resourceLink || "") + "\n" +
    date.toLowerCase() + "\n\n";
  
  const key = CryptoJS.enc.Base64.parse(masterKey);
  const signature = CryptoJS.HmacSHA256(text, key);
  const base64Signature = signature.toString(CryptoJS.enc.Base64);
  const masterToken = "master";
  const tokenVersion = "1.0";
  return encodeURIComponent(`type=${masterToken}&ver=${tokenVersion}&sig=${base64Signature}`);
};

const COSMOS_DB_URI = "https://yash-medscan.documents.azure.com:443/";
const COSMOS_DB_KEY = "9gJxkazrg956EI8BPOgTjyTkZaw3b2iOvuXqIXCKpYlMqaXbg9EA7WO0j72SVhU1JFIzbm4g8yYfACDbwC0EOA==";
const DATABASE_ID = "MedscanDB";
const CONTAINER_ID = "PatientReccords";

export const createPatientDocument = async (document: PatientData) => {
  // Set a unique id if not provided.
  if (!document.id) {
    document.id = uuidv4();
  }
  
  const resourceType = "docs";
  const resourceLink = `dbs/${DATABASE_ID}/colls/${CONTAINER_ID}`;
  const date = new Date().toUTCString();
  const authHeader = generateAuthHeader("POST", resourceType, resourceLink, date, COSMOS_DB_KEY);

  const url = `${COSMOS_DB_URI}dbs/${DATABASE_ID}/colls/${CONTAINER_ID}/docs`;

  
  console.log("Creating document:", document);
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-ms-date": date,
      "x-ms-version": "2018-12-31",
      "Authorization": authHeader
    },
    body: JSON.stringify(document)
  });

  if (!response.ok) {
    console.log(response.statusText);
    console.log(response);
    
    
    throw new Error(`Error creating document: ${response.statusText}`);
  }

  return await response.json();
};

export const getPatientDocument = async (id: string) => {
  const resourceType = "docs";
  const resourceLink = `dbs/${DATABASE_ID}/colls/${CONTAINER_ID}/docs/${id}`;
  const date = new Date().toUTCString();
  const authHeader = generateAuthHeader("GET", resourceType, resourceLink, date, COSMOS_DB_KEY);

  const url = `${COSMOS_DB_URI}dbs/${DATABASE_ID}/colls/${CONTAINER_ID}/docs/${id}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-ms-date": date,
      "x-ms-version": "2018-12-31",
      "Authorization": authHeader
    }
  });

  if (!response.ok) {
    throw new Error(`Error fetching document: ${response.statusText}`);
  }

  return await response.json();
};
