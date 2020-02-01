import { generate } from "@graphql-codegen/cli";
import * as path from "path";

const SCHEMA = "https://api.stateofjs.com/graphql";

async function gen() {
  const generatedFiles = await generate(
    {
      schema: SCHEMA,
      //   documents: "./src/**/*.graphql",
      generates: {
        [path.join(__dirname, "../models/types.d.ts")]: {
          plugins: ["typescript"]
        }
      }
    },
    true
  );
}

gen();
