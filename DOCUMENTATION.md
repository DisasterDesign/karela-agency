# KARELA AGENCY - תיעוד פרויקט

## סיכום כללי
אתר פורטפוליו לסוכנות צילום KARELA AGENCY, בנוי עם Next.js 14 ומאוחסן ב-Vercel.

**URL:** https://karela-agency.vercel.app (או הדומיין שהוגדר)

---

## מבנה האתר

### דפים
| דף | נתיב | תיאור |
|---|---|---|
| בית | `/` | Hero video עם לוגו וניווט |
| Agency | `/agency` | גריד צלמים (2 עמודות במובייל, 3 בדסקטופ) |
| צלם בודד | `/agency/[name]` | עמוד פורטפוליו לכל צלם |
| Hotels | `/hotels` | גלריית scroll-snap עם וידאו/תמונות |
| Motion | `/motion` | גלריית וידאו אינטראקטיבית |
| Shop | `/shop` | חנות (בפיתוח) |
| Contact | `/contact` | יצירת קשר |

---

## צלמים באתר
| מזהה | שם | תיקייה | תמונות |
|---|---|---|---|
| Dor-2 | Dor Byder | Dor_Byder | 8 |
| Dimitry-1 | Dmitry Pomazan | Dmitry_Pomazan | 11 |
| bar | Bar Haim | Bar_Haim | 7 |
| oz | Oz Ohayon | Oz_Ohayon | 6 |
| jakob | Jakob Leon | Jakob_Leon | 12 |
| GUY1 | Guy Ashkenzy | Guy_Ashkenzy | 9 |
| or | Or Harel | Or_Harel | 5 |
| daniel | Daniel Israel | Daniel_Israel | 0 (ריק) |
| sapir | Sapir Dolkart | Sapir_Dolkart | 0 (ריק) |
| may | May Goldstain | May_Goldstain | 5 |

**קובץ נתונים:** `src/lib/agency-data.ts`

---

## וידאו - Motion Page
16 סרטונים פעילים:

1. Meatbar.mp4 - Meat Bar
2. Montifiore-Final-11.mp4 - HOTEL MONTEFIORE
3. Maze-calimela-italy.mp4 - Calimala Firenze Italy
4. Meatbar-Burger.mp4 - Meat Bar
5. PEREH.mp4 - Pere Hotel
6. TYO.mp4 - TYO
7. NESPRESSO-OPA-TREYSAR.mp4 - Nespreso & Ari Galil
8. ILU-birds.mp4 - ILU Birds
9. ARIA-Baby-Jam.mp4 - ARIA & Meshek Bechor
10. Shams.mp4 - Shams
11. GreenOnyx-FrenchToast.mp4 - WannaGreen & R2M
12. BAR-in-Berlin.mp4 - Bar in Berlin
13. HIBAR_1.mp4 - Hibar
14. Assaf-winery-Rossi-shitrit-.mp4 - Assaf Winery
15. CAROL.mp4 - Carol
16. TANIA.mp4 - Tania

**קובץ נתונים:** `src/lib/motion-data.ts`

### וידאו חסרים (9)
- Mire-golan.mp4
- Gaijin.mp4
- Nela_asaf-edit-1.mp4
- Lokal-Burger.mp4
- IBIZA.mp4
- HIBA-by-YOSSI-SHITRIT.mp4
- DSC02566.mp4
- santi-1.mp4
- naifa-new-1.mp4

---

## Hotels Page
3 מלונות עם גלריית scroll-snap:

| מלון | מיקום | תמונות | וידאו |
|---|---|---|---|
| CALIMALA | Florence, Italy | 3 | 1 (1.mp4) |
| HOTEL MONTEFIORE | Tel Aviv | 4 | 1 |
| PEREH | Galil | 2 | 1 |

**קובץ נתונים:** `src/lib/hotels-data.ts`

---

## אופטימיזציות שבוצעו

### דחיסת תמונות
- **לפני:** 109MB
- **אחרי:** 57MB
- **חיסכון:** 47.5%
- **כלי:** sharp (scripts/compress-images.js)

### דחיסת וידאו
- **לפני:** ~4.1GB
- **אחרי:** ~400MB
- **חיסכון:** ~90%
- **כלי:** ffmpeg (scripts/compress-videos.sh)
- **הגדרות:** 1280px width, CRF 28, libx264

---

## תאימות מובייל
- Agency: גריד 2 עמודות, תוכן scrollable
- Hotels: overlay תחתון עם שם מלון וניווט נקודות
- Menu: תפריט המבורגר מותאם

---

## טכנולוגיות
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel (Static Export)
- **Images:** Next/Image (unoptimized for static)

---

## קבצים חשובים לעריכה

### הוספת צלם חדש
1. צור תיקייה ב-`public/[שם_צלם]/`
2. הוסף תמונות לתיקייה
3. ערוך `src/lib/agency-data.ts` - הוסף entry חדש

### הוספת וידאו ל-Motion
1. הוסף קובץ mp4 ל-`public/video/`
2. ערוך `src/lib/motion-data.ts` - הוסף entry חדש

### הוספת מלון ל-Hotels
1. הוסף תמונות/וידאו ל-`public/hotels/`
2. ערוך `src/lib/hotels-data.ts`

---

## פקודות

```bash
# התקנה
npm install

# פיתוח מקומי
npm run dev

# Build
npm run build

# דחיסת תמונות
node scripts/compress-images.js

# דחיסת וידאו
./scripts/compress-videos.sh
```

---

## Git & Deployment

**Repository:** https://github.com/DisasterDesign/karela-agency

הדיפלוי אוטומטי - כל push ל-main מפעיל build חדש ב-Vercel.

---

## רשימת תיקונים לביצוע (Client Feedback)

### גבוה
- [ ]

### בינוני
- [ ]

### נמוך
- [ ]

---

## הערות נוספות

- קבצי וידאו גדולים הוסרו מ-Git LFS לתמיכה ב-Vercel
- כל הנתיבים דינמיים משתמשים ב-generateStaticParams()
- יש 2 צלמים ללא תמונות (Daniel Israel, Sapir Dolkart)

---

*עודכן: 14 ינואר 2026*
