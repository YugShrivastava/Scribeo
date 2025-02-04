import conf from "../conf/config";
import { Account, Client, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.APPWRITE_URL)
      .setProject(conf.APPWRITE_PROJECT_ID);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, username }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        username
      );

      if (userAccount) return userAccount;
      return this.loginUser({ email, password }); // this can couse problem, if error check this!!
    } catch (error) {
      console.log("Error in createAccount", error);
    }
  }

  async loginUser({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Error in loginUser", error);
    }
  }

  async logoutUser() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Error in logoutUser", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Error in getCurrentUser", error);
      return null;
    }

  }
}

export default new AuthService();
