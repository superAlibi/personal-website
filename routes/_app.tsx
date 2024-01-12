import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh's hello world</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header class="px-4 py-8 mx-auto bg-[#86efac]">
          <h1 class="text-4xl font-bold">这是一个deno_fresh的hell world</h1>
          <nav>
            <ul class="flex justify-center gap-5">
              <li>
                <a href="/">首页</a>
              </li>
              <li>
                <a href="/g1">路由组1</a>
              </li>
              <li>
                <a href="/g2">路由组2</a>
              </li>
              <li>
                <a href="/api/joke">给你讲个笑话</a>
              </li>
              <li>
                <a href="/about">关于</a>
              </li>
              <li>
                <a href="/greet/陌生人">问好</a>
              </li>
            </ul>
          </nav>
        </header>
        <Component />
      </body>
    </html>
  );
}
