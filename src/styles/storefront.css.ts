import { globalStyle, style } from '@vanilla-extract/css'
import './reset.css'

// Scoped storefront classes. Descendant and state rules below preserve the responsive design.
export const snackCard = style({})

export const snack0 = style({})

export const snack1 = style({})

export const snack2 = style({})

export const snack3 = style({})

export const active = style({})

export const visible = style({})

export const desktopBreak = style({})

export const announcement = style({
  "height": "35px",
  "background": "#713c28",
  "color": "#fff4db",
  "display": "flex",
  "gap": "20px",
  "alignItems": "center",
  "justifyContent": "center",
  "fontSize": "10px",
  "letterSpacing": "1.8px",
  "fontWeight": 600
})

export const storeHeader = style({
  "height": "103px",
  "margin": "auto",
  "maxWidth": "1440px",
  "padding": "0 5.5%",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "space-between",
  "gap": "30px"
})

export const wordmark = style({
  "fontFamily": "Georgia, serif",
  "fontWeight": 700,
  "fontSize": "32px",
  "letterSpacing": "-1.8px",
  "whiteSpace": "nowrap"
})

export const brandDot = style({})

export const bagButton = style({
  "display": "flex",
  "alignItems": "center",
  "gap": "10px",
  "background": "none",
  "fontSize": "13px"
})

export const hero = style({
  "maxWidth": "1440px",
  "margin": "auto",
  "display": "grid",
  "gridTemplateColumns": "1fr 1fr",
  "minHeight": "545px",
  "padding": "0 3% 30px 5.5%",
  "alignItems": "stretch"
})

export const heroCopy = style({
  "padding": "60px 20px 40px 0"
})

export const eyebrow = style({
  "fontSize": "10px",
  "fontWeight": 700,
  "letterSpacing": "1.8px",
  "display": "block"
})

export const tinySpark = style({
  "color": "var(--orange)",
  "fontSize": "20px",
  "verticalAlign": "middle",
  "marginRight": "9px"
})

export const button = style({
  "display": "inline-flex",
  "alignItems": "center",
  "justifyContent": "center",
  "gap": "28px",
  "background": "var(--orange)",
  "color": "#fff9ed",
  "padding": "17px 24px",
  "borderRadius": "5px",
  "fontSize": "12px",
  "fontWeight": 600,
  "minHeight": "50px",
  "transition": "background 0.2s,\n    transform 0.2s"
})

export const heroNote = style({
  "display": "flex",
  "alignItems": "center",
  "gap": "9px",
  "fontSize": "11px",
  "color": "#837767",
  "marginTop": "22px"
})

export const heroPhoto = style({
  "position": "relative",
  "minHeight": "510px",
  "borderRadius": "100px 8px 8px 8px",
  "margin": "0 0 0 12px",
  "background": "#bb9368",
  "overflow": "hidden"
})

export const roundStamp = style({
  "position": "absolute",
  "right": "25px",
  "top": "25px",
  "width": "143px",
  "height": "143px",
  "border": "1px dashed #7f5437",
  "outline": "7px solid #e7c983",
  "background": "#e7c983",
  "borderRadius": "50%",
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "center",
  "justifyContent": "center",
  "fontSize": "8px",
  "letterSpacing": "1.5px",
  "transform": "rotate(12deg)",
  "color": "#5a3925"
})

export const photoCaption = style({
  "position": "absolute",
  "bottom": "22px",
  "left": "24px",
  "fontSize": "10px",
  "color": "white",
  "letterSpacing": "1px"
})

export const promiseStrip = style({
  "display": "flex",
  "justifyContent": "space-evenly",
  "alignItems": "center",
  "gap": "20px",
  "background": "#ede9db",
  "borderBlock": "1px solid #e1dbc9",
  "minHeight": "62px",
  "font": "italic 19px Georgia,\n    serif"
})

export const catalogue = style({
  "maxWidth": "1440px",
  "margin": "auto",
  "padding": "76px 5.5% 72px"
})

export const sectionTitle = style({
  "display": "flex",
  "justifyContent": "space-between",
  "alignItems": "end",
  "gap": "25px"
})

