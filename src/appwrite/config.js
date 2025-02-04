import conf from "../conf/config";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class DatabaseService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.APPWRITE_URL)
      .setProject(conf.APPWRITE_PROJECT_ID);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // Post services

  async createPost({
    title,
    slug,
    content,
    featuredImage,
    status,
    userId,
  }) {
    try {
      return await this.databases.createDocument(
        conf.DATABASE_ID,
        conf.COLLECTION_ID,
        slug,
        {
          title,
          content,
          featured_image: featuredImage,
          status,
          user_id: userId,
        }
      );
    } catch (error) {
      // console.log("Error in createPost", error);
      return false;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.DATABASE_ID,
        conf.COLLECTION_ID,
        slug,
        {
          title,
          content,
          featured_image: featuredImage,
          status,
        }
      );
    } catch (error) {
      // console.log("Error in updatePost", error);
      return false;
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
      // console.log("Error in deletePost", error);
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
      // console.log("Error in getPost", error);
      return false;
    }
  }

  async getAllPost() {
    try {
      return await this.databases.listDocuments(
        conf.DATABASE_ID,
        conf.COLLECTION_ID,
        [Query.equal("status_key", "true")]
      );
    } catch (error) {
      // console.log("Error in getAllPost", error);
      return false;
    }
  }

  // File services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(conf.BUCKET_ID, ID.unique(), file);
    } catch (error) {
      // console.log("Error in uploadFile", error);
      return false
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.BUCKET_ID, fileId)
      return true;
    } catch (error) {
        // console.log('Error in deleteFile', error)
        return false
    }
  }

  getFilePreview(fileId){
    return this.bucket.getFilePreview(conf.BUCKET_ID, fileId)
  }
}
const appwriteService = new DatabaseService();

export default appwriteService
