import { createFileRoute } from "@tanstack/react-router";
import { snacks } from "#/data/snacks";
import { Home } from "#/components/Home";
import { StorefrontError } from "#/components/StorefrontError";

export const Route = createFileRoute("/")({
  loader: () => ({ products: snacks }),
  head: () => ({
    meta: [
      { title: "Chips & Cookies — crunch crunch" },
      { name: "description", content: "Find your happy snack. Discover cookies, crispy chips and sweet-and-salty bundles at Chips & Cookies." }
    ]
  }),
  errorComponent: StorefrontError,
  component: Home
});