export const story = style({
  "margin": "0 5.5%",
  "padding": "50px 10%",
  "display": "grid",
  "gridTemplateColumns": "0.8fr 1fr",
  "gap": "12%",
  "alignItems": "center",
  "background": "#ebe8db",
  "borderRadius": "8px"
})

export const faq = style({
  "maxWidth": "760px",
  "margin": "80px auto",
  "padding": "0 24px"
})

export const catalogueTools = style({
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "space-between",
  "gap": "15px",
  "margin": "30px 0 19px"
})

export const tabs = style({
  "display": "flex",
  "gap": "7px"
})

export const searchSort = style({
  "display": "flex",
  "alignItems": "center",
  "gap": "12px"
})

export const search = style({
  "display": "flex",
  "alignItems": "center",
  "gap": "8px"
})

export const sampleNote = style({
  "fontSize": "10px",
  "color": "#766d60",
  "marginBottom": "18px"
})

export const productGrid = style({
  "display": "grid",
  "gridTemplateColumns": "repeat(4, minmax(0, 1fr))",
  "gap": "24px"
})

export const productPicture = style({
  "position": "relative",
  "display": "block",
  "width": "100%",
  "aspectRatio": "1/1.13",
  "background": "#e5d6bb",
  "overflow": "hidden",
  "borderRadius": "7px"
})

export const productBadge = style({
  "position": "absolute",
  "top": "13px",
  "left": "13px",
  "fontSize": "8px",
  "fontWeight": 700,
  "letterSpacing": "0.8px",
  "background": "#fffbed",
  "padding": "7px 9px",
  "borderRadius": "3px"
})

export const viewProduct = style({
  "position": "absolute",
  "bottom": "0",
  "left": "0",
  "right": "0",
  "background": "#faf7efd9",
  "fontSize": "11px",
  "padding": "12px",
  "opacity": 0,
  "transition": "opacity 0.2s"
})

export const productMeta = style({
  "display": "flex",
  "justifyContent": "space-between",
  "margin": "17px 0 9px",
  "fontSize": "9px",
  "color": "#847862"
})

export const productTitle = style({
  "display": "flex",
  "justifyContent": "space-between",
  "gap": "8px",
  "alignItems": "baseline"
})

export const addButton = style({
  "marginTop": "17px",
  "display": "flex",
  "width": "100%",
  "justifyContent": "space-between",
  "alignItems": "center",
  "background": "transparent",
  "border": "1px solid #d4c9b7",
  "borderRadius": "4px",
  "padding": "11px 14px",
  "fontSize": "11px"
})

export const storyIllustration = style({
  "fontFamily": "Georgia, serif",
  "fontStyle": "italic",
  "color": "#a65b36",
  "fontSize": "240px",
  "lineHeight": 1,
  "textAlign": "center",
  "transform": "rotate(-15deg)"
})

export const storeFooter = style({
  "background": "#383e30",
  "color": "#f2eddd",
  "padding": "42px 5.5%",
  "display": "flex",
  "alignItems": "center",
  "gap": "35px",
  "flexWrap": "wrap"
})

export const toast = style({
  "position": "fixed",
  "bottom": "25px",
  "left": "50%",
  "transform": "translate(-50%, 20px)",
  "background": "#383e30",
  "color": "white",
  "borderRadius": "5px",
  "padding": "16px 24px",
  "fontSize": "13px",
  "opacity": 0,
  "pointerEvents": "none",
  "transition": "0.2s",
  "zIndex": 20,
  "boxShadow": "0 4px 20px #0002"
})

export const close = style({
  "background": "none",
  "padding": "8px"
})

export const bagDialog = style({
  "margin": "0 0 0 auto",
  "height": "100dvh",
  "maxWidth": "100%",
  "width": "470px",
  "inset": "0"
})

export const bagHeading = style({
  "padding": "35px 30px 25px",
  "position": "relative",
  "borderBottom": "1px solid var(--line)"
})

export const bagLines = style({
  "padding": "0 30px"
})

export const bagLine = style({
  "padding": "22px 0",
  "borderBottom": "1px solid var(--line)",
  "display": "flex",
  "gap": "20px"
})

