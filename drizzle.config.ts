/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-content-pro_owner:7kcrpYZtI9es@ep-floral-violet-a1wvhsu8.ap-southeast-1.aws.neon.tech/ai-content-pro?sslmode=require",
  },
};
