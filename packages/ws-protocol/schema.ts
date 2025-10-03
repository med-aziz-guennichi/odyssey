/* ODYSSEY-FileCopyrightText: 2025-present Aziz */
/* ODYSSEY-License-Identifier: MIT */

import { createMessageSchema } from "bun-ws-router/zod";
import { z } from "zod";

/**
 * Factory instance for creating message schemas.
 * This ensures both the library and app use the same Zod instance,
 * avoiding dual package hazard issues with discriminated unions.
 */
export const {
  messageSchema,
  createMessage,
  ErrorMessage,
  ErrorCode,
  MessageMetadataSchema,
} = createMessageSchema(z);