export const quantity = style({
  "display": "flex",
  "alignItems": "center",
  "gap": "12px",
  "marginTop": "14px"
})

export const remove = style({})

export const bagSummary = style({
  "padding": "30px"
})

export const subtotal = style({
  "display": "flex",
  "justifyContent": "space-between",
  "fontSize": "17px"
})

export const empty = style({
  "textAlign": "center",
  "padding": "60px 24px"
})

export const emptyIcon = style({
  "display": "block",
  "fontSize": "60px",
  "color": "var(--orange)",
  "marginBottom": "20px"
})

export const productDialog = style({
  "width": "760px",
  "margin": "auto",
  "borderRadius": "10px",
  "position": "fixed",
  "inset": "0"
})

export const detailCopy = style({
  "padding": "50px 30px 30px"
})

export const previewConfirmation = style({
  "padding": "35px 30px"
})

export const error = style({
  "color": "#a22921 !important"
})

export const errorPage = style({
  "padding": "100px 5%",
  "textAlign": "center"
})

export const secondaryHeader = style({
  "borderBottom": "1px solid var(--line)",
  "padding": "25px 5%",
  "display": "flex",
  "justifyContent": "space-between",
  "alignItems": "center"
})

globalStyle(`:root`, {
  "fontFamily": "\"DM Sans\", sans-serif",
  "color": "#34291f",
  "background": "#faf7ef",
  "fontSynthesis": "none",
  "vars": {
    "--orange": "#bf4a2d",
    "--line": "#ded9ce",
    "--cream": "#faf7ef"
  }
})

globalStyle(`*`, {
  "boxSizing": "border-box"
})

globalStyle(`html`, {
  "scrollBehavior": "smooth",
  "scrollPaddingTop": "30px"
})

globalStyle(`body`, {
  "margin": "0"
})

globalStyle(`button,
a,
input,
select`, {
  "WebkitTapHighlightColor": "transparent"
})

globalStyle(`button,
a,
select`, {
  "touchAction": "manipulation"
})

globalStyle(`button,
select,
input`, {
  "font": "inherit"
})

globalStyle(`button,
a`, {
  "color": "inherit"
})

globalStyle(`button`, {
  "cursor": "pointer"
})

globalStyle(`button:disabled`, {
  "opacity": 0.5,
  "cursor": "not-allowed"
})

globalStyle(`a`, {
  "textDecoration": "none"
})

globalStyle(`button`, {
  "border": "0"
})

globalStyle(`button:focus-visible,
a:focus-visible,
summary:focus-visible,
input:focus-visible,
select:focus-visible`, {
  "outline": "3px solid #a44f24",
  "outlineOffset": "5px"
})

globalStyle(`h1,
h2,
h3,
p`, {
  "margin": "0"
})

globalStyle(`h1,
h2`, {
  "fontFamily": "\"Playfair Display\", Georgia, serif",
  "fontWeight": 500
})

globalStyle(`img`, {
  "display": "block",
  "maxWidth": "100%"
})

globalStyle(`${announcement} span`, {
  "color": "#e2ba78"
})

globalStyle(`${wordmark} > span`, {
  "color": "var(--orange)",
  "padding": "0 3px",
  "fontStyle": "italic"
})

globalStyle(`${wordmark} ${brandDot}`, {
  "font": "10px sans-serif",
  "verticalAlign": "top",
  "display": "inline-block",
  "marginTop": "5px",
  "letterSpacing": "0"
})

globalStyle(`${storeHeader} nav`, {
  "display": "flex",
  "gap": "32px",
  "fontSize": "13px"
})

globalStyle(`${storeHeader} nav a:hover`, {
  "color": "var(--orange)"
})

globalStyle(`${bagButton} b`, {
  "background": "#ece5d7",
  "borderRadius": "50%",
  "minWidth": "23px",
  "height": "23px",
  "display": "grid",
  "placeItems": "center",
  "fontSize": "11px"
})

globalStyle(`${hero} h1`, {
  "fontSize": "clamp(52px, 5.3vw, 82px)",
  "letterSpacing": "-3px",
  "lineHeight": 1.09,
  "margin": "24px 0"
})

