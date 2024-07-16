import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const AiOutput = pgTable("ai-output", {
  id: serial("id").primaryKey(),
  formData: varchar("formData").notNull(),
  aiResponse: varchar("aiResponse"),
  templateSlug: varchar("templateSlug").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt"),
});