# Volleyball Hobby Midterm

Prepared for Himmat Grewal, October 13, 2026.

## Rubric coverage

| Requirement | Implementation |
|---|---|
| Required location | Upload this package inside `itis3135`; the hobby entry is `hobby/index.html`. |
| One page; no includes | Header, main, footer and all sections are written in that file. |
| Embedded stylesheet | All hobby CSS is in the index page's style element. |
| Hobby H1 | Volleyball. |
| Who, What, When, Where, How, Why, AI Prompts | About, Home, Best Times, Places to Play, How to Play, Why Volleyball, AI Prompts. |
| Home visible by default | Home is the sole visible section in the initial HTML. |
| At least three items per section | Each section has 6–12 counted items, including paragraphs, figures, lists and other content. |
| Figure in each section | All seven sections include an original SVG, descriptive alt text, caption and italic prompt paragraph. |
| Consistent permitted imagery | Original geometric SVG artwork created with AI coding assistance; no third-party imagery. |
| Lightweight proportional images | SVG viewBoxes, intrinsic dimensions and responsive height preserve proportions; entire hobby folder is about 54 KB. |
| Unique navigation divider | The star character ✦ is distinct from the existing course pipe divider. |
| Updated page title | JavaScript sets `Volleyball ✦ [active H2]`. |
| One section visible | Inactive sections use the hidden attribute. Fragment links and browser history work. |
| Accessible interaction | Native links, skip link, visible focus, heading focus after navigation, reduced-motion support and labeled form controls. |
| Distinct design | Forest green, sage, lime and coral, with a large editorial headline and custom geometric art. |
| CRAP principles | Contrasting type and color; repeated palette and figure treatment; aligned grids; related content grouped together. |
| Favicon | Original volleyball SVG mark in the hobby images folder. |
| Design firm | Relative footer link to Grewal Web Design. |
| Validation | HTML, CSS and accessibility links; Accumulus and the instructor's current standards script. |
| Secondary course navigation | Hobby link added to the second nav in Home, Introduction, Contract and About. |
| AI transparency | Dedicated AI Prompts section and individual illustration briefs; code, text and art assistance disclosed. |

## Completed checks

- W3C Nu HTML validator: **0 errors, 0 warnings**.
- W3C CSS validator, CSS3 profile at default warning settings: **0 errors, 0 warnings**.
- Additional CSS warning-level-2 review: 113 advisory notices about ordinary cascading overrides and inherited colors; no errors. Text/background pairings were checked separately.
- Instructor's current standards script, executed against local files in a DOM harness: **45 passes, 0 failures, 0 warnings**.
- DOM tests: default Home; all seven sections; active nav state; title changes; heading focus; fragment changes; browser Back/Forward; call-to-action links; practice checklist.
- axe semantic/ARIA checks for WCAG A/AA: no violations in any of the seven visible section states. Layout-dependent color-contrast testing was replaced by explicit palette calculations.
- Text color contrast: minimum tested ratio **4.84:1**; body copy **9.99:1**, exceeding the 4.5:1 AA requirement for normal text.
- Local images exist; all eight SVG assets are well-formed XML. All seven illustrations were rendered and visually inspected.
- Course links: Hobby appears in the second nav, never the primary nav.

## Required live review

The website has not been uploaded by this build. No page-layout browser preview or live third-party badge result is claimed. Before submitting, verify the actual public URL, phone and desktop layout, keyboard navigation, browser title, all sections, linked design firm, and live validator reports. Automated tests do not replace a complete manual accessibility review.

## Submission and peer reviews

Submit the course URL required by the latest instructions:

https://webpages.charlotte.edu/hgrewal1/itis3135/

The second menu's Hobby link should reach:

https://webpages.charlotte.edu/hgrewal1/itis3135/hobby/

Review at least two classmates who have fewer than two reviews. Check their structure, section content, figures, navigation/title changes, mobile usability, validation and secondary-menu link. Give a specific improvement and explain how it helps. Finish before the assignment's deadline.
