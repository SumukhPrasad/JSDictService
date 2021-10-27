# JSDictService
This is a small dictionary program for viewing dictionaries.

Due to copyright issues, I cannot publish the macOS Dictionaries. You'll need to get thse yourself and then convert it into JSON like this:
- Cppy the `body.data` file from the dictionaries at `/System/Library/AssetsV2/com_apple_MobileAsset_DictionaryServices_dictionaryOSX/`.
- Then, cppy then into `src/backend/assets/AppleDictionaryFiles/XML`.
- Then, navigate to `src/backend/assets/apple-dict-parser` and execute `./dedict ../AppleDictionaryFiles/data/Body.data | ./strip | ./checkxml.py > ../AppleDictionaryFiles/dictionary.xml` 
- Finally, navigate to `modules`. Edit line 3 to correspond to the name of the XML file with the dictionary data. The run `node appledictprepare.js`.
- This dictionary will now be accessible at [http://localhost:3000/dictionary/](http://localhost:3000/dictionary/)


### Acknowledgements:
- Thanks to [@matthewreagan](https://github.com/matthewreagan) for [WebstersEnglishDictionary](https://github.com/matthewreagan/WebstersEnglishDictionary). A part of this is located at `assets/webster/dict.json` in this project.
- Thanks to [@jadedtuna](https://github.com/jadedtuna) for [apple-dictionary](https://github.com/jadedtuna/apple-dictionary) This is located at `assets/apple-dict-parser` in this project.