globalStyle(`${hero} h1 em`, {
  "color": "var(--orange)",
  "fontWeight": 500
})

globalStyle(`${heroCopy} > p`, {
  "fontSize": "14px",
  "lineHeight": 1.9,
  "color": "#746958",
  "maxWidth": "430px"
})

globalStyle(`${button}:hover`, {
  "background": "#993922",
  "transform": "translateY(-1px)"
})

globalStyle(`${hero} ${button}`, {
  "marginTop": "29px"
})

globalStyle(`${heroNote} span`, {
  "fontSize": "20px"
})

globalStyle(`${heroPhoto} > img`, {
  "width": "100%",
  "height": "100%",
  "objectFit": "cover",
  "position": "absolute",
  "filter": "brightness(0.83) saturate(0.85)",
  "objectPosition": "50% 53%"
})

globalStyle(`${roundStamp} span`, {
  "fontFamily": "Georgia, serif",
  "textAlign": "center",
  "fontSize": "21px",
  "lineHeight": 1.15,
  "letterSpacing": "-0.5px",
  "margin": "9px 0"
})

globalStyle(`${sectionTitle} h2,
${story} h2,
${faq} h2`, {
  "fontSize": "40px",
  "letterSpacing": "-1.2px",
  "lineHeight": 1.2,
  "margin": "13px 0 0"
})

globalStyle(`${sectionTitle} > p`, {
  "fontSize": "12px",
  "color": "#827563",
  "paddingBottom": "5px"
})

globalStyle(`${tabs} button`, {
  "background": "transparent",
  "border": "1px solid #d8d0bf",
  "padding": "10px 19px",
  "borderRadius": "30px",
  "fontSize": "12px",
  "whiteSpace": "nowrap"
})

globalStyle(`${tabs} button${active}`, {
  "background": "#3a4130",
  "borderColor": "#3a4130",
  "color": "#fff"
})

globalStyle(`${search} svg`, {
  "width": "15px"
})

globalStyle(`${search} input`, {
  "width": "128px",
  "background": "none",
  "border": "0",
  "fontSize": "11px",
  "outlineOffset": "3px"
})

globalStyle(`${searchSort} select`, {
  "fontSize": "11px",
  "padding": "9px 5px",
  "border": "0",
  "background": "transparent",
  "color": "#695e4c"
})

globalStyle(`${productPicture} > img`, {
  "width": "100%",
  "height": "100%",
  "objectFit": "cover",
  "transition": "transform 0.4s"
})

globalStyle(`${snack0} ${productPicture} > img`, {
  "objectPosition": "25% center"
})

globalStyle(`${snack1} ${productPicture} > img`, {
  "objectPosition": "45% center"
})

globalStyle(`${snack2} ${productPicture} > img`, {
  "filter": "sepia(0.35) brightness(0.72)",
  "transform": "scale(1.12)",
  "objectPosition": "75% 25%"
})

globalStyle(`${snack3} ${productPicture} > img`, {
  "transform": "scale(1.25)",
  "filter": "sepia(0.25)",
  "objectPosition": "20% center"
})

globalStyle(`${productPicture}:hover > img`, {
  "transform": "scale(1.07)"
})

globalStyle(`${snack1} ${productBadge}`, {
  "background": "#e9eddc"
})

globalStyle(`${snack3} ${productBadge}`, {
  "background": "#f1d5bf"
})

globalStyle(`${productPicture}:hover ${viewProduct},
${productPicture}:focus-visible ${viewProduct}`, {
  "opacity": 1
})

globalStyle(`${productMeta} span:last-child`, {
  "fontSize": "7px",
  "letterSpacing": "0.8px"
})

globalStyle(`${productTitle} h3`, {
  "fontFamily": "Georgia, serif",
  "fontSize": "19px",
  "fontWeight": 500,
  "letterSpacing": "-0.5px"
})

globalStyle(`${productTitle} > span`, {
  "fontSize": "12px",
  "whiteSpace": "nowrap"
})

globalStyle(`${addButton}:hover`, {
  "background": "#eee7d8"
})

