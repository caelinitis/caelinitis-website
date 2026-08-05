import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-container": "#ff8681",
        "on-surface": "#191c1e",
        "on-primary-container": "#9da1ff",
        "on-tertiary": "#ffffff",
        "primary-fixed": "#e1e0ff",
        "primary": "#15157d",
        "error": "#ba1a1a",
        "surface-container": "#eceef0",
        "surface-tint": "#4f54b4",
        "tertiary-container": "#830012",
        "outline": "#777683",
        "surface-variant": "#e0e3e5",
        "on-secondary": "#ffffff",
        "on-secondary-fixed-variant": "#1e40af",
        "inverse-surface": "#2d3133",
        "inverse-primary": "#c0c1ff",
        "on-tertiary-fixed-variant": "#910818",
        "on-tertiary-fixed": "#410005",
        "on-primary-fixed-variant": "#373a9b",
        "surface-container-highest": "#e0e3e5",
        "on-secondary-container": "#1e3a8a",
        "surface-dim": "#d8dadc",
        "inverse-on-surface": "#eff1f3",
        "primary-fixed-dim": "#c0c1ff",
        "on-error-container": "#93000a",
        "surface-container-high": "#e6e8ea",
        "error-container": "#ffdad6",
        "on-background": "#191c1e",
        "secondary-fixed": "#bfdbfe",
        "on-primary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "secondary-fixed-dim": "#93c5fd",
        "on-secondary-fixed": "#1e3a8a",
        "on-error": "#ffffff",
        "secondary-container": "#dbeafe",
        "primary-container": "#2e3192",
        "surface-bright": "#f7f9fb",
        "on-surface-variant": "#464652",
        "tertiary": "#5a0009",
        "outline-variant": "#c7c5d4",
        "background": "#f7f9fb",
        "tertiary-fixed-dim": "#ffb3ae",
        "surface": "#f7f9fb",
        "secondary": "#2563eb",
        "tertiary-fixed": "#ffdad7",
        "surface-container-low": "#f2f4f6",
        "on-primary-fixed": "#04006d"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-desktop": "48px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "container-max": "1280px",
        "base": "8px"
      },
      fontFamily: {
        "headline-md": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "body-md": ["Inter"],
        "display-lg": ["Plus Jakarta Sans"],
        "body-lg": ["Inter"],
        "display-lg-mobile": ["Plus Jakarta Sans"],
        "label-md": ["Geist"],
        "code-sm": ["Geist"]
      },
      fontSize: {
        "headline-md": ["24px", {"lineHeight": "1.4", "fontWeight": "700"}],
        "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "700"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "800"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "display-lg-mobile": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "800"}],
        "label-md": ["14px", {"lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "500"}],
        "code-sm": ["13px", {"lineHeight": "1.5", "fontWeight": "400"}]
      }
    }
  }
}
