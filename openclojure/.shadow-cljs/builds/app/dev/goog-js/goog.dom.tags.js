["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/tags.js"],"~:js","goog.provide(\"goog.dom.tags\");\ngoog.require(\"goog.object\");\n/** @private @const @type {!Object<string,boolean>} */ goog.dom.tags.VOID_TAGS_ = goog.object.createSet(\"area\", \"base\", \"br\", \"col\", \"command\", \"embed\", \"hr\", \"img\", \"input\", \"keygen\", \"link\", \"meta\", \"param\", \"source\", \"track\", \"wbr\");\n/**\n @param {string} tagName\n @return {boolean}\n */\ngoog.dom.tags.isVoidTag = function(tagName) {\n  return goog.dom.tags.VOID_TAGS_[tagName] === true;\n};\n","~:source","// Copyright 2014 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Utilities for HTML element tag names.\n */\ngoog.provide('goog.dom.tags');\n\ngoog.require('goog.object');\n\n\n/**\n * The void elements specified by\n * http://www.w3.org/TR/html-markup/syntax.html#void-elements.\n * @const @private {!Object<string, boolean>}\n */\ngoog.dom.tags.VOID_TAGS_ = goog.object.createSet(\n    'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input',\n    'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr');\n\n\n/**\n * Checks whether the tag is void (with no contents allowed and no legal end\n * tag), for example 'br'.\n * @param {string} tagName The tag name in lower case.\n * @return {boolean}\n */\ngoog.dom.tags.isVoidTag = function(tagName) {\n  return goog.dom.tags.VOID_TAGS_[tagName] === true;\n};\n","~:compiled-at",1582904379425,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.tags.js\",\n\"lineCount\":11,\n\"mappings\":\"AAiBAA,IAAAC,QAAA,CAAa,eAAb,CAAA;AAEAD,IAAAE,QAAA,CAAa,aAAb,CAAA;AAQA,uDAAAF,IAAAG,IAAAC,KAAAC,WAAA,GAA2BL,IAAAM,OAAAC,UAAA,CACvB,MADuB,EACf,MADe,EACP,IADO,EACD,KADC,EACM,SADN,EACiB,OADjB,EAC0B,IAD1B,EACgC,KADhC,EACuC,OADvC,EAEvB,QAFuB,EAEb,MAFa,EAEL,MAFK,EAEG,OAFH,EAEY,QAFZ,EAEsB,OAFtB,EAE+B,KAF/B,CAA3B;AAWA;;;;AAAAP,IAAAG,IAAAC,KAAAI,UAAA,GAA0BC,QAAQ,CAACC,OAAD,CAAU;AAC1C,SAAOV,IAAAG,IAAAC,KAAAC,WAAA,CAAyBK,OAAzB,CAAP,KAA6C,IAA7C;AAD0C,CAA5C;;\",\n\"sources\":[\"goog/dom/tags.js\"],\n\"sourcesContent\":[\"// Copyright 2014 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Utilities for HTML element tag names.\\n */\\ngoog.provide('goog.dom.tags');\\n\\ngoog.require('goog.object');\\n\\n\\n/**\\n * The void elements specified by\\n * http://www.w3.org/TR/html-markup/syntax.html#void-elements.\\n * @const @private {!Object<string, boolean>}\\n */\\ngoog.dom.tags.VOID_TAGS_ = goog.object.createSet(\\n    'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input',\\n    'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr');\\n\\n\\n/**\\n * Checks whether the tag is void (with no contents allowed and no legal end\\n * tag), for example 'br'.\\n * @param {string} tagName The tag name in lower case.\\n * @return {boolean}\\n */\\ngoog.dom.tags.isVoidTag = function(tagName) {\\n  return goog.dom.tags.VOID_TAGS_[tagName] === true;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"dom\",\"tags\",\"VOID_TAGS_\",\"object\",\"createSet\",\"isVoidTag\",\"goog.dom.tags.isVoidTag\",\"tagName\"]\n}\n"]