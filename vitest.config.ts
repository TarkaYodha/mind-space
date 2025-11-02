import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/__tests__/lib/**/*.test.{ts,tsx}'], // Only run unit tests
    exclude: [
      'node_modules/**',
      '.next/**',
      'coverage/**',
      '__tests__/e2e/**', // Exclude E2E tests (run with Playwright)
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '.next/',
        'coverage/',
        '**/*.config.{js,ts,mjs}',
        '**/*.d.ts',
        '**/types.ts',
        '__tests__/e2e/**', // Exclude E2E tests from coverage
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
