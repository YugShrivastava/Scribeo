const conf = {
  APPWRITE_URL: String(import.meta.env.VITE_APPWRITE_URL),
  APPWRITE_PROJECT_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  DATABASE_ID: String(import.meta.env.VITE_DATABASE_ID),
  COLLECTION_ID: String(import.meta.env.VITE_COLLECTION_ID),
  BUCKET_ID: String(import.meta.env.VITE_BUCKET_ID),
}

export default conf