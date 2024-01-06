import Head from "../layouts/Head.astro";
import Navigation from "../layouts/Navigation.astro";
import { ExperienceDesktop } from "../components/ExperienceDesktop";
import { ExperienceMobile } from "../components/ExperienceMobile";

<Fragment>
<html lang="en">
<head>
<Head title="🦊 Anton Bashirov | Experience" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</head>
<body>
<Navigation page="experience" />
<div class="flex place-items-center">
<div class="flex place-items-center flex-1 pt-4 px-4">
<span class="material-symbols-outlined text-3xl drop-shadow-glow text-purple-300">experiment</span>
<p class="text-xl lg:text-3xl font-bold px-4">{`The path I've taken`}</p>
</div>
</div>
<div class="divider"></div>
<ExperiencePath client: only />
<div class="hidden 2xl:block"><ExperienceDesktop client: only /></div>
<div class="2xl:hidden"><ExperienceMobile client: only /></div>
</body></html>
</Fragment>;
