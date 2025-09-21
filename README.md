# AI Tutor Landing Page

A beautiful, modern landing page for the AI Tutor Chrome Extension. This extension provides step-by-step learning guidance for math, reading, writing, grammar, and vocabulary without giving direct answers.

## 🚀 Features

- **Modern Design**: Clean, responsive layout that works on all devices
- **Real Download**: Direct download of the Chrome extension zip file
- **Step-by-Step Focus**: Emphasizes the learning approach (no direct answers)
- **Multiple Subjects**: Highlights support for math, reading, writing, grammar, and vocabulary
- **No Setup Required**: Emphasizes the offline, no-API-key nature

## 📁 Project Structure

```
ai-tutor-landing/
├── index.html              # Main landing page
├── styles.css              # Styling and responsive design
├── script.js               # Interactive functionality
├── alpha-tutor-extension.zip # Chrome extension file
├── vercel.json             # Vercel deployment configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **Vanilla JavaScript**: No dependencies, pure JS
- **Vercel**: Deployment platform

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to GitHub**:
   - Push this repository to GitHub
   - Connect your GitHub account to Vercel
   - Import this repository

2. **Automatic Deployment**:
   - Vercel will automatically deploy on every push
   - Custom domain can be added in Vercel dashboard

3. **Manual Deployment**:
   ```bash
   npm i -g vercel
   vercel
   ```

### Other Platforms

This is a static site and can be deployed to:
- **Netlify**: Drag and drop the folder
- **GitHub Pages**: Enable in repository settings
- **Firebase Hosting**: Use Firebase CLI
- **Any static hosting**: Upload the files

## 🔧 Local Development

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ai-tutor-landing
   ```

2. **Open in browser**:
   ```bash
   open index.html
   # or
   python -m http.server 8000
   ```

3. **Make changes**:
   - Edit HTML, CSS, or JS files
   - Test locally
   - Commit and push changes

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- **Desktop**: Full layout with side-by-side content
- **Tablet**: Adjusted grid layouts
- **Mobile**: Stacked layout with touch-friendly buttons

## 🎨 Customization

### Colors
The design uses a purple/blue gradient theme. To change colors, update the CSS custom properties in `styles.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --text-color: #333;
  --background-color: #ffffff;
}
```

### Content
- **Hero section**: Update title and subtitle in `index.html`
- **Features**: Modify the feature cards in the features section
- **Download**: The download buttons automatically use `alpha-tutor-extension.zip`

### Styling
- **Fonts**: Currently uses Inter font from Google Fonts
- **Animations**: CSS animations can be customized in `styles.css`
- **Layout**: Grid and flexbox layouts are easily adjustable

## 🔗 Extension Integration

The landing page is designed to work with the AI Tutor Chrome Extension:

1. **Download**: Users can download the extension zip file
2. **Installation**: Instructions are provided in the extension's README
3. **Features**: Landing page highlights the extension's key features

## 📄 License

MIT License - feel free to use this landing page template for your own projects.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions about the landing page or deployment:
- Open an issue on GitHub
- Check the Vercel documentation for deployment help

---

**Ready to deploy?** Just push this repository to GitHub and connect it to Vercel for instant deployment!
