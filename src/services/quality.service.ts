import { logger } from "@appneural/cli-shared";

async function logPlaceholder(task: string): Promise<void> {
  logger.info(`APPNEURAL ${task} placeholder (TODO: integrate tooling)`);
}

export async function runFormat(): Promise<void> {
  await logPlaceholder("format");
}

export async function runLint(): Promise<void> {
  await logPlaceholder("lint");
}

export async function runFix(): Promise<void> {
  await logPlaceholder("fix");
}

export async function runTest(): Promise<void> {
  await logPlaceholder("test");
}

export async function runClean(): Promise<void> {
  await logPlaceholder("clean");
}
