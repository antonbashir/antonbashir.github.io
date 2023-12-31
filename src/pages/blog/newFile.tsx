import { ClipboardCopy } from "@astro-github-elements/clipboard-copy";
import Navigation from "../../layouts/Navigation.astro";
import Head from "../../layouts/Head.astro";
import { url } from "./[...slug].astro";

<Fragment>
<html lang="en">
<head>
<script>
{() => {
document.addEventListener("clipboard-copy", function (event) {
document
.querySelector("#notification")
?.classList.replace("opacity-0", "opacity-100");
setTimeout(
() => document
.querySelector("#notification")
?.classList.replace("opacity-100", "opacity-0"),
1000
);
});
}}
</script>
<Head title="🦊 Anton Bashirov | Blog" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</head>
<body>
<Navigation page="blog" />
<div class="max-w-none p-8 m-auto">
<ClipboardCopy value={url}>
<div class="inline-flex flex-row gap-2 items-center">
<p class="text-5xl font-bold text-white">
{post.data.title}
</p>
<span class="material-symbols-outlined text-3xl">content_copy</span>
</div>
</ClipboardCopy>
<div class="divider"></div>
<div class="prose prose-p:text-white prose-p:text-lg">
<Content />
</div>
</div>
<div id="notification" role="alert" class={`alert absolute top-0 right-0 h-14 w-96 m-8 transition-opacity ease-in duration-700 opacity-0`}>
<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
<span>Link copied</span>
</div>
</body></html>
</Fragment>;