globalStyle(`${addButton} span`, {
  "fontSize": "19px",
  "lineHeight": 1
})

globalStyle(`${story} h2`, {
  "fontSize": "43px"
})

globalStyle(`${story} p`, {
  "fontSize": "13px",
  "lineHeight": 1.9,
  "color": "#716958",
  "margin": "22px 0"
})

globalStyle(`${story} a`, {
  "fontSize": "12px",
  "borderBottom": "1px solid #a29987",
  "paddingBottom": "7px"
})

globalStyle(`${story} a span`, {
  "paddingLeft": "30px"
})

globalStyle(`${faq} h2`, {
  "marginBottom": "30px"
})

globalStyle(`${faq} details`, {
  "borderTop": "1px solid var(--line)",
  "padding": "20px 0",
  "fontSize": "13px"
})

globalStyle(`${faq} details:last-child`, {
  "borderBottom": "1px solid var(--line)"
})

globalStyle(`${faq} summary`, {
  "cursor": "pointer"
})

globalStyle(`${faq} details p`, {
  "lineHeight": 1.8,
  "marginTop": "15px",
  "color": "#736958"
})

globalStyle(`${storeFooter} ${wordmark}`, {
  "fontSize": "29px"
})

globalStyle(`${storeFooter} p,
${storeFooter} a:not(${wordmark})`, {
  "fontSize": "12px"
})

globalStyle(`${storeFooter} > a:last-of-type`, {
  "marginLeft": "auto"
})

globalStyle(`${storeFooter} small`, {
  "flexBasis": "100%",
  "borderTop": "1px solid #5d6153",
  "paddingTop": "20px",
  "fontSize": "10px",
  "color": "#c7cabb"
})

globalStyle(`${toast}${visible}`, {
  "opacity": 1,
  "transform": "translate(-50%, 0)"
})

globalStyle(`dialog`, {
  "background": "var(--cream)",
  "color": "#34291f",
  "border": "0",
  "padding": "0",
  "maxHeight": "100dvh"
})

globalStyle(`dialog::backdrop`, {
  "background": "#2d211b70",
  "backdropFilter": "blur(3px)"
})

globalStyle(`${bagHeading} ${close}`, {
  "position": "absolute",
  "right": "20px",
  "top": "23px"
})

globalStyle(`${bagHeading} h2`, {
  "fontSize": "32px",
  "marginTop": "15px"
})

globalStyle(`${bagLine} img`, {
  "width": "84px",
  "height": "98px",
  "objectFit": "cover",
  "borderRadius": "4px"
})

globalStyle(`${bagLine} h3`, {
  "font": "18px Georgia,\n    serif",
  "marginBottom": "8px"
})

globalStyle(`${bagLine} span`, {
  "fontSize": "12px"
})

globalStyle(`${quantity} button`, {
  "border": "1px solid var(--line)",
  "background": "none",
  "width": "25px",
  "height": "25px"
})

globalStyle(`${quantity} output`, {
  "fontSize": "12px"
})

globalStyle(`${quantity} ${remove}`, {
  "width": "auto",
  "border": "0",
  "textDecoration": "underline",
  "fontSize": "10px",
  "marginLeft": "5px"
})

globalStyle(`${bagSummary} p`, {
  "fontSize": "12px",
  "lineHeight": 1.7,
  "color": "#736958",
  "margin": "15px 0 23px"
})

globalStyle(`${bagSummary} ${button}`, {
  "width": "100%",
  "gap": "12px"
})

globalStyle(`${bagSummary} small`, {
  "display": "block",
  "textAlign": "center",
  "fontSize": "10px",
  "marginTop": "15px",
  "color": "#736958"
})

globalStyle(`${empty} h3`, {
  "font": "24px Georgia,\n    serif"
})

globalStyle(`${empty} p`, {
  "fontSize": "13px",
  "margin": "18px 0 25px"
})

globalStyle(`${productDialog}[open]`, {
  "display": "grid",
  "gridTemplateColumns": "1fr 1fr"
})

globalStyle(`${productDialog} > ${close}`, {
  "position": "absolute",
  "right": "10px",
  "top": "10px",
  "background": "var(--cream)",
  "borderRadius": "50%",
  "zIndex": 1
})

