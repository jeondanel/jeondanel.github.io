# Portfolio

One-page portfolio starter built with Svelte, TypeScript, and Vite.

## Stack

- Svelte for the UI
- TypeScript for safer components
- Vite for fast local development
- CSS for the custom single-page layout

## Sections

- Home
- Projects
- About me
- Contact

The navbar is sticky, the links scroll to each section, and the active section gets a visual indicator as you move through the page.

## Contact form configuration

The contact form sends messages through Web3Forms. Copy `.env.example` to
`.env.local` and set `VITE_WEB3FORMS_ACCESS_KEY` to your Web3Forms access key.
Restart Vite after changing it. Local environment files are ignored by Git.

For GitHub Pages, add a repository Actions secret named `WEB3FORMS_ACCESS_KEY`
and deploy again. The workflow requires it before building.

Vite embeds this value in the browser bundle. This configuration keeps the key
out of tracked source, but does not make it private. Web3Forms access keys are
public form identifiers: https://docs.web3forms.com/getting-started/faq
The form includes Web3Forms' honeypot field. For additional protection, configure
CAPTCHA or, on a Pro plan, domain restrictions in Web3Forms.
