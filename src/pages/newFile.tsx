import Head from "../layouts/Head.astro";
import Navigation from "../layouts/Navigation.astro";
import { Article } from "../components/Blog";
import { articles } from "./blog.astro";

<Fragment>
<html lang="en">
<head>
<Head title="🦊 Anton Bashirov | Blog" />
</head>
<body>
<Navigation page="blog" />
<div class="divider"></div>
<div class="flex flex-col gap-4 p-4">
{articles.map(async (post) => {
return (
<Fragment><Article title={post.data.title} description={post.data.description} reference={post.slug} /></Fragment>
);
})}
</div>
</body></html>
</Fragment>;