globalStyle(`${productDialog} > img`, {
  "height": "100%",
  "minHeight": "420px",
  "objectFit": "cover"
})

globalStyle(`${detailCopy} h2`, {
  "fontSize": "34px",
  "margin": "18px 0"
})

globalStyle(`${detailCopy} p`, {
  "fontSize": "13px",
  "lineHeight": 1.8,
  "marginBottom": "20px"
})

globalStyle(`${detailCopy} strong`, {
  "display": "block",
  "marginBottom": "25px"
})

globalStyle(`${detailCopy} ${button}`, {
  "gap": "15px"
})

globalStyle(`${previewConfirmation} > span`, {
  "fontSize": "60px",
  "color": "var(--orange)"
})

globalStyle(`${previewConfirmation} h3`, {
  "font": "26px Georgia,\n    serif",
  "margin": "15px 0"
})

globalStyle(`${previewConfirmation} p`, {
  "fontSize": "14px",
  "lineHeight": 1.8,
  "marginBottom": "30px"
})

globalStyle(`${previewConfirmation} ${button}`, {
  "marginTop": "30px"
})

globalStyle(`${errorPage} h1`, {
  "fontSize": "38px"
})

globalStyle(`${errorPage} p`, {
  "margin": "20px"
})

globalStyle(`${secondaryHeader} > a:last-child`, {
  "fontSize": "13px"
})

globalStyle(`${story}`, {
  "@media": {
    "(min-width: 1441px)": {
      "maxWidth": "1280px",
      "margin": "auto"
    }
  }
})

globalStyle(`${storeHeader} nav`, {
  "@media": {
    "(max-width: 1050px)": {
      "gap": "18px"
    }
  }
})

globalStyle(`${wordmark}`, {
  "@media": {
    "(max-width: 1050px)": {
      "fontSize": "28px"
    }
  }
})

globalStyle(`${hero} h1`, {
  "@media": {
    "(max-width: 1050px)": {
      "fontSize": "62px"
    }
  }
})

globalStyle(`${heroPhoto}`, {
  "@media": {
    "(max-width: 1050px)": {
      "minHeight": "480px"
    }
  }
})

globalStyle(`${heroCopy}`, {
  "@media": {
    "(max-width: 1050px)": {
      "paddingTop": "50px"
    }
  }
})

globalStyle(`${search} input`, {
  "@media": {
    "(max-width: 1050px)": {
      "width": "95px"
    }
  }
})

globalStyle(`${tabs} button`, {
  "@media": {
    "(max-width: 1050px)": {
      "padding": "9px 13px"
    }
  }
})

globalStyle(`${productGrid}`, {
  "@media": {
    "(max-width: 1050px)": {
      "gap": "16px"
    }
  }
})

globalStyle(`${productTitle}`, {
  "@media": {
    "(max-width: 1050px)": {
      "flexWrap": "wrap"
    }
  }
})

globalStyle(`${sectionTitle} > p`, {
  "@media": {
    "(max-width: 1050px)": {
      "maxWidth": "210px",
      "lineHeight": 1.6
    }
  }
})

globalStyle(`${story}`, {
  "@media": {
    "(max-width: 1050px)": {
      "padding": "40px 6%"
    }
  }
})

globalStyle(`${story} h2`, {
  "@media": {
    "(max-width: 1050px)": {
      "fontSize": "38px"
    }
  }
})

globalStyle(`${announcement}`, {
  "@media": {
    "(max-width: 760px)": {
      "fontSize": "8px",
      "letterSpacing": "1px",
      "gap": "10px"
    }
  }
})

globalStyle(`${storeHeader}`, {
  "@media": {
    "(max-width: 760px)": {
      "height": "82px",
      "padding": "0 6%"
    }
  }
})

globalStyle(`${storeHeader} nav`, {
  "@media": {
    "(max-width: 760px)": {
      "display": "none"
    }
  }
})

globalStyle(`${wordmark}`, {
  "@media": {
    "(max-width: 760px)": {
      "fontSize": "28px"
    }
  }
})

