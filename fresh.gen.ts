// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_group1_layout from "./routes/(group1)/_layout.tsx";
import * as $_group1_g1 from "./routes/(group1)/g1.tsx";
import * as $_group2_layout from "./routes/(group2)/_layout.tsx";
import * as $_group2_g2 from "./routes/(group2)/g2.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $about_layout from "./routes/about/_layout.tsx";
import * as $about_middleware from "./routes/about/_middleware.ts";
import * as $about_contact from "./routes/about/contact.tsx";
import * as $about_index from "./routes/about/index.tsx";
import * as $admin_layout from "./routes/admin/_layout.tsx";
import * as $admin_middleware from "./routes/admin/_middleware.ts";
import * as $admin_index from "./routes/admin/index.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $api_resume from "./routes/api/resume.ts";
import * as $api_user_login from "./routes/api/user/login.ts";
import * as $async_page from "./routes/async-page.tsx";
import * as $definehelper from "./routes/definehelper.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $resume_index from "./routes/resume/index.tsx";
import * as $skipappwrapp from "./routes/skipappwrapp.tsx";
import * as $Counter from "./islands/Counter.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/(group1)/_layout.tsx": $_group1_layout,
    "./routes/(group1)/g1.tsx": $_group1_g1,
    "./routes/(group2)/_layout.tsx": $_group2_layout,
    "./routes/(group2)/g2.tsx": $_group2_g2,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/about/_layout.tsx": $about_layout,
    "./routes/about/_middleware.ts": $about_middleware,
    "./routes/about/contact.tsx": $about_contact,
    "./routes/about/index.tsx": $about_index,
    "./routes/admin/_layout.tsx": $admin_layout,
    "./routes/admin/_middleware.ts": $admin_middleware,
    "./routes/admin/index.tsx": $admin_index,
    "./routes/api/joke.ts": $api_joke,
    "./routes/api/resume.ts": $api_resume,
    "./routes/api/user/login.ts": $api_user_login,
    "./routes/async-page.tsx": $async_page,
    "./routes/definehelper.tsx": $definehelper,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/resume/index.tsx": $resume_index,
    "./routes/skipappwrapp.tsx": $skipappwrapp,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
