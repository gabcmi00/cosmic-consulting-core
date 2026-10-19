<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Static hosting: vite.config prerenders all routes; GitHub Pages workflow deploys dist/client. Why: site must be hostable as plain files.
- Company experience stays in the single-page index with an anchor target and a CDN photo pointer. Why: preserve the static site's existing navigation and asset conventions.
