import { Command } from "commander";
import { registerQualityCommands } from "./commands/quality.js";

export default function register(program: Command): void {
  registerQualityCommands(program);
}
