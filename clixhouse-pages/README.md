# CLIXHOUSE Website - Chambabot Pages

This folder contains all the Chambabot-related pages for the CLIXHOUSE website.

## Files Included

### Main Pages
- `chambabot.html` - English product page
- `chambabot-es.html` - Spanish product page
- `chambi-profile.jpg` - Chambi mascot image

### Legal Pages (English)
- `chambabot-privacy.html` - Privacy Policy
- `chambabot-terms.html` - Terms of Service
- `chambabot-data-deletion.html` - Data Deletion Instructions

### Legal Pages (Spanish)
- `chambabot-privacy-es.html` - Política de Privacidad
- `chambabot-terms-es.html` - Términos de Servicio
- `chambabot-data-deletion-es.html` - Eliminación de Datos

## How to Deploy to Your GitHub Pages

Since you don't have the clixhouse repo cloned locally, here are your options:

### Option 1: Upload via GitHub Web Interface

1. Go to https://github.com/michaelfperla/clixhouse.github.io
2. Click "Add file" → "Upload files"
3. Drag and drop all files from this folder
4. Update the WhatsApp number in `chambabot.html` and `chambabot-es.html` (search for "1234567890")
5. Commit with message "Add Chambabot product showcase and legal pages"

### Option 2: Clone and Push

```bash
# Clone your repo
cd ~/projects
git clone https://github.com/michaelfperla/clixhouse.github.io.git
cd clixhouse.github.io

# Copy all files
cp ~/projects/chambabot-v2/clixhouse-pages/* .

# Update main navigation (add to index.html)
# Add this link to your navigation: <a href="chambabot.html">Chambabot</a>

# Commit and push
git add .
git commit -m "Add Chambabot product showcase and legal pages"
git push
```

## Important Updates Needed

1. **WhatsApp Number**: Replace "1234567890" with your actual Chambabot WhatsApp number in:
   - `chambabot.html` (2 places)
   - `chambabot-es.html` (2 places)

2. **Contact Email**: Update if needed:
   - privacy@clixhouse.com
   - legal@clixhouse.com
   - support@clixhouse.com

3. **Main Site Navigation**: Add a link to Chambabot in your main `index.html`:
   ```html
   <a href="chambabot.html">Chambabot</a>
   ```

## Live URLs

Once deployed, your pages will be available at:
- https://clixhouse.com/chambabot.html
- https://clixhouse.com/chambabot-es.html
- https://clixhouse.com/chambabot-privacy.html
- etc.

## Features

- ✅ Matches CLIXHOUSE design aesthetic
- ✅ Bilingual (English/Spanish) with language switcher
- ✅ Mobile responsive
- ✅ WhatsApp green accents
- ✅ Clean, minimalist design
- ✅ Fast loading (no external dependencies)
- ✅ SEO optimized

## Notes

- All pages use inline CSS to match your main site
- No JavaScript required (except language switcher could be enhanced)
- Images are optimized for web
- Forms/contact are mailto: links (no backend needed)