globalStyle(`${bagButton}`, {
  "@media": {
    "(max-width: 760px)": {
      "gap": "6px"
    }
  }
})

globalStyle(`${hero}`, {
  "@media": {
    "(max-width: 760px)": {
      "gridTemplateColumns": "1fr",
      "padding": "0 6% 26px"
    }
  }
})

globalStyle(`${heroCopy}`, {
  "@media": {
    "(max-width: 760px)": {
      "padding": "28px 0 35px"
    }
  }
})

globalStyle(`${hero} h1`, {
  "@media": {
    "(max-width: 760px)": {
      "fontSize": "64px",
      "margin": "18px 0"
    }
  }
})

globalStyle(`${heroCopy} > p`, {
  "@media": {
    "(max-width: 760px)": {
      "fontSize": "13px"
    }
  }
})

globalStyle(`${heroPhoto}`, {
  "@media": {
    "(max-width: 760px)": {
      "margin": "0",
      "minHeight": "370px",
      "borderTopLeftRadius": "70px"
    }
  }
})

globalStyle(`${roundStamp}`, {
  "@media": {
    "(max-width: 760px)": {
      "width": "120px",
      "height": "120px",
      "right": "22px",
      "top": "22px",
      "fontSize": "7px"
    }
  }
})

globalStyle(`${roundStamp} span`, {
  "@media": {
    "(max-width: 760px)": {
      "fontSize": "19px"
    }
  }
})

globalStyle(`${heroNote}`, {
  "@media": {
    "(max-width: 760px)": {
      "marginTop": "16px"
    }
  }
})

globalStyle(`${promiseStrip}`, {
  "@media": {
    "(max-width: 760px)": {
      "display": "grid",
      "gridTemplateColumns": "1fr 1fr",
      "gap": "17px 8px",
      "textAlign": "center",
      "padding": "19px 10px",
      "fontSize": "16px"
    }
  }
})

globalStyle(`${catalogue}`, {
  "@media": {
    "(max-width: 760px)": {
      "padding": "45px 6%"
    }
  }
})

globalStyle(`${sectionTitle}`, {
  "@media": {
    "(max-width: 760px)": {
      "display": "block"
    }
  }
})

globalStyle(`${sectionTitle} h2`, {
  "@media": {
    "(max-width: 760px)": {
      "fontSize": "35px"
    }
  }
})

globalStyle(`${sectionTitle} > p`, {
  "@media": {
    "(max-width: 760px)": {
      "maxWidth": "none",
      "marginTop": "14px"
    }
  }
})

globalStyle(`${catalogueTools}`, {
  "@media": {
    "(max-width: 760px)": {
      "display": "block",
      "margin": "25px 0 12px"
    }
  }
})

globalStyle(`${tabs}`, {
  "@media": {
    "(max-width: 760px)": {
      "justifyContent": "space-between",
      "gap": "5px"
    }
  }
})

globalStyle(`${tabs} button`, {
  "@media": {
    "(max-width: 760px)": {
      "padding": "9px 13px",
      "fontSize": "11px"
    }
  }
})

globalStyle(`${searchSort}`, {
  "@media": {
    "(max-width: 760px)": {
      "justifyContent": "space-between",
      "marginTop": "18px"
    }
  }
})

globalStyle(`${search} input`, {
  "@media": {
    "(max-width: 760px)": {
      "width": "150px"
    }
  }
})

globalStyle(`${productGrid}`, {
  "@media": {
    "(max-width: 760px)": {
      "gridTemplateColumns": "1fr 1fr",
      "gap": "28px 15px"
    }
  }
})

globalStyle(`${productTitle} h3`, {
  "@media": {
    "(max-width: 760px)": {
      "fontSize": "18px"
    }
  }
})

globalStyle(`${productTitle}`, {
  "@media": {
    "(max-width: 760px)": {
      "minHeight": "53px",
      "alignContent": "start",
      "gap": "6px"
    }
  }
})

globalStyle(`${productMeta} span:last-child`, {
  "@media": {
    "(max-width: 760px)": {
      "display": "none"
    }
  }
})

