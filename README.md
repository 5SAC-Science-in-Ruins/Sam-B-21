# SAC Sciences Project

This is the repository for my SAC Sciences project of 2021.

See the releases page for the versions of the paper.

## File Structure

This folder contains all the components of my paper according to the Sustainable Authorship methodology.

- `main.md` -- the paper itself
- `zotero.bib` -- the bibliography file exported from Zotero
- `header.yml` -- the header data (particularly the abstract and acknowledgments)
- `pandoc.yml` -- any Pandoc frontmatter not related to the content of the document
- `template.tex` -- the custom LaTeX template for Pandoc
- `images` -- any images the paper depends on
- `data` -- the raw data for the paper
- `Paper.pdf` -- the current PDF version of the paper itself
- `bonnie.toml` -- the configuration file for Bonnie (command aliasing tool)

## Compiling

### Prerequisites

- Bonnie
- Pandoc
- Pandoc Citeproc
- XeLaTeX
- The *Times New Roman* font
	- You can use another font with `bonnie pdf [font-name] [output-file]`

### Commands

Use `bonnie pdf` to compile the paper with a custom font and output filename.

Use `bonnie compile` to use the default *Times New Roman* font and write to `Paper.pdf`. That file then represents the entire, self-contained paper.
