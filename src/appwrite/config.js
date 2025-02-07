import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class StorageService {
  database;
  bucket;
  client = new Client();

  constructor() {
    this.client
      .setEndpoint(conf.APPWRITE_URL)
      .setProject(conf.APPWRITE_PROJECT_ID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, image, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.DATABASE_ID,
        conf.COLLECTION_ID,
        slug,
        {
          title,
          content,
          image,
          status,
          userId,
        }
      );
    } catch (error) {
<<<<<<< HEAD
      console.log(error);
=======
      return false;
>>>>>>> main
    }
  }

  async updatePost(slug, { title, content, image, status }) {
    try {
      return await this.databases.updateDocument(
        conf.DATABASE_ID,
        conf.COLLECTION_ID,
        slug,
        {
          title,
          content,
          image,
          status,
        }
      );
    } catch (error) {
<<<<<<< HEAD
      console.log(error);
=======
      return false;
>>>>>>> main
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.DATABASE_ID,
        conf.COLLECTION_ID,
        slug
      );
      return true;
    } catch (error) {
<<<<<<< HEAD
      console.log(error);
=======
>>>>>>> main
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.DATABASE_ID,
        conf.COLLECTION_ID,
        slug
      );
    } catch (error) {
<<<<<<< HEAD
      console.log(error);
=======
>>>>>>> main
      return false;
    }
  }

  async getPosts(query = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.DATABASE_ID,
        conf.COLLECTION_ID,
        query
      );
    } catch (error) {
<<<<<<< HEAD
      console.log(error);
=======
>>>>>>> main
      return false;
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.BUCKET_ID,
        ID.unique(),
        file
      );
    } catch (error) {
<<<<<<< HEAD
      console.log(error);
=======
>>>>>>> main
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.BUCKET_ID, fileId);
      return true;
    } catch (error) {
<<<<<<< HEAD
      console.log(error);
=======
>>>>>>> main
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.BUCKET_ID, fileId, 700, 500);
  }

  getFullFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.BUCKET_ID, fileId, 700, 0);
  }
}

const storageService = new StorageService();
export default storageService