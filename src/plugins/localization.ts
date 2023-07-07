const locales = [
    "en-gl",
    "en-hk",
    "zh-hk",
    "en-cn",
    "zh-cn",
    "en-tw",
    "zh-tw",
    "en-jp",
    "ja-jp",
    "en-id",
    "en-kr",
    "ko-kr",
    "en-sg",
    "en-au",
    "en-in",
    "en-ae",
    "en-lk",
  ] as const;
  
  type localesT = typeof locales[number];
  
  const localizationSettings = {
    locales: [...locales],
  
    defaultLocale: "en-gl",
    fallback: true,
  };
  
  const localesSiteUrl: Record<localesT, string> = {
    "en-gl": "https://www.executivecentre.com",
    "en-hk": "https://www.executivecentre.com/en-hk",
    "zh-hk": "https://www.executivecentre.com/zh-hk",
    "en-cn": "https://www.executivecentre.com/en-cn",
    "zh-cn": "https://www.executivecentre.com.cn",
    "en-tw": "https://www.executivecentre.com/en-tw",
    "zh-tw": "https://www.executivecentre.com/zh-tw",
    "en-jp": "https://www.executivecentre.com/en-jp",
    "ja-jp": "https://www.executivecentre.com/ja-jp",
    "en-id": "https://www.executivecentre.com/en-id",
    "en-kr": "https://www.executivecentre.com/en-kr",
    "ko-kr": "https://www.executivecentre.co.ko",
    "en-sg": "https://www.executivecentre.com/en-sg",
    "en-au": "https://www.executivecentre.com/en-au",
    "en-in": "https://www.executivecentre.com/en-in",
    "en-ae": "https://www.executivecentre.com/en-ae",
    "en-lk": "https://www.executivecentre.com/en-lk",
  };
  
  export { localizationSettings, locales, localesSiteUrl };
  export type { localesT };
  