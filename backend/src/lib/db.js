import mongoose from "mongoose";
import dns from "node:dns";

import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    if (!ENV.DB_URL) {
      throw new Error("DB_URL is not defined in environment variables");
    }
    
    // Fallback to public DNS servers if local DNS resolver cannot resolve SRV records
    try {
      dns.setServers(["8.8.8.8", "8.8.4.4"]);
    } catch (dnsErr) {
      console.warn("⚠️ Failed to set custom DNS servers, using system defaults:", dnsErr.message);
    }

    const conn = await mongoose.connect(ENV.DB_URL);
    console.log("✅ Connected to MongoDB:", conn.connection.host);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB", error);
    process.exit(1); // 0 means success, 1 means failure
  }
};