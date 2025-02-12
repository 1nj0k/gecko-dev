/* Any copyright is dedicated to the Public Domain.
   http://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

const test = new SearchConfigTest({
  identifier: "amazon",
  default: {
    // Not included anywhere.
  },
  available: {
    included: [
      // Note: These should be based on region, but we don't currently enforce that.
      // Note: the order here is important. A region/locale match higher up in the
      // list will override a region/locale match lower down.
      {
        regions: ["au", "ca"],
      },
      {
        // We don't currently enforce by region, but do locale instead.
        // regions: [
        //   "at", "au", "be", "ca", "ch", "de", "fr", "gb", "ie", "it", "jp", "nl",
        //   "us",
        // ],
        locales: {
          matches: [
            "ach",
            "af",
            "ar",
            "az",
            "bg",
            "bn",
            "bn-IN",
            "br",
            "cak",
            "cy",
            "da",
            "de",
            "dsb",
            "el",
            "en-US",
            "en-GB",
            "eo",
            "es-AR",
            "eu",
            "fa",
            "ff",
            "fr",
            "ga-IE",
            "gd",
            "gl",
            "gn",
            "gu-IN",
            "hr",
            "hsb",
            "hy-AM",
            "ia",
            "is",
            "it",
            "ja-JP-macos",
            "ja",
            "ka",
            "km",
            "kn",
            "lij",
            "lt",
            "mk",
            "mr",
            "ms",
            "my",
            "nb-NO",
            "nn-NO",
            "pa-IN",
            "pt-PT",
            "ro",
            "si",
            "son",
            "sq",
            "sr",
            "ta",
            "te",
            "th",
            "tl",
            "trs",
            "ur",
            "uz",
            "wo",
            "zh-CN",
          ],
        },
      },
    ],
  },
  details: [
    {
      domain: "amazon.com.au",
      telemetryId: "amazon-au",
      aliases: ["@amazon"],
      included: [
        {
          regions: ["au"],
        },
      ],
      searchUrlCode: "tag=mozillaaustra-22",
      suggestionUrlBase: "https://completion.amazon.com.au/search/complete",
      suggestUrlCode: "mkt=111172",
    },
    {
      domain: "amazon.ca",
      telemetryId: "amazon-ca",
      aliases: ["@amazon"],
      included: [
        {
          regions: ["ca"],
        },
      ],
      searchUrlCode: "tag=mozillacanada-20",
      suggestionUrlBase: "https://completion.amazon.ca/search/complete",
      suggestUrlCode: "mkt=7",
    },
    {
      domain: "amazon.fr",
      telemetryId: "amazon-france",
      aliases: ["@amazon"],
      included: [
        {
          locales: {
            matches: ["br", "fr", "ff", "son", "wo"],
          },
        },
        {
          regions: ["fr"],
          locales: {
            matches: [
              "ach",
              "af",
              "ar",
              "az",
              "bg",
              "bn-IN",
              "cak",
              "unknown",
              "eo",
              "en-US",
              "es-AR",
              "fa",
              "gn",
              "hy-AM",
              "ia",
              "is",
              "ka",
              "km",
              "lt",
              "mk",
              "ms",
              "my",
              "ro",
              "si",
              "th",
              "tl",
              "trs",
              "uz",
            ],
          },
        },
      ],
      excluded: [{ regions: ["au", "ca"] }],
      searchUrlCode: "tag=firefox-fr-21",
      suggestionUrlBase: "https://completion.amazon.fr/search/complete",
      suggestUrlCode: "mkt=5",
    },
    {
      domain: "amazon.co.uk",
      telemetryId: "amazon-en-GB",
      aliases: ["@amazon"],
      included: [
        {
          locales: {
            matches: [
              "cy",
              "da",
              "el",
              "en-GB",
              "eu",
              "ga-IE",
              "gd",
              "gl",
              "hr",
              "nb-NO",
              "nn-NO",
              "pt-PT",
              "sq",
              "sr",
            ],
          },
        },
        {
          regions: ["gb"],
          locales: {
            matches: [
              "ach",
              "af",
              "ar",
              "az",
              "bg",
              "bn-IN",
              "cak",
              "unknown",
              "eo",
              "en-US",
              "es-AR",
              "fa",
              "gn",
              "hy-AM",
              "ia",
              "is",
              "ka",
              "km",
              "lt",
              "mk",
              "ms",
              "my",
              "ro",
              "si",
              "th",
              "tl",
              "trs",
              "uz",
            ],
          },
        },
      ],
      excluded: [{ regions: ["au", "ca"] }],
      searchUrlCode: "tag=firefox-uk-21",
      suggestionUrlBase: "https://completion.amazon.co.uk/search/complete",
      suggestUrlCode: "mkt=3",
    },
    {
      domain: "amazon.com",
      telemetryId: "amazondotcom",
      aliases: ["@amazon"],
      included: [
        {
          locales: {
            matches: [
              "ach",
              "af",
              "ar",
              "az",
              "bg",
              "bn-IN",
              "cak",
              "unknown",
              "eo",
              "en-US",
              "es-AR",
              "fa",
              "gn",
              "hy-AM",
              "ia",
              "is",
              "ka",
              "km",
              "lt",
              "mk",
              "ms",
              "my",
              "ro",
              "si",
              "th",
              "tl",
              "trs",
              "uz",
            ],
          },
        },
      ],
      excluded: [{ regions: ["au", "ca", "fr", "gb"] }],
      searchUrlCode: "tag=mozilla-20",
    },
    {
      domain: "amazon.cn",
      telemetryId: "amazondotcn",
      included: [
        {
          locales: {
            matches: ["zh-CN"],
          },
        },
      ],
      excluded: [{ regions: ["au", "ca"] }],
      searchUrlCode: "ix=sunray",
      noSuggestionsURL: true,
    },
    {
      domain: "amazon.co.jp",
      telemetryId: "amazon-jp",
      aliases: ["@amazon"],
      included: [
        {
          locales: {
            startsWith: ["ja"],
          },
        },
      ],
      excluded: [{ regions: ["au", "ca"] }],
      searchUrlCode: "tag=mozillajapan-fx-22",
      suggestionUrlBase: "https://completion.amazon.co.jp/search/complete",
      suggestUrlCode: "mkt=6",
    },
    {
      domain: "amazon.de",
      telemetryId: "amazon-de",
      aliases: ["@amazon"],
      included: [
        {
          locales: {
            matches: ["de", "dsb", "hsb"],
          },
        },
      ],
      excluded: [{ regions: ["au", "ca"] }],
      searchUrlCode: "tag=firefox-de-21",
      suggestionUrlBase: "https://completion.amazon.de/search/complete",
      suggestUrlCode: "mkt=4",
    },
    {
      domain: "amazon.in",
      telemetryId: "amazon-in",
      aliases: ["@amazon"],
      included: [
        {
          locales: {
            matches: ["bn", "gu-IN", "kn", "mr", "pa-IN", "ta", "te", "ur"],
          },
        },
      ],
      excluded: [{ regions: ["au", "ca"] }],
      suggestionUrlBase: "https://completion.amazon.in/search/complete",
      suggestUrlCode: "mkt=44571",
    },
    {
      domain: "amazon.it",
      telemetryId: "amazon-it",
      aliases: ["@amazon"],
      included: [
        {
          locales: {
            matches: ["it", "lij"],
          },
        },
      ],
      excluded: [{ regions: ["au", "ca"] }],
      searchUrlCode: "tag=firefoxit-21",
      suggestionUrlBase: "https://completion.amazon.it/search/complete",
      suggestUrlCode: "mkt=35691",
    },
  ],
});

add_task(async function setup() {
  // We only need to do setup on one of the tests.
  await test.setup();
});

add_task(async function test_searchConfig_amazon() {
  await test.run();
});
