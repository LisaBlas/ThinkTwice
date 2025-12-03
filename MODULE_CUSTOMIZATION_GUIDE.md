# Module Pages Customization Guide

This guide explains how to customize styling and navigation across all module pages.

## Architecture Overview

The module system uses a **shared layout component** (`ModuleLayout.jsx`) that wraps all individual module pages. This allows you to make styling and navigation changes in one place that automatically apply to all modules.

### File Structure

```
src/
├── components/
│   └── ModuleLayout.jsx          # Shared layout for all modules
├── pages/
│   ├── Module1Page.jsx           # Module 1 (with full content)
│   ├── Module2Page.jsx           # Module 2 (coming soon template)
│   ├── Module3Page.jsx           # Module 3 (coming soon template)
│   ├── Module4Page.jsx           # Module 4 (coming soon template)
│   ├── Module5Page.jsx           # Module 5 (coming soon template)
│   └── Module6Page.jsx           # Module 6 (coming soon template)
```

## How to Customize

### 1. Change Sidebar Styling (All Modules)

**File:** `src/components/ModuleLayout.jsx`

**What you can change:**
- Background colors of sidebar sections
- Font sizes and styles
- Spacing and padding
- Shadow effects
- Border styles

**Example locations:**
- Line 75: Modules navigation container styling
- Line 137: Quick navigation container styling

### 2. Update Quick Navigation Menu (All Modules)

**File:** `src/components/ModuleLayout.jsx`

**Location:** Lines 27-34

```javascript
const quickNavItems = [
  { id: 'intro', label: 'Introduction' },
  { id: 'video', label: 'Watch' },
  { id: 'keyterms', label: 'Key Terms' },
  { id: 'podcast', label: 'Listen' },
  { id: 'resources', label: 'Explore' },
  { id: 'practice', label: 'Practice' },
];
```

**To add/remove/rename sections:**
1. Update the `quickNavItems` array
2. Make sure the `id` matches the section ID in your module content
3. The `label` is what appears in the navigation

### 3. Update Module List

**File:** `src/components/ModuleLayout.jsx`

**Location:** Lines 17-24

```javascript
const modules = [
  { id: 1, title: 'Understand Core Concepts', available: true, link: '/module/1' },
  { id: 2, title: 'Spotlight on News and Reporting', available: false, link: '/module/2' },
  // ... etc
];
```

**To update:**
- Change `title` to update module names
- Set `available: true` when a module is ready
- Update `link` if you change routing

### 4. Change Section Styling (All Modules)

**Common section styles are in individual module pages:**

**Section header with icon:**
```javascript
<div className="flex items-center gap-3 mb-6">
  <IconName className="h-6 w-6 text-editorial-charcoal flex-shrink-0" />
  <h2 className="font-playfair font-bold text-2xl md:text-3xl text-editorial-charcoal">
    Section Title
  </h2>
</div>
```

**To change icons across all modules:**
1. Update the icon import at the top of each module page
2. Replace `<IconName />` in the section header

**To change section spacing:**
- Modify `mb-24` (margin-bottom) in section tags
- Currently set to 96px between sections

### 5. Add Content to a Module

**Example:** To add content to Module 2:

1. Open `src/pages/Module2Page.jsx`
2. Replace placeholder content in each section
3. The structure is already set up - just replace the "Coming Soon" content

**Sections available:**
- Introduction (orange background)
- Video (with iframe embed)
- Key Terms (for flip cards or definitions)
- Podcast (with iframe embed)
- Resources (for links and materials)
- Practice (orange background, links to tools)

### 6. Change Global Module Styling

**Colors:**
- Editorial Orange: `bg-editorial-orange`, `text-editorial-orange`
- Editorial Cream: `bg-editorial-cream`, `text-editorial-cream`
- Editorial Charcoal: `bg-editorial-charcoal`, `text-editorial-charcoal`

**Spacing:**
- Section spacing: `mb-24` (96px)
- Scroll offset: `scroll-mt-24` (for sticky header)
- Container padding: `p-8` (32px)

**Typography:**
- Headers: `font-playfair font-bold`
- Body text: `font-light`
- Labels: `font-mono`

## Quick Reference: Common Changes

### Change sidebar background color
**File:** `src/components/ModuleLayout.jsx`
**Find:** `bg-editorial-cream`
**Replace with:** Your desired color class

### Change section header icon size
**Files:** All `Module*Page.jsx` files
**Find:** `h-6 w-6` (in icon className)
**Replace with:** `h-8 w-8` for larger, `h-4 w-4` for smaller

### Change section spacing
**Files:** All `Module*Page.jsx` files
**Find:** `mb-24` (in section tags)
**Replace with:** `mb-16` for less space, `mb-32` for more space

### Enable a module
**File:** `src/components/ModuleLayout.jsx`
**Find:** Module in the `modules` array
**Change:** `available: false` to `available: true`

## Tips

1. **Test changes in Module 1 first** - It has full content so you can see the real impact
2. **Use browser dev tools** - Inspect elements to see current styles
3. **Consistent spacing** - Keep the same spacing values across all modules
4. **Icon consistency** - Use the same icon sizes for similar elements
5. **Color palette** - Stick to the editorial color scheme for consistency

## Need Help?

- Check `tailwind.config.js` for custom color definitions
- Look at `Module1Page.jsx` for a complete example with all sections filled
- The `ModuleLayout.jsx` component handles all navigation and sidebar logic

