import { OpenAICompatibleChatSettings } from '@ai-sdk/openai-compatible';

// Pollinations API models available with seed tier token
export type PollinationsChatModelId =
  | 'openai'              // ✅ Basic OpenAI model (seed tier)
  | 'openai-reasoning'    // ✅ Reasoning model (seed tier)  
  | 'deepseek'            // ✅ DeepSeek model (seed tier)
  | 'mistral'             // ✅ Mistral model (seed tier)
  | 'llama'               // ✅ Llama model (seed tier)
  | (string & {});        // Allow custom model names

export interface PollinationsChatSettings extends OpenAICompatibleChatSettings {
  /**
   * Custom Pollinations-specific settings can be added here
   */
}