globalStyle(`${productBadge}`, {
  "@media": {
    "(max-width: 760px)": {
      "fontSize": "6px",
      "top": "9px",
      "left": "8px",
      "padding": "6px"
    }
  }
})

globalStyle(`${sampleNote}`, {
  "@media": {
    "(max-width: 760px)": {
      "fontSize": "9px",
      "lineHeight": 1.6
    }
  }
})

globalStyle(`${productPicture}`, {
  "@media": {
    "(max-width: 760px)": {
      "aspectRatio": "1/1.2"
    }
  }
})

globalStyle(`${addButton}`, {
  "@media": {
    "(max-width: 760px)": {
      "marginTop": "10px"
    }
  }
})

globalStyle(`${story}`, {
  "@media": {
    "(max-width: 760px)": {
      "gridTemplateColumns": "1fr",
      "gap": "0",
      "padding": "32px 8%",
      "margin": "0 6%"
    }
  }
})

globalStyle(`${storyIllustration}`, {
  "@media": {
    "(max-width: 760px)": {
      "fontSize": "120px",
      "textAlign": "left",
      "lineHeight": 1,
      "marginBottom": "15px"
    }
  }
})

globalStyle(`${story} h2`, {
  "@media": {
    "(max-width: 760px)": {
      "fontSize": "36px"
    }
  }
})

globalStyle(`${faq}`, {
  "@media": {
    "(max-width: 760px)": {
      "margin": "50px auto"
    }
  }
})

globalStyle(`${faq} h2`, {
  "@media": {
    "(max-width: 760px)": {
      "fontSize": "34px"
    }
  }
})

globalStyle(`${storeFooter}`, {
  "@media": {
    "(max-width: 760px)": {
      "padding": "35px 6%",
      "gap": "20px"
    }
  }
})

globalStyle(`${storeFooter} p`, {
  "@media": {
    "(max-width: 760px)": {
      "width": "100%"
    }
  }
})

globalStyle(`${storeFooter} > a:last-of-type`, {
  "@media": {
    "(max-width: 760px)": {
      "marginLeft": "0"
    }
  }
})

globalStyle(`${toast}`, {
  "@media": {
    "(max-width: 760px)": {
      "width": "88%",
      "textAlign": "center",
      "fontSize": "12px"
    }
  }
})

globalStyle(`${productDialog}`, {
  "@media": {
    "(max-width: 760px)": {
      "width": "90%",
      "maxHeight": "90dvh"
    }
  }
})

globalStyle(`${productDialog}[open]`, {
  "@media": {
    "(max-width: 760px)": {
      "display": "block"
    }
  }
})

globalStyle(`${productDialog} > img`, {
  "@media": {
    "(max-width: 760px)": {
      "width": "100%",
      "height": "220px",
      "minHeight": "0"
    }
  }
})

globalStyle(`${detailCopy}`, {
  "@media": {
    "(max-width: 760px)": {
      "padding": "25px"
    }
  }
})

globalStyle(`${bagHeading},
  ${bagLines},
  ${bagSummary}`, {
  "@media": {
    "(max-width: 760px)": {
      "paddingLeft": "22px",
      "paddingRight": "22px"
    }
  }
})

globalStyle(`${desktopBreak}`, {
  "@media": {
    "(max-width: 760px)": {
      "display": "none"
    }
  }
})

globalStyle(`html`, {
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      "scrollBehavior": "auto"
    }
  }
})

globalStyle(`*,
  *::before,
  *::after`, {
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      "transition": "none !important",
      "animation": "none !important"
    }
  }
})


export const orderConfirmation = style({
  maxWidth: '38rem',
  margin: '5rem auto',
  padding: '0 1.5rem',
  textAlign: 'center',
})

globalStyle(`${orderConfirmation} h1`, {
  fontFamily: 'Georgia, serif',
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  fontWeight: 500,
  lineHeight: 1.1,
  margin: '1.25rem 0',
})

globalStyle(`${orderConfirmation} p`, {
  color: '#746958',
  lineHeight: 1.8,
  marginBottom: '1.5rem',
})

export const orderAmount = style({
  color: '#34291f',
  fontWeight: 700,
})
