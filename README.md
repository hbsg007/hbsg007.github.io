# Himmat Grewal's Websites

My personal homepage and ITIS3135 coursework at UNC Charlotte.

- [Personal homepage](https://hbsg007.github.io/)
- [Course site](https://hbsg007.github.io/itis3135/)
- [Charlotte course site](https://webpages.charlotte.edu/hgrewal1/itis3135/)

## Maintained Files

| Location | Purpose |
| --- | --- |
| `index.html`, `images/` | Personal homepage and its illustrations |
| `itis3135/` | Course Home, Contract, Introduction, and About pages |
| `itis3135/components/` | Shared course header and footer |
| `itis3135/styles/`, `itis3135/scripts/` | Course styles and JavaScript |
| `itis3135/images/` | Course logo and introduction photo |
| `itis3135/grewalwebdesign.co/` | Grewal Web Design |
| `itis3135/hobby/` | Volleyball hobby site |
| `itis3135/stuff/` | Intentionally poorly designed CRAPpy page |

The course pages use Paul Browne's HTMLInclude to load `components/header.html`
and `components/footer.html`. Edit those two files to update all four pages.
The personal, design firm, and hobby sites keep their own layouts. The hobby
assignment specifically requires its header and footer inside its single page.

## Uploading and Checking

The repository root corresponds to Charlotte's `public_html` folder. Keep the
same folder structure on both hosts. Merge updates into the existing
`itis3135` folder; upload wrappers such as `itis3135 2` are not site folders.
Use an HTTP server for local previews because the course includes fetch files.

After uploading, open each course page and check its navigation, Accumulus
HTML/CSS/JavaScript results, the manual WCAG report, and the Vicunadator.
Automated checks do not replace a manual accessibility review.

A known validation conflict remains on Introduction: the course checklist asks
for an `h6` display name, while the local Nu checker flags the jump from `h2`
to `h6`. The current page retains that required element and `aria-level="3"`;
this does not clear the local Nu report. Confirm the expected markup with the
instructor before claiming that all validation is clean.

## Previous Addresses

Root-level Contract, Introduction, and About files and the old `hobby/`,
`hobby 2/`, `stuff/`, and `grewalwebdesign.co/` locations redirect to their
maintained course locations. They preserve earlier links; edit the maintained
files listed above.

## Credits

I used ChatGPT/Codex to help draft and troubleshoot HTML, CSS, JavaScript,
written content, and original SVG illustrations. The hobby site's AI Prompts
section and figure captions describe that assistance.

HTMLInclude is by [Paul Browne](https://github.com/Paul-Browne/HTMLInclude/),
used under its MIT license, retained in `itis3135/scripts/HTMLInclude-LICENSE.txt`.
The CRAPpy page uses a NASA Earth Observatory image; its source details are in
`itis3135/stuff/image-source.txt`.
