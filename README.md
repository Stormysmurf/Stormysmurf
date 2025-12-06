# Visit Kenya - Tourist Guide Website

A modern, professional tourist guide website for Kenya inspired by VisitScotland.com design aesthetics.

## 📁 Project Structure

```
project/
├── index.html              # Homepage
├── destinations.html       # Destinations listing page
├── things-to-do.html      # Activities and experiences page
├── plan.html              # Trip planning page
├── css/
│   └── styles.css         # Main stylesheet
└── js/
    ├── data.js            # Destinations data
    ├── app.js             # Homepage JavaScript
    └── destinations.js    # Destinations page JavaScript
```

## 🎨 Design Features

- **Clean, Professional Layout**: Inspired by VisitScotland.com
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern Typography**: Using Open Sans and Merriweather fonts
- **Color Scheme**: Kenya green (#006747) with gold accents
- **Smooth Interactions**: Hover effects, transitions, and animations

## 📄 Pages Included

### 1. index.html (Homepage)
- Hero section with call-to-action
- Quick links to popular activities
- Featured destinations grid
- Inspiration/blog section
- Newsletter signup
- Full navigation and footer

### 2. destinations.html
- Complete destination listing
- Filter by category (beaches, wildlife, mountains, etc.)
- Search functionality
- Detailed destination modals
- Breadcrumb navigation

### 3. things-to-do.html
- Activities and experiences grid
- Category-based organization
- Links to relevant destinations

### 4. plan.html
- Trip planning form
- Essential travel information
- Visa requirements
- Best time to visit
- Health & safety tips
- Currency & budget information

## 🎯 Key Features

1. **Search Functionality**
   - Global search overlay
   - Inline search on destinations page
   - Filter by category

2. **Destination Cards**
   - Beautiful imagery
   - Category badges
   - Quick descriptions
   - Tags for easy identification

3. **Modal System**
   - Detailed destination information
   - Large imagery
   - Activity listings
   - Best time to visit
   - Share functionality

4. **Responsive Navigation**
   - Sticky header
   - Mobile menu
   - Top bar with language selector

5. **Forms & Interactions**
   - Newsletter subscription
   - Trip planning form
   - Contact forms ready

## 🖼️ Image Sources

Currently using Unsplash placeholder images:
- Replace with actual Kenya destination photos
- Maintain 800px width minimum for quality
- Use consistent aspect ratios

## 🎨 Color Palette

- **Primary**: #006747 (Kenya Green)
- **Secondary**: #d4af37 (Gold)
- **Text Dark**: #1a1a1a
- **Text Gray**: #4a4a4a
- **Text Light**: #767676
- **Background Light**: #f8f8f8
- **Border**: #e0e0e0

## 🔧 Customization

### Adding New Destinations

Edit `js/data.js` and add new destination objects:

```javascript
{
    id: 13,
    name: "Your Destination",
    location: "County/Region",
    category: "beach|wildlife|mountain|cultural|waterfall",
    image: "image-url.jpg",
    description: "Short description",
    longDescription: "Full description",
    tags: ["Tag1", "Tag2"],
    bestTime: "Best visiting period",
    activities: ["Activity 1", "Activity 2"],
    featured: true/false
}
```

### Changing Colors

Update CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #006747;
    --secondary-color: #d4af37;
    /* ... other variables */
}
```

### Adding New Pages

1. Copy the structure from existing HTML files
2. Update navigation active states
3. Add corresponding JavaScript if needed
4. Update footer links

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Setup Instructions

1. **Clone/Download** the project files

2. **Organize Files**:
   ```
   - Place all .html files in root directory
   - Create 'css' folder and place styles.css
   - Create 'js' folder and place all .js files
   ```

3. **Replace Images**:
   - Replace Unsplash URLs with actual destination photos
   - Maintain consistent image dimensions
   - Optimize images for web (compress to reduce load time)

4. **Update Content**:
   - Edit destination data in `js/data.js`
   - Update contact information in footer
   - Modify meta tags for SEO

5. **Test**:
   - Open index.html in a browser
   - Test all navigation links
   - Verify responsive design on mobile
   - Check all forms and interactions

## 📝 Additional Pages Needed

Consider creating these additional pages:
- accommodation.html (hotels, lodges, camps)
- blog.html (stories and travel guides)
- about.html (about the website/organization)
- contact.html (contact form)

## 🔗 External Dependencies

- **Google Fonts**: Open Sans and Merriweather
- **Images**: Currently using Unsplash (replace with local images)

## 💡 Tips

1. **Performance**: Optimize all images before deployment
2. **SEO**: Add meta descriptions to all pages
3. **Accessibility**: Test with screen readers
4. **Analytics**: Add Google Analytics tracking
5. **Forms**: Connect forms to backend or email service

## 📞 Support

For questions or issues:
- Email: info@visitkenya.com (update with actual contact)
- Update README with your actual contact information

## 📄 License

© 2024 Visit Kenya. All rights reserved.

---

**Note**: This is a front-end template. For full functionality, you'll need to:
- Connect forms to a backend service
- Implement actual email newsletter signup
- Add a content management system if needed
- Set up proper hosting and domain