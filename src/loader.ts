import expressLoader from "./express";
import viewLoader from "./views"

export default async ({ expressApp }: any) => {
    await expressLoader({ app: expressApp });
    await viewLoader({ app: expressApp });
    // ... more loaders can be here

    // ... Initialize agenda
    // ... or Redis, or whatever you want
}