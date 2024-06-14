import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    test: z.string()
  },
  runtimeEnv: {
    test: process.env.test
  }
})