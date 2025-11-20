import { Command } from "commander";
import { logger } from "@appneural/cli-shared";
import { withTelemetry } from "@appneural/cli-shared";
import { withSpinner } from "@appneural/cli-shared";
import {
  runClean,
  runFix,
  runFormat,
  runLint,
  runTest
} from "../services/quality.service.js";

const TASKS: Record<
  string,
  { label: string; handler: () => Promise<void> }
> = {
  format: { label: "Formatting", handler: runFormat },
  lint: { label: "Linting", handler: runLint },
  fix: { label: "Fixing", handler: runFix },
  test: { label: "Testing", handler: runTest },
  clean: { label: "Cleaning", handler: runClean }
};

export function registerQualityCommands(program: Command): void {
  const quality = program.command("quality").description("APPNEURAL quality automation");

  Object.entries(TASKS).forEach(([commandName, task]) => {
    quality
      .command(commandName)
      .description(`${task.label} APPNEURAL workspace`)
      .action(() =>
        withTelemetry(`quality:${commandName}`, async () => {
          await withSpinner(`${task.label} APPNEURAL workspace`, task.handler);
          logger.success(`APPNEURAL ${task.label.toLowerCase()} complete`);
        })
      );
  });
}
