import { RouteConfig } from "$fresh/server.ts";

import LoginForm from "../../islands/LoginForm.tsx";

export const config: RouteConfig = {
  skipInheritedLayouts: true,
};
export default () => {
  return (
    <main class="flex place-content-center items-center h-screen">
      <LoginForm />
    </main>
  );
};
