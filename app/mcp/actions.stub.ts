/**
 * Stub implementations for MCP actions used in static export (Tauri desktop) builds.
 * Server Actions are not supported with Next.js static export, so this module
 * provides no-op replacements that are swapped in via webpack during export builds.
 */
import {
  DEFAULT_MCP_CONFIG,
  McpConfigData,
  McpRequestMessage,
  ServerConfig,
  ServerStatusResponse,
} from "./types";

export async function getClientsStatus(): Promise<
  Record<string, ServerStatusResponse>
> {
  return {};
}

export async function getClientTools(_clientId: string) {
  return null;
}

export async function getAvailableClientsCount() {
  return 0;
}

export async function getAllTools() {
  return [];
}

export async function initializeMcpSystem() {
  return DEFAULT_MCP_CONFIG;
}

export async function addMcpServer(
  _clientId: string,
  _config: ServerConfig,
): Promise<McpConfigData> {
  return DEFAULT_MCP_CONFIG;
}

export async function pauseMcpServer(
  _clientId: string,
): Promise<McpConfigData> {
  return DEFAULT_MCP_CONFIG;
}

export async function resumeMcpServer(_clientId: string): Promise<void> {
  return;
}

export async function removeMcpServer(
  _clientId: string,
): Promise<McpConfigData> {
  return DEFAULT_MCP_CONFIG;
}

export async function restartAllClients(): Promise<McpConfigData> {
  return DEFAULT_MCP_CONFIG;
}

export async function executeMcpAction(
  _clientId: string,
  _request: McpRequestMessage,
) {
  return {};
}

export async function getMcpConfigFromFile(): Promise<McpConfigData> {
  return DEFAULT_MCP_CONFIG;
}

export async function isMcpEnabled() {
  return false;